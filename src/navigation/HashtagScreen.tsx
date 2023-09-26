import React, {useContext} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from './navigationTypes';
import {Screen} from '../ui/Screen';
import {Post} from '../types';
import {PostListItem} from '../ui/PostListItem';
import {FlashList} from '@shopify/flash-list';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../ui/colors';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useQuery} from '@tanstack/react-query';
import {API_SERVER_URL} from '../api';
import {AuthenticationContext} from '../AuthenticationContext';

export function HashtagScreen({
  route,
}: StackScreenProps<RootStackParamList, 'Hashtag'>) {
  const {hashtag} = route.params;
  const {token} = useContext(AuthenticationContext);
  const insets = useSafeAreaInsets();

  const {data, isLoading} = useQuery({
    queryKey: [hashtag, 'hashtag'],
    queryFn: async () => {
      return fetch(`${API_SERVER_URL}/user/timeline/hashtag/${hashtag}`, {
        headers: {authorization: `Bearer ${token}`},
      }).then(res => res.json());
    },
  });

  return (
    <Screen style={{paddingTop: insets.top}}>
      <View style={styles.section}>
        <Text style={styles.hashtag}>#{hashtag}</Text>
        <Text style={styles.description}>See hashtag results.</Text>
      </View>
      <FlashList
        refreshing={isLoading}
        data={data?.data as Post[]}
        renderItem={({item}) => {
          return <PostListItem item={item} />;
        }}
        estimatedItemSize={100}
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
  hashtag: {
    fontSize: 24,
    fontWeight: '600',
    color: colors.slate[12],
  },
  description: {
    fontSize: 15,
    color: colors.slate[11],
  },
});
