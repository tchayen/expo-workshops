import {NavigationContainer} from '@react-navigation/native';
import React, {useContext, useEffect, useState} from 'react';
import {Dimensions, StatusBar, useColorScheme} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import BootSplash from 'react-native-bootsplash';
import {ProfileModal} from './src/navigation/ProfileModal';
import {HomeScreen} from './src/navigation/HomeScreen';
import {
  BottomTabsParamList,
  DrawerParamList,
  RootStackParamList,
} from './src/navigation/navigationTypes';
import {HashtagScreen} from './src/navigation/HashtagScreen';
import {AvatarScreen} from './src/navigation/AvatarScreen';
import {ProfileScreen} from './src/navigation/ProfileScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  CompassIcon,
  HomeIcon,
  ProfileIcon,
  SearchIcon,
} from './src/ui/tabBarIcons';
import {ExploreScreen} from './src/navigation/ExploreScreen';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {SignInScreen} from './src/navigation/SignInScreen';
import {AuthenticationContext} from './src/AuthenticationContext';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {DrawerContent} from './src/navigation/DrawerContent';
import {SearchScreen} from './src/navigation/SearchScreen';
import {NewPostModal} from './src/navigation/NewPostModal';

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<BottomTabsParamList>();
const Drawer = createDrawerNavigator<DrawerParamList>();

function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{header: () => null}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Hashtag" component={HashtagScreen} />
    </Stack.Navigator>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
      }}>
      <Tab.Screen
        name="Main"
        component={StackNavigator}
        options={{tabBarIcon: HomeIcon}}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{tabBarIcon: SearchIcon}}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{tabBarIcon: CompassIcon}}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{tabBarIcon: ProfileIcon}}
      />
    </Tab.Navigator>
  );
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={DrawerContent}
      screenOptions={{
        drawerType: 'slide',
        header: () => null,
      }}>
      <Drawer.Screen name="Tabs" component={TabNavigator} />
    </Drawer.Navigator>
  );
}

function Navigation(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {backgroundColor: isDarkMode ? '#000' : '#fff'};
  const {token} = useContext(AuthenticationContext);

  return (
    <NavigationContainer>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {token ? (
          <>
            <Stack.Screen name="Drawer" component={DrawerNavigator} />
            <Stack.Screen
              name="Avatar"
              component={AvatarScreen}
              options={{
                presentation: 'transparentModal',
                gestureEnabled: true,
                gestureResponseDistance: Dimensions.get('screen').height,
              }}
            />
            <Stack.Screen
              name="ProfileModal"
              component={ProfileModal}
              options={{
                presentation: 'transparentModal',
                gestureEnabled: true,
                gestureResponseDistance: Dimensions.get('screen').height,
              }}
            />
            <Stack.Screen
              name="NewPostModal"
              component={NewPostModal}
              options={{
                presentation: 'transparentModal',
                gestureEnabled: true,
                gestureResponseDistance: Dimensions.get('screen').height,
              }}
            />
          </>
        ) : (
          <Stack.Screen name="SignIn" component={SignInScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const queryClient = new QueryClient();

export default function App() {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    async function run() {
      await wait(1000);

      await BootSplash.hide({fade: true});
    }

    run();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <AuthenticationContext.Provider value={{token, setToken}}>
        <Navigation />
      </AuthenticationContext.Provider>
    </QueryClientProvider>
  );
}

function wait(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
