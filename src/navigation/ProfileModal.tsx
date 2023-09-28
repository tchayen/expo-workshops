import React, {useCallback, useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {RootStackParamList} from './navigationTypes';
import {colors} from '../ui/colors';
import {Modal} from '../ui/Modal';
import {TopRightCornerButton} from '../ui/TopRightCornerButton';
import {User} from '../types';
import {EmojiWaterfallProvider, useEmojiWaterfall} from '../ui/EmojiWaterfall';
import {useFocusEffect} from '@react-navigation/native';
import {ProfileHeaderSection} from '../ui/ProfileHeaderSection';
import {Avatar} from '../ui/Avatar';
import Svg, {Path} from 'react-native-svg';
import {FollowButton} from '../ui/FollowButton';
import {useQuery} from '@tanstack/react-query';
import {AuthenticationContext} from '../AuthenticationContext';
import {API_SERVER_URL} from '../api';

export function ProfileModal({
  route,
  navigation,
}: StackScreenProps<RootStackParamList, 'ProfileModal'>) {
  const {token} = useContext(AuthenticationContext);
  const insets = useSafeAreaInsets();
  const {login} = route.params;

  const {data} = useQuery({
    queryKey: [login, 'user'],
    queryFn: async () => {
      return fetch(`${API_SERVER_URL}/user/${login}`, {
        headers: {authorization: `Bearer ${token}`},
      }).then(response => response.json());
    },
  });

  const user = data?.data;

  if (!user) {
    return null;
  }

  return (
    <EmojiWaterfallProvider>
      <Modal style={[styles.modal, {paddingBottom: insets.bottom + 32}]}>
        <Avatar user={user} />
        <View style={[styles.row, styles.alignEnd]}>
          <FollowButton login={user.login} />
          <TopRightCornerButton
            Icon={
              <Svg width="20" height="20" viewBox="0 0 48 48" fill="none">
                <Path
                  d="M24 4C18.4772 4 14 8.47715 14 14C14 19.5228 18.4772 24 24 24C29.5228 24 34 19.5228 34 14C34 8.47715 29.5228 4 24 4ZM16.5 14C16.5 9.85786 19.8579 6.5 24 6.5C28.1421 6.5 31.5 9.85786 31.5 14C31.5 18.1421 28.1421 21.5 24 21.5C19.8579 21.5 16.5 18.1421 16.5 14ZM12.2499 28C9.90326 28 8.00002 29.9013 8 32.2489L8 33C8 36.7555 9.94167 39.5669 12.9202 41.3802C15.8491 43.1633 19.7861 44 24 44C28.2139 44 32.1509 43.1633 35.0798 41.3802C38.0583 39.5669 40 36.7555 40 33L40 32.2487C40 29.9011 38.0967 28 35.7502 28H12.2499ZM10.5 32.2489C10.5 31.283 11.283 30.5 12.2499 30.5H35.7502C36.7171 30.5 37.5 31.2829 37.5 32.2488L37.5 33C37.5 35.7444 36.1398 37.8081 33.7798 39.2448C31.3703 40.7117 27.9323 41.5 24 41.5C20.0677 41.5 16.6297 40.7117 14.2202 39.2448C11.8602 37.8081 10.5 35.7444 10.5 33L10.5 32.2489Z"
                  fill="#fff"
                />
              </Svg>
            }
            onPress={() => {
              navigation.navigate('Profile', {login: user.login});
            }}>
            Profile
          </TopRightCornerButton>
        </View>
        <Text style={styles.header}>{user.name}</Text>
        <Details user={user} />
      </Modal>
    </EmojiWaterfallProvider>
  );
}

function Details({user}: {user: User}) {
  const {startAnimation} = useEmojiWaterfall();

  useFocusEffect(
    useCallback(() => {
      if (
        user.birthday &&
        new Date(user.birthday).getDate() === new Date().getDate()
      ) {
        startAnimation();
      }
    }, [user.birthday, startAnimation]),
  );

  return <ProfileHeaderSection user={user} />;
}

const styles = StyleSheet.create({
  modal: {
    height: 'auto',
    gap: 8,
    paddingHorizontal: 20,
  },
  alignEnd: {
    alignSelf: 'flex-end',
  },
  row: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
  },
  header: {
    fontSize: 30,
    color: colors.slate[12],
  },
  text: {
    fontSize: 14,
    color: colors.slate[11],
  },
  bold: {
    fontWeight: '600',
    color: colors.slate[12],
  },
  pill: {
    borderRadius: 8,
    height: 24,
    backgroundColor: colors.slate[5],
    alignSelf: 'flex-start',
    justifyContent: 'center',
    paddingHorizontal: 8,
  },
});
