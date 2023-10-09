import React, {useContext} from 'react';
import {useCardAnimation} from '@react-navigation/stack';
import {Animated, StyleSheet, View, useWindowDimensions} from 'react-native';
import {Image} from 'expo-image';
import {useQuery} from '@tanstack/react-query';
import {useLocalSearchParams} from 'expo-router';

import {API_SERVER_URL} from '@/api';
import {AuthenticationContext} from '@/AuthenticationContext';

export default function AvatarScreen() {
  const {token} = useContext(AuthenticationContext);
  const {current} = useCardAnimation();
  const dimensions = useWindowDimensions();

  const {username} = useLocalSearchParams();

  const {data} = useQuery({
    queryKey: [username, 'user'],
    queryFn: async () => {
      return fetch(`${API_SERVER_URL}/user/${username}`, {
        headers: {authorization: `Bearer ${token}`},
      }).then(response => response.json());
    },
  });

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
          source={data.avatar}
          placeholder={data.blurhash}
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
