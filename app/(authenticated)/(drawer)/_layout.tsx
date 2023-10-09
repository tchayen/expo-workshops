import React, {useContext} from 'react';
import {Redirect} from 'expo-router';
import {AuthenticationContext} from '@/AuthenticationContext';
import {Drawer} from 'expo-router/drawer';
import {DrawerContent} from '@/navigation/DrawerContent';

export default function Layout() {
  const {token} = useContext(AuthenticationContext);

  if (!token) {
    return <Redirect href="/sign-in" />;
  }

  return (
    <Drawer
      initialRouteName="(tabs)"
      drawerContent={DrawerContent}
      screenOptions={{
        drawerType: 'slide',
        header: () => null,
      }}
    />
  );
}
