export type User = {
  name: string;
  login: string;
  followersCount: number;
  postCount: number;
  avatar: string;
  bio: string;
  birthday?: string;
  location?: string;
  following: string[];
};

export type Post = {
  post: string;
  author: string;
  timestamp: number;
};
