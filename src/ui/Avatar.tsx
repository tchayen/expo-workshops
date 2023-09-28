import React from 'react';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {Pressable, StyleSheet} from 'react-native';
import {Image} from 'expo-image';
import {colors} from './colors';
import {RootStackParamList} from '../navigation/navigationTypes';
import {User} from '../types';

const AVATAR_SIZE = 110;

export function Avatar({user}: {user?: User}) {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <Pressable
      onPress={() => {
        if (!user) {
          return;
        }

        navigation.navigate('Avatar', {user});
      }}>
      <Image
        source={user?.avatar}
        placeholder={user?.blurhash}
        contentFit="cover"
        style={styles.avatar}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  avatar: {
    height: AVATAR_SIZE,
    width: AVATAR_SIZE,
    borderRadius: AVATAR_SIZE / 2,
    position: 'absolute',
    left: 4,
    top: -AVATAR_SIZE / 2,
    borderWidth: 4,
    borderColor: colors.blue[1],
    backgroundColor: colors.slate[3],
  },
});
