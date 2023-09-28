import {User} from '../types';

export type RootStackParamList = {
  Drawer: {};
  Home: {};
  ProfileModal: {login: string};
  NewPostModal: {};
  Hashtag: {hashtag: string};
  Avatar: {user: User};
  SignIn: {};
};

export type BottomTabsParamList = {
  Main: {};
  Search: {};
  Explore: {};
  Profile: {login?: string};
};

export type DrawerParamList = {
  Tabs: {};
};
