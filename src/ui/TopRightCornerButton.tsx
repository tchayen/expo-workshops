import React, {PropsWithChildren} from 'react';
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {colors} from './colors';

export function TopRightCornerButton({
  children,
  onPress,
  Icon,
  isLoading,
}: PropsWithChildren<{
  onPress: () => void;
  Icon?: React.ReactNode;
  isLoading?: boolean;
}>) {
  return (
    <Pressable onPress={onPress} style={styles.pressable}>
      {({pressed}) => (
        <View
          style={[
            styles.view,
            {backgroundColor: pressed ? colors.blue[9] : colors.blue[10]},
          ]}>
          <View style={[styles.inner, isLoading && styles.dimmed]}>
            <Text style={styles.text}>{children}</Text>
            {Icon}
          </View>
          {isLoading && (
            <ActivityIndicator style={styles.activityIndicator} color="#fff" />
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
    borderRadius: 18,
    height: 36,
    paddingLeft: 12,
    paddingRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inner: {
    flexDirection: 'row',
    gap: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.blue[1],
  },
  activityIndicator: {
    position: 'absolute',
    left: '50%',
  },
  dimmed: {
    opacity: 0.4,
  },
});
