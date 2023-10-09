import React from 'react';
import {Tabs} from 'expo-router';
import {CompassIcon, HomeIcon, ProfileIcon, SearchIcon} from '@/ui/tabBarIcons';

export default function Layout() {
  return (
    <Tabs
      initialRouteName="(stack)"
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
      }}>
      <Tabs.Screen name="(stack)" options={{tabBarIcon: HomeIcon}} />
      <Tabs.Screen name="search" options={{tabBarIcon: SearchIcon}} />
      <Tabs.Screen name="explore" options={{tabBarIcon: CompassIcon}} />
      <Tabs.Screen
        name="profile/[username]"
        options={{tabBarIcon: ProfileIcon}}
      />
    </Tabs>
  );
}
