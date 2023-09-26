import express from 'express';
import {User, timeline, users} from './db';

const app = express();
const port = 3333;

const token = 'T0k3n123==';
const currentUser = [...users.keys()][0];

app.use(slowDownMiddleware);
app.use(express.json());
app.use('/api/v1/user/*', authMiddleware);

app.post('/api/v1/sign-in', (_request, response) => {
  response.json({token});
});

app.get('/api/v1/user/timeline', (_request, response) => {
  response.json({data: timeline});
});

app.get('/api/v1/user/search', (request, response) => {
  response.json({
    data: timeline.filter(post =>
      post.post
        .toLocaleLowerCase()
        .includes((request.query.query as string).toLocaleLowerCase()),
    ),
  });
});

app.get('/api/v1/user/timeline/hashtag/:hashtag', (request, response) => {
  response.json({
    data: timeline.filter(post =>
      post.post.includes(`#${request.params.hashtag}`),
    ),
  });
});

app.get('/api/v1/user/me', (_request, response) => {
  response.json({data: [...users.values()][0]});
});

app.get('/api/v1/user/:login', (request, response) => {
  const user = users.get(request.params.login);

  if (!user) {
    return response.status(404).json({
      message: 'User not found',
    });
  }

  response.json({data: addCountsToUser(user)});
});

app.post('/api/v1/user/:login/follow', (request, response) => {
  const current = users.get(currentUser);

  if (!current) {
    return response.status(500).json({
      message: 'Internal server error',
    });
  }

  const toFollow = users.get(request.params.login);

  if (!toFollow) {
    return response.status(404).json({
      message: 'User not found',
    });
  }

  users.set(currentUser, {
    ...current,
    // Guarantee uniqueness.
    following: [
      ...new Set([...(current.following ?? []), request.params.login]),
    ],
  });

  response.json({data: addCountsToUser(users.get(currentUser))});
});

app.post('/api/v1/user/:login/unfollow', (request, response) => {
  const current = users.get(currentUser);

  if (!current) {
    return response.status(500).json({
      message: 'Internal server error',
    });
  }

  const toFollow = users.get(request.params.login);

  if (!toFollow) {
    return response.status(404).json({
      message: 'User not found',
    });
  }

  users.set(currentUser, {
    ...current,
    following: current.following?.filter(
      following => following !== request.params.login,
    ),
  });

  response.json({data: addCountsToUser(users.get(currentUser))});
});

app.post('/api/v1/user/post', (request, response) => {
  const current = users.get(currentUser);

  if (!current) {
    return response.status(500).json({
      message: 'Internal server error',
    });
  }

  const newPost = {...request.body, author: current.login};
  timeline.unshift(newPost);

  response.json({data: timeline});
});

app.get('/api/v1/user/:login/posts', (request, response) => {
  response.json({
    data: timeline.filter(post => post.author === request.params.login),
  });
});

app.get('/api/v1/user/:login/followers', (request, response) => {
  response.json({
    data: [...users.values()]
      .flatMap(user =>
        user.following.includes(request.params.login) ? [user.login] : [],
      )
      .map(login => users.get(login))
      .map(user => addCountsToUser(user)),
  });
});

app.get('/api/v1/user/:login/following', (request, response) => {
  response.json({
    data: (users.get(request.params.login)?.following ?? [])
      .map(login => users.get(login))
      .map(user => addCountsToUser(user)),
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

/**
 * Check if the request has a valid token.
 */
function authMiddleware(
  request: express.Request,
  response: express.Response,
  next: express.NextFunction,
) {
  if (request.headers.authorization !== `Bearer ${token}`) {
    return response.status(401).json({
      message: 'Unauthorized',
    });
  }

  next();
}

/**
 * Let's simulate a slightly slower network.
 */
function slowDownMiddleware(
  _request: express.Request,
  _response: express.Response,
  next: express.NextFunction,
) {
  setTimeout(next, 350);
}

function addCountsToUser(user?: User) {
  if (!user) {
    return user;
  }

  const posts = timeline.filter(post => post.author === user.login);

  return {
    ...user,
    postCount: posts.length,
    followersCount: [...users.values()].filter(
      follower => follower.following?.includes(user.login) ?? false,
    ).length,
    followingCount: user.following.length,
  };
}
