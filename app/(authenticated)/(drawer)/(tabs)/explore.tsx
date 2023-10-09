import React, {useContext, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useQuery} from '@tanstack/react-query';
import {FlashList} from '@shopify/flash-list';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {Screen} from '@/ui/Screen';
import {AuthenticationContext} from '@/AuthenticationContext';
import {API_SERVER_URL} from '@/api';
import {Post} from '@/types';
import {PostListItem} from '@/ui/PostListItem';
import {colors} from '@/ui/colors';

export default function ExploreScreen() {
  const {token} = useContext(AuthenticationContext);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const insets = useSafeAreaInsets();

  const {data} = useQuery({
    queryKey: ['timeline'],
    queryFn: async () => {
      return fetch(`${API_SERVER_URL}/user/timeline`, {
        headers: {authorization: `Bearer ${token}`},
      }).then(response => response.json());
    },
  });

  return (
    <Screen style={{paddingTop: insets.top}}>
      <View style={styles.section}>
        <Text style={styles.header}>Explore</Text>
        <Text style={styles.description}>Discover new posts.</Text>
      </View>
      <FlashList
        data={data?.data as Post[]}
        renderItem={({item}) => {
          return <PostListItem item={item} />;
        }}
        estimatedItemSize={100}
        refreshing={isRefreshing}
        onRefresh={() => {
          setIsRefreshing(true);
          setTimeout(() => {
            setIsRefreshing(false);
          }, 2500);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  section: {
    padding: 16,
    gap: 4,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.slate[7],
  },
  header: {
    fontSize: 24,
    fontWeight: '600',
    color: colors.slate[12],
  },
  description: {
    fontSize: 15,
    color: colors.slate[11],
  },
});
