export type RootStackParamList = {
  Drawer: {};
  Home: {};
  ProfileModal: {login: string};
  NewPostModal: {};
  Hashtag: {hashtag: string};
  Avatar: {url: string};
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
