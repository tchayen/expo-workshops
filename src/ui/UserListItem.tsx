import React from 'react';
import {Dimensions, Pressable, StyleSheet, Text, View} from 'react-native';
import {Image} from 'expo-image';
import {useRouter} from 'expo-router';

import {User} from '@/types';
import {colors} from '@/ui/colors';
import {FollowsYou} from '@/ui/FollowsYou';
import {useCurrentUser} from '@/useCurrentUser';

export function UserListItem({item}: {item: User}) {
  const {currentUser} = useCurrentUser();
  const router = useRouter();

  return (
    <View style={styles.user}>
      <Pressable
        onPress={() => {
          router.push({
            pathname: '/profile-modal',
            params: {username: item.login},
          });
        }}>
        <Image
          key={item.login}
          source={item.avatar}
          placeholder={item.blurhash}
          contentFit="cover"
          style={styles.image}
        />
      </Pressable>
      <View style={styles.rightSide}>
        <View style={styles.row}>
          <Text style={[styles.text, styles.name]}>{item.name}</Text>
          <Text style={styles.dot}>•</Text>
          <Text style={styles.text}>@{item.login}</Text>
        </View>
        {currentUser && item?.following?.includes(currentUser?.login) && (
          <FollowsYou />
        )}
        <Text style={styles.text}>{item.bio}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  user: {
    padding: 12,
    flexDirection: 'row',
    gap: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.slate[7],
    backgroundColor: '#fff',
  },
  rightSide: {
    gap: 4,
    width: Dimensions.get('screen').width - 48 - 16 - 16,
  },
  dot: {
    color: colors.slate[9],
  },
  image: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: colors.slate[3],
  },
  text: {
    color: colors.slate[11],
    fontSize: 14,
  },
  name: {
    fontWeight: '600',
    color: colors.slate[12],
  },
  row: {
    gap: 4,
    flexDirection: 'row',
  },
  small: {
    fontSize: 12,
    color: colors.slate[11],
  },
});
