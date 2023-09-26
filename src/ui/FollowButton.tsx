import React, {useContext} from 'react';
import {TopRightCornerButton} from './TopRightCornerButton';
import {useCurrentUser} from '../useCurrentUser';
import Svg, {Path} from 'react-native-svg';
import {useMutation} from '@tanstack/react-query';
import {AuthenticationContext} from '../AuthenticationContext';
import {API_SERVER_URL} from '../api';

export function FollowButton({login}: {login: string}) {
  const {token} = useContext(AuthenticationContext);
  const {currentUser, refetch} = useCurrentUser();

  const {mutateAsync: follow, isLoading: isLoadingFollow} = useMutation({
    mutationFn: async () => {
      return fetch(`${API_SERVER_URL}/user/${login}/follow`, {
        method: 'POST',
        headers: {authorization: `Bearer ${token}`},
      });
    },
  });

  const {mutateAsync: unfollow, isLoading: isLoadingUnfollow} = useMutation({
    mutationFn: async () => {
      return fetch(`${API_SERVER_URL}/user/${login}/unfollow`, {
        method: 'POST',
        headers: {authorization: `Bearer ${token}`},
      });
    },
  });

  const areYouFollowing = currentUser?.following?.includes(login);

  if (login === currentUser?.login) {
    return null;
  }

  return (
    <TopRightCornerButton
      isLoading={isLoadingFollow || isLoadingUnfollow}
      Icon={
        areYouFollowing ? (
          <Svg width="20" height="20" viewBox="0 0 48 48" fill="none">
            <Path
              d="M40.1389 12.8711C40.6243 13.362 40.6198 14.1535 40.1289 14.6389L17.8789 36.6389C17.3947 37.1176 16.6163 37.1208 16.1283 36.6459L6.87831 27.6459C6.38351 27.1645 6.37267 26.3731 6.85409 25.8783C7.33552 25.3835 8.1269 25.3727 8.62169 25.8541L16.993 33.9991L38.3711 12.8611C38.862 12.3757 39.6535 12.3802 40.1389 12.8711Z"
              fill="#fff"
            />
          </Svg>
        ) : (
          <Svg width="20" height="20" viewBox="0 0 32 32" fill="none">
            <Path
              d="M15 11C15 10.4477 15.4477 10 16 10C16.5523 10 17 10.4477 17 11V15H21C21.5523 15 22 15.4477 22 16C22 16.5523 21.5523 17 21 17H17V21C17 21.5523 16.5523 22 16 22C15.4477 22 15 21.5523 15 21V17H11C10.4477 17 10 16.5523 10 16C10 15.4477 10.4477 15 11 15H15V11ZM30 16C30 23.732 23.732 30 16 30C8.26801 30 2 23.732 2 16C2 8.26801 8.26801 2 16 2C23.732 2 30 8.26801 30 16ZM28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28C22.6274 28 28 22.6274 28 16Z"
              fill="#fff"
            />
          </Svg>
        )
      }
      onPress={() => {
        if (areYouFollowing) {
          unfollow().then(() => refetch());
        } else {
          follow().then(() => refetch());
        }
      }}>
      {areYouFollowing ? 'Following' : 'Follow'}
    </TopRightCornerButton>
  );
}
