import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from './colors';

export function FollowsYou() {
  return (
    <View style={styles.pill}>
      <Text style={styles.text}>Follows you</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  pill: {
    borderRadius: 6,
    height: 20,
    backgroundColor: colors.slate[5],
    alignSelf: 'flex-start',
    justifyContent: 'center',
    paddingHorizontal: 6,
  },
  text: {
    fontSize: 13,
    color: colors.slate[10],
  },
});
