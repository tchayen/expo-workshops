import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from './colors';

export function Empty() {
  return (
    <View style={styles.empty}>
      <Text style={styles.emptyText}>Nothing to see here.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  empty: {
    padding: 32,
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 14,
    color: colors.slate[10],
  },
});
