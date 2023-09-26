import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../navigation/ProfileScreen';

export function Empty() {
  return (
    <View style={styles.empty}>
      <Text style={styles.emptyText}>Nothing to see here.</Text>
    </View>
  );
}
