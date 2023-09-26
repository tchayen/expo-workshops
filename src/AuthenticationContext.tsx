import {createContext} from 'react';

export const AuthenticationContext = createContext<{
  token: string | null;
  setToken: (token: string | null) => void;
}>({
  token: null,
  setToken: (_token: string | null) => {},
});
