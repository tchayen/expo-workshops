import React from 'react';
import {StyleSheet, TextInput, TextInputProps, View} from 'react-native';
import {colors} from './colors';

const distance = (40 - 24) / 2;

export function Input({Icon, ...props}: TextInputProps & {Icon?: JSX.Element}) {
  const input = (
    <TextInput
      style={styles.input}
      cursorColor={colors.blue[10]}
      placeholderTextColor={colors.slate[9]}
      {...props}
    />
  );

  if (Icon) {
    return (
      <View>
        {input}
        <View style={styles.absolute}>{Icon}</View>
      </View>
    );
  }

  return input;
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    backgroundColor: colors.slate[3],
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 16,
    paddingRight: distance * 2 + 24,
  },
  absolute: {
    position: 'absolute',
    right: distance,
    top: distance,
  },
});
