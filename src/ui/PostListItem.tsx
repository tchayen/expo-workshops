import React, {useContext} from 'react';
import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Post} from '../types';
import {colors} from './colors';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {twitterStyleTimestamp} from '../twitterStyleTimestamp';
import {useQuery} from '@tanstack/react-query';
import {AuthenticationContext} from '../AuthenticationContext';
import {API_SERVER_URL} from '../api';
import {RootStackParamList} from '../navigation/navigationTypes';

export function PostListItem({item}: {item: Post}) {
  const {token} = useContext(AuthenticationContext);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const {data} = useQuery({
    queryKey: [item.author, 'user'],
    queryFn: async () => {
      return fetch(`${API_SERVER_URL}/user/${item.author}`, {
        headers: {authorization: `Bearer ${token}`},
      }).then(response => response.json());
    },
  });

  const user = data?.data;

  if (!user) {
    return null;
  }

  const words = item.post.split(' ').map((word, index) =>
    word.startsWith('#') ? (
      <Text
        onPress={() => {
          navigation.navigate('Hashtag', {
            hashtag: word.replaceAll('#', '').replaceAll('.', ''),
          });
        }}
        key={index}
        style={{color: colors.blue[10]}}>
        {word}
      </Text>
    ) : (
      word
    ),
  );

  const formattedText = words.reduce((acc, word, index) => {
    const separator = index < words.length - 1 ? ' ' : '';
    return (
      <Text key={index}>
        {acc}
        {word}
        {separator}
      </Text>
    );
  }, '');

  return (
    <View style={styles.post}>
      <Pressable
        onPress={() => {
          navigation.navigate('ProfileModal', {login: user.login});
        }}
        style={styles.avatar}>
        <Image
          source={{uri: user.avatar}}
          resizeMode="cover"
          style={styles.image}
        />
      </Pressable>
      <View style={styles.column}>
        <View style={styles.row}>
          <Text style={styles.bold}>{user.name}</Text>
          <Text style={styles.dot}>•</Text>
          <Text style={styles.text}>@{user.login}</Text>
          <Text style={styles.dot}>•</Text>
          <Text style={styles.text}>
            {twitterStyleTimestamp(item.timestamp)}
          </Text>
        </View>
        <Text style={styles.postText}>{formattedText}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bold: {
    fontWeight: '600',
  },
  text: {
    color: colors.slate[11],
  },
  dot: {
    color: colors.slate[9],
  },
  postText: {
    color: colors.slate[11],
    fontSize: 14,
  },
  post: {
    padding: 12,
    flexDirection: 'row',
    gap: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.slate[7],
    backgroundColor: '#fff',
  },
  avatar: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: colors.slate[5],
  },
  image: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  column: {
    gap: 4,
    width: Dimensions.get('screen').width - 48 - 16 - 16,
  },
  row: {
    width: Dimensions.get('screen').width - 48 - 16 - 16,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
  },
});
