import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from './colors';
import {User} from '../types';
import {format} from 'date-fns';
import {FollowsYou} from './FollowsYou';
import {useCurrentUser} from '../useCurrentUser';

export function ProfileHeaderSection({user}: {user?: User}) {
  const {currentUser} = useCurrentUser();

  return (
    <>
      <View style={styles.row}>
        {currentUser && user?.following?.includes(currentUser?.login) && (
          <FollowsYou />
        )}
        <Text style={[styles.text, styles.bold]}>@{user?.login}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>
          <Text style={styles.bold}>{user?.followersCount}</Text> followers
        </Text>
        <Text style={styles.text}>
          <Text style={styles.bold}>{user?.following.length}</Text> following
        </Text>
        <Text style={styles.text}>
          <Text style={styles.bold}>{user?.postCount}</Text> posts
        </Text>
      </View>
      <View style={styles.row}>
        {user?.location && (
          <Text style={styles.text}>Location: {user?.location}</Text>
        )}
        {user?.birthday && (
          <Text style={styles.text}>
            Birthday:{' '}
            <Text>{format(new Date(user?.birthday), 'do MMM y')}</Text>
          </Text>
        )}
      </View>
      <Text style={styles.bio}>{user?.bio}</Text>
    </>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
    color: colors.slate[11],
  },
  bio: {
    fontSize: 14,
    color: colors.slate[11],
  },
  bold: {
    fontWeight: '600',
    color: colors.slate[12],
  },
});
