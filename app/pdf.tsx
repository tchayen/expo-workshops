import React from 'react';
import {useLocalSearchParams} from 'expo-router';
import {View, StyleSheet, Dimensions} from 'react-native';
import Pdf from 'react-native-pdf';

export default function PdfScreen() {
  const {url} = useLocalSearchParams();

  const source = {uri: url as string};

  return (
    <View style={styles.container}>
      <Pdf
        source={source}
        onLoadComplete={numberOfPages => {
          console.log(`Number of pages: ${numberOfPages}`);
        }}
        onPageChanged={page => {
          console.log(`Current page: ${page}`);
        }}
        onError={error => {
          console.log(error);
        }}
        onPressLink={uri => {
          console.log(`Link pressed: ${uri}`);
        }}
        style={styles.pdf}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
