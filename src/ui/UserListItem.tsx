import React from 'react';
import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {User} from '../types';
import {colors} from './colors';
import {FollowsYou} from './FollowsYou';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {useCurrentUser} from '../useCurrentUser';
import {RootStackParamList} from '../navigation/navigationTypes';

export function UserListItem({item}: {item: User}) {
  const {currentUser} = useCurrentUser();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={styles.user}>
      <Pressable
        onPress={() => {
          navigation.navigate('ProfileModal', {login: item.login});
        }}>
        <Image
          key={item.login}
          source={{uri: item.avatar}}
          resizeMode="cover"
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
    backgroundColor: colors.slate[5],
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
