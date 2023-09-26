import React from 'react';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {Image, Pressable, StyleSheet} from 'react-native';
import {colors} from './colors';
import {RootStackParamList} from '../navigation/navigationTypes';

const AVATAR_SIZE = 110;

export function Avatar({uri}: {uri?: string}) {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <Pressable
      onPress={() => {
        if (!uri) {
          return;
        }

        navigation.navigate('Avatar', {url: uri});
      }}>
      <Image source={{uri}} resizeMode="cover" style={styles.avatar} />
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
    backgroundColor: colors.slate[5],
  },
});
