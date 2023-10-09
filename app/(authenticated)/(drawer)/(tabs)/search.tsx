import React, {useCallback, useContext, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {FlashList} from '@shopify/flash-list';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useQuery} from '@tanstack/react-query';

import {Screen} from '@/ui/Screen';
import {Post} from '@/types';
import {PostListItem} from '@/ui/PostListItem';
import {AuthenticationContext} from '@/AuthenticationContext';
import {API_SERVER_URL} from '@/api';
import {Input} from '@/ui/Input';
import {colors} from '@/ui/colors';
import {Empty} from '@/ui/Empty';

export default function SearchScreen() {
  const [query, setQuery] = useState('');
  const {token} = useContext(AuthenticationContext);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const insets = useSafeAreaInsets();

  const queryFn = useCallback(async () => {
    return fetch(
      `${API_SERVER_URL}/user/search?${new URLSearchParams({query})}`,
      {headers: {authorization: `Bearer ${token}`}},
    ).then(response => response.json());
  }, [query, token]);

  const {data} = useQuery({
    queryKey: ['timeline', query],
    queryFn,
    enabled: Boolean(query),
  });

  function onChange(text: string) {
    setQuery(text);
  }

  return (
    <Screen style={{paddingTop: insets.top}}>
      <View style={styles.section}>
        <Input
          onChangeText={onChange}
          Icon={
            <Svg width={24} height={24} viewBox="0 0 48 48" fill="none">
              <Path
                d="M20 6C12.268 6 6 12.268 6 20C6 27.732 12.268 34 20 34C23.4159 34 26.5461 32.7766 28.9763 30.7441L39.8662 41.6339C40.3543 42.122 41.1458 42.122 41.6339 41.6339C42.1221 41.1457 42.1221 40.3543 41.6339 39.8661L30.7441 28.9763C32.7766 26.5461 34 23.4159 34 20C34 12.268 27.732 6 20 6ZM8.5 20C8.5 13.6487 13.6487 8.5 20 8.5C26.3513 8.5 31.5 13.6487 31.5 20C31.5 26.3513 26.3513 31.5 20 31.5C13.6487 31.5 8.5 26.3513 8.5 20Z"
                fill={colors.slate[11]}
              />
            </Svg>
          }
          placeholder="Search"
        />
      </View>
      <FlashList
        data={data?.data as Post[]}
        renderItem={({item}) => {
          return <PostListItem item={item} />;
        }}
        estimatedItemSize={100}
        refreshing={isRefreshing}
        ListEmptyComponent={<Empty />}
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
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.slate[7],
  },
});
