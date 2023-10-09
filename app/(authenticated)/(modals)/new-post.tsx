import React, {useContext, useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {useMutation} from '@tanstack/react-query';
import {useNavigation} from 'expo-router';

import {Modal} from '@/ui/Modal';
import {colors} from '@/ui/colors';
import {Button} from '@/ui/Button';
import {API_SERVER_URL} from '@/api';
import {AuthenticationContext} from '@/AuthenticationContext';

export default function NewPostModal() {
  const {token} = useContext(AuthenticationContext);
  const [value, setValue] = useState('');
  const navigation = useNavigation();

  const {mutateAsync, isLoading} = useMutation({
    mutationFn: async () => {
      return fetch(`${API_SERVER_URL}/user/post`, {
        method: 'POST',
        headers: {
          authorization: `Bearer ${token}`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          post: value,
          timestamp: +new Date(),
        }),
      }).then(response => response.json());
    },
  });

  return (
    <Modal style={styles.modal}>
      <View style={styles.firstRow}>
        <Text style={styles.header}>Post something</Text>
        <Button
          isDisabled={value.length === 0}
          style={styles.postButton}
          isLoading={isLoading}
          onPress={() => {
            mutateAsync().then(() => navigation.goBack());
          }}>
          Post
        </Button>
      </View>
      <TextInput
        multiline
        scrollEnabled={false}
        style={styles.input}
        cursorColor={colors.blue[10]}
        underlineColorAndroid={colors.blue[10]}
        placeholderTextColor={colors.slate[9]}
        placeholder="What's on your mind?"
        onChangeText={text => setValue(text)}
      />
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    gap: 8,
  },
  header: {
    fontSize: 22,
    color: colors.slate[12],
  },
  firstRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    height: 240,
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 8,
    fontSize: 16,
  },
  postButton: {
    width: 72,
  },
});
