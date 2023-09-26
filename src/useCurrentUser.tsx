import {useContext} from 'react';
import {AuthenticationContext} from './AuthenticationContext';
import {useQuery} from '@tanstack/react-query';
import {User} from './types';
import {API_SERVER_URL} from './api';

export function useCurrentUser() {
  const {token} = useContext(AuthenticationContext);

  const {data, refetch} = useQuery({
    queryKey: ['me', 'user'],
    queryFn: async () => {
      return fetch(`${API_SERVER_URL}/user/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then(response => response.json());
    },
  });

  return {currentUser: data?.data as User | undefined, refetch};
}
