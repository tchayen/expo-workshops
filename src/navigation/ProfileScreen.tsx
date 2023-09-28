import React, {useContext, useState} from 'react';
import {BottomTabsParamList} from './navigationTypes';
import {Screen} from '../ui/Screen';
import {Post, User} from '../types';
import {PostListItem} from '../ui/PostListItem';
import {FlashList} from '@shopify/flash-list';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {colors} from '../ui/colors';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {ProfileHeaderSection} from '../ui/ProfileHeaderSection';
import {Avatar} from '../ui/Avatar';
import {UserListItem} from '../ui/UserListItem';
import {useQuery} from '@tanstack/react-query';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useCurrentUser} from '../useCurrentUser';
import {FollowButton} from '../ui/FollowButton';
import {AuthenticationContext} from '../AuthenticationContext';
import {API_SERVER_URL} from '../api';
import {Empty} from '../ui/Empty';

export function ProfileScreen({
  route,
}: BottomTabScreenProps<BottomTabsParamList, 'Profile'>) {
  const {token} = useContext(AuthenticationContext);
  const [page, setPage] = useState(0);
  const insets = useSafeAreaInsets();

  const {currentUser} = useCurrentUser();
  const login = route.params?.login ?? currentUser?.login;

  const options = {
    headers: {authorization: `Bearer ${token}`},
  };
  function toJson(response: Response) {
    return response.json();
  }

  const {data} = useQuery({
    queryKey: [login, 'user'],
    queryFn: async () => {
      return fetch(`${API_SERVER_URL}/user/${login}`, options).then(toJson);
    },
  });

  const {data: posts} = useQuery({
    queryKey: [login, 'posts'],
    queryFn: async () => {
      return fetch(`${API_SERVER_URL}/user/${login}/posts`, options).then(
        toJson,
      );
    },
  });

  const {data: followers} = useQuery({
    queryKey: [login, 'followers'],
    queryFn: async () => {
      return fetch(`${API_SERVER_URL}/user/${login}/followers`, options).then(
        toJson,
      );
    },
  });

  const {data: following} = useQuery({
    queryKey: [login, 'following'],
    queryFn: async () => {
      return fetch(`${API_SERVER_URL}/user/${login}/following`, options).then(
        toJson,
      );
    },
  });

  const user = data?.data as User | undefined;

  const topPart = (
    <View style={styles.topPart}>
      <View style={[styles.background, {height: 96 + insets.top}]} />
      <Avatar key={user?.login} user={user} />
      <View style={styles.headerSection}>
        {user && user.login !== currentUser?.login ? (
          <View style={[styles.row, styles.alignEnd]}>
            <FollowButton login={user.login} />
          </View>
        ) : (
          <View style={styles.placeholder} />
        )}
        <Text style={styles.header}>{user?.name}</Text>
        <ProfileHeaderSection user={user} />
        <View style={styles.justRow}>
          <HeaderItem
            setPage={setPage}
            currentPage={page}
            page={0}
            title="Posts"
          />
          <HeaderItem
            setPage={setPage}
            currentPage={page}
            page={1}
            title="Followers"
          />
          <HeaderItem
            setPage={setPage}
            currentPage={page}
            page={2}
            title="Following"
          />
        </View>
      </View>
    </View>
  );

  const pageToList = page === 0 ? posts : page === 1 ? followers : following;

  return (
    <Screen>
      {/* Overscroll bottom should be blue */}
      <View style={[styles.overscroll, styles.overscrollTop]} />
      {/* Overscroll bottom should be white */}
      <View style={[styles.overscroll, styles.overscrollBottom]} />
      <FlashList
        ListHeaderComponent={topPart}
        data={pageToList?.data}
        renderItem={({item}) => {
          if (page === 0) {
            return <PostListItem item={item as Post} />;
          }

          return <UserListItem item={item as User} />;
        }}
        estimatedItemSize={100}
        ListEmptyComponent={<Empty />}
      />
    </Screen>
  );
}

function HeaderItem({
  currentPage,
  page,
  setPage,
  title,
}: {
  currentPage: number;
  page: number;
  setPage: (page: number) => void;
  title: string;
}) {
  return (
    <Pressable
      onPress={() => {
        setPage(page);
      }}>
      {() => (
        <View
          style={[
            styles.headerItem,
            currentPage === page && styles.selectedHeaderItem,
          ]}>
          <Text
            style={[
              styles.headerItemText,
              currentPage === page && styles.selectedHeaderItemText,
            ]}>
            {title}
          </Text>
        </View>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  overscroll: {
    height: '30%',
    width: '100%',
    position: 'absolute',
  },
  overscrollTop: {
    top: 0,
    backgroundColor: colors.blue[10],
  },
  overscrollBottom: {
    bottom: 0,
    backgroundColor: '#fff',
  },
  topPart: {
    backgroundColor: '#fff',
  },
  background: {
    width: '100%',
    backgroundColor: colors.blue[10],
  },
  header: {
    fontSize: 30,
    color: colors.slate[12],
  },
  text: {
    fontSize: 14,
    color: colors.slate[11],
  },
  alignEnd: {
    alignSelf: 'flex-end',
  },
  row: {
    flexDirection: 'row',
    gap: 16,
    alignItems: 'center',
  },
  justRow: {
    flexDirection: 'row',
  },
  placeholder: {
    height: 40,
  },
  headerSection: {
    padding: 16,
    paddingBottom: 0,
    gap: 8,
    borderBottomColor: colors.slate[7],
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  pagerView: {
    flex: 1,
  },
  headerItem: {
    height: 40,
    justifyContent: 'center',
    paddingHorizontal: 12,
    borderBottomWidth: 2,
    borderBottomColor: '#fff',
  },
  selectedHeaderItem: {
    borderBottomColor: colors.blue[10],
  },
  headerItemText: {
    color: colors.slate[10],
  },
  selectedHeaderItemText: {
    color: colors.slate[12],
  },
});
