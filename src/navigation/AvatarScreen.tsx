import React from 'react';
import {StackScreenProps, useCardAnimation} from '@react-navigation/stack';
import {RootStackParamList} from './navigationTypes';
import {Animated, StyleSheet, View, useWindowDimensions} from 'react-native';
import {Image} from 'expo-image';

export function AvatarScreen({
  route,
}: StackScreenProps<RootStackParamList, 'Avatar'>) {
  const {current} = useCardAnimation();
  const dimensions = useWindowDimensions();

  const {user} = route.params;

  return (
    <View style={styles.background}>
      <Animated.View
        style={[
          styles.animatedView,
          {
            transform: [
              {
                translateY: current.progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [dimensions.height * 0.15, 0], // Move down just X% of the height.
                  extrapolate: 'clamp',
                }),
              },
            ],
          },
        ]}>
        <Image
          source={user.avatar}
          placeholder={user.blurhash}
          style={styles.image}
          contentFit="contain"
        />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
  },
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  animatedView: {
    width: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
