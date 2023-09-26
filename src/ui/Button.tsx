import React, {PropsWithChildren} from 'react';
import {
  ActivityIndicator,
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import {colors} from './colors';

const noop = () => {};

export function Button({
  children,
  onPress,
  style,
  isLoading,
  isDisabled,
}: PropsWithChildren<{
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  isLoading?: boolean;
  isDisabled?: boolean;
}>) {
  return (
    <Pressable onPress={!isDisabled ? onPress : noop} style={styles.pressable}>
      {({pressed}) => (
        <View
          style={[
            styles.view,
            isDisabled && styles.disabled,
            {
              backgroundColor:
                pressed && !isDisabled ? colors.blue[9] : colors.blue[10],
            },
            style,
          ]}>
          {isLoading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.text}>{children}</Text>
          )}
        </View>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressable: {
    alignSelf: 'flex-start',
  },
  view: {
    paddingHorizontal: 12,
    height: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: '700',
    fontSize: 16,
    color: colors.blue[1],
  },
  disabled: {
    opacity: 0.6,
  },
});
