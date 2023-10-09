import React, {PropsWithChildren} from 'react';
import {
  Animated,
  Pressable,
  StyleProp,
  StyleSheet,
  useWindowDimensions,
  View,
  ViewStyle,
} from 'react-native';
import {useCardAnimation} from '@react-navigation/stack';
import {useRouter} from 'expo-router';

export function Modal({
  children,
  style,
}: PropsWithChildren<{style?: StyleProp<ViewStyle>}>) {
  const {current} = useCardAnimation();
  const router = useRouter();
  const dimensions = useWindowDimensions();

  return (
    <View style={styles.view}>
      <Pressable
        style={[StyleSheet.absoluteFill, styles.pressable]}
        onPress={router.back}
      />
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
          style,
        ]}>
        {children}
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  pressable: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  animatedView: {
    padding: 16,
    width: '100%',
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    backgroundColor: '#fff',
  },
});
