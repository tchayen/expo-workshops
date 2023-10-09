import React, {useContext} from 'react';

import {Screen} from '@/ui/Screen';
import {FlashList} from '@shopify/flash-list';
import {Post} from '@/types';
import {PostListItem} from '@/ui/PostListItem';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {AuthenticationContext} from '@/AuthenticationContext';
import {useQuery} from '@tanstack/react-query';
import {API_SERVER_URL} from '@/api';
import Svg, {Path} from 'react-native-svg';
import {Pressable, StyleSheet, View} from 'react-native';
import {colors} from '@/ui/colors';
import {useRouter} from 'expo-router';

export default function HomeScreen() {
  const {token} = useContext(AuthenticationContext);
  const insets = useSafeAreaInsets();
  const router = useRouter();

  const {data, isLoading, refetch} = useQuery({
    queryKey: ['timeline'],
    queryFn: async () => {
      return fetch(`${API_SERVER_URL}/user/timeline`, {
        headers: {authorization: `Bearer ${token}`},
      }).then(response => response.json());
    },
  });

  return (
    <Screen>
      <FlashList
        contentContainerStyle={{paddingTop: insets.top}}
        data={data?.data as Post[]}
        renderItem={({item}) => {
          return <PostListItem item={item} />;
        }}
        estimatedItemSize={100}
        refreshing={isLoading}
        onRefresh={() => {
          refetch();
        }}
      />
      <Pressable
        onPress={() => {
          router.push('/new-post');
        }}>
        <View style={styles.fab}>
          <Svg width="32" height="32" viewBox="0 0 48 48" fill="none">
            <Path
              d="M41.9741 6.02492C39.2767 3.32751 34.9033 3.32765 32.2061 6.02522L8.03755 30.1967C7.27584 30.9585 6.73303 31.9111 6.46599 32.9547L4.03904 42.4398C3.9296 42.8675 4.05389 43.3212 4.36603 43.6334C4.67816 43.9456 5.13183 44.07 5.55956 43.9607L15.0458 41.5361C16.0904 41.2691 17.0439 40.726 17.8062 39.9635L37.971 19.7963L38.8514 20.7354C39.4974 21.4244 39.48 22.5018 38.8121 23.1697L35.3661 26.6157C34.878 27.1038 34.878 27.8953 35.3661 28.3835C35.8543 28.8716 36.6457 28.8716 37.1339 28.3835L40.5799 24.9375C42.2019 23.3154 42.2441 20.699 40.6752 19.0255L39.7396 18.0275L41.9744 15.7924C44.6714 13.095 44.6713 8.7221 41.9741 6.02492ZM33.9739 7.79288C35.6949 6.07172 38.4853 6.07163 40.2064 7.79269C41.9273 9.5136 41.9274 12.3037 40.2066 14.0247L16.0383 38.1959C15.5933 38.641 15.0366 38.9581 14.4268 39.114L6.9838 41.0163L8.88796 33.5745C9.04386 32.9652 9.36075 32.409 9.80542 31.9643L33.9739 7.79288Z"
              fill="#fff"
            />
          </Svg>
        </View>
      </Pressable>
    </Screen>
  );
}

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    width: 56,
    height: 56,
    borderRadius: 56 / 2,
    backgroundColor: colors.blue[10],
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: colors.slate[12],
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 16,
  },
});
