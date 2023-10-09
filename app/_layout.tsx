import React from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {useState} from 'react';
import {Dimensions} from 'react-native';

import {AuthenticationContext} from '@/AuthenticationContext';
import {CustomStack as Stack} from '@/navigation/NonNativeStack';

const queryClient = new QueryClient();

export default function Layout() {
  const [token, setToken] = useState<string | null>(null);

  return (
    <QueryClientProvider client={queryClient}>
      <AuthenticationContext.Provider value={{token, setToken}}>
        <Stack screenOptions={{headerShown: false}} initialRouteName="(drawer)">
          <Stack.Screen
            name="(authenticated)/(modals)/profile-modal"
            options={{
              headerShown: false,
              presentation: 'transparentModal',
              gestureEnabled: true,
              gestureResponseDistance: Dimensions.get('screen').height,
            }}
          />
          <Stack.Screen
            name="(authenticated)/(modals)/avatar"
            options={{
              headerShown: false,
              presentation: 'transparentModal',
              gestureEnabled: true,
              gestureResponseDistance: Dimensions.get('screen').height,
            }}
          />
          <Stack.Screen
            name="(authenticated)/(modals)/new-post"
            options={{
              headerShown: false,
              presentation: 'transparentModal',
              gestureEnabled: true,
              gestureResponseDistance: Dimensions.get('screen').height,
            }}
          />
        </Stack>
      </AuthenticationContext.Provider>
    </QueryClientProvider>
  );
}
