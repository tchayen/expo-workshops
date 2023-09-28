import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {colors} from './colors';
import {StyleSheet} from 'react-native';
import {Image} from 'expo-image';
import {useCurrentUser} from '../useCurrentUser';

const ICON_SIZE = 28;

export function HomeIcon({focused}: {focused: boolean}) {
  return (
    <Svg width={ICON_SIZE} height={ICON_SIZE} viewBox="0 0 48 48" fill="none">
      <Path
        d="M21.6062 5.85517C23.0048 4.71494 24.9952 4.71494 26.3938 5.85517L39.5688 16.5966C40.4736 17.3342 41 18.4492 41 19.628V39.1134C41 41.2599 39.2875 43 37.175 43H31.825C29.7125 43 28 41.2599 28 39.1134V29.8866C28 29.1711 27.4292 28.5911 26.725 28.5911H21.275C20.5708 28.5911 20 29.1711 20 29.8866V39.1134C20 41.2599 18.2875 43 16.175 43H10.825C8.71251 43 7 41.2599 7 39.1134V19.628C7 18.4493 7.52645 17.3342 8.43124 16.5966L21.6062 5.85517ZM24.7979 7.87612C24.3317 7.49604 23.6683 7.49604 23.2021 7.87612L10.0271 18.6175C9.72548 18.8634 9.55 19.2351 9.55 19.628V39.1134C9.55 39.8289 10.1208 40.4089 10.825 40.4089H16.175C16.8792 40.4089 17.45 39.8289 17.45 39.1134V29.8866C17.45 27.7401 19.1625 26 21.275 26H26.725C28.8375 26 30.55 27.7401 30.55 29.8866V39.1134C30.55 39.8289 31.1208 40.4089 31.825 40.4089H37.175C37.8792 40.4089 38.45 39.8289 38.45 39.1134V19.628C38.45 19.2351 38.2745 18.8634 37.9729 18.6175L24.7979 7.87612Z"
        fill={focused ? colors.blue[10] : colors.slate[11]}
      />
    </Svg>
  );
}

export function SearchIcon({focused}: {focused: boolean}) {
  return (
    <Svg width={ICON_SIZE} height={ICON_SIZE} viewBox="0 0 48 48" fill="none">
      <Path
        d="M20 6C12.268 6 6 12.268 6 20C6 27.732 12.268 34 20 34C23.4159 34 26.5461 32.7766 28.9763 30.7441L39.8662 41.6339C40.3543 42.122 41.1458 42.122 41.6339 41.6339C42.1221 41.1457 42.1221 40.3543 41.6339 39.8661L30.7441 28.9763C32.7766 26.5461 34 23.4159 34 20C34 12.268 27.732 6 20 6ZM8.5 20C8.5 13.6487 13.6487 8.5 20 8.5C26.3513 8.5 31.5 13.6487 31.5 20C31.5 26.3513 26.3513 31.5 20 31.5C13.6487 31.5 8.5 26.3513 8.5 20Z"
        fill={focused ? colors.blue[10] : colors.slate[11]}
      />
    </Svg>
  );
}

export function CompassIcon({focused}: {focused: boolean}) {
  return (
    <Svg width={ICON_SIZE} height={ICON_SIZE} viewBox="0 0 28 28" fill="none">
      <Path
        d="M3.5 14C3.5 8.20101 8.20101 3.5 14 3.5C19.799 3.5 24.5 8.20101 24.5 14C24.5 19.799 19.799 24.5 14 24.5C8.20101 24.5 3.5 19.799 3.5 14ZM14 2C7.37258 2 2 7.37258 2 14C2 20.6274 7.37258 26 14 26C20.6274 26 26 20.6274 26 14C26 7.37258 20.6274 2 14 2ZM8.08297 9.69839C7.69462 8.6877 8.68743 7.69488 9.69812 8.0832L14.6927 10.0022C16.2127 10.5862 17.4138 11.7873 17.9978 13.3073L19.917 18.3018C20.3053 19.3125 19.3125 20.3053 18.3018 19.917L13.3071 17.9979C11.7872 17.4139 10.5861 16.2128 10.0021 14.6929L8.08297 9.69839ZM9.68474 9.68497L11.4023 14.1549C11.834 15.2783 12.7217 16.166 13.8451 16.5977L18.3152 18.3152L16.5976 13.8453C16.1659 12.7218 15.2782 11.8341 14.1547 11.4024L9.68474 9.68497Z"
        fill={focused ? colors.blue[10] : colors.slate[11]}
      />
    </Svg>
  );
}

export function ProfileIcon({focused}: {focused: boolean}) {
  const {currentUser} = useCurrentUser();
  const avatar = currentUser?.avatar;

  return (
    <Image
      style={[styles.image, focused && styles.focused]}
      source={avatar}
      placeholder={currentUser?.blurhash}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    width: ICON_SIZE,
    height: ICON_SIZE,
    borderRadius: ICON_SIZE / 2,
  },
  focused: {
    borderWidth: 1,
    borderColor: colors.blue[10],
  },
});
