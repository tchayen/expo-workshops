import React, {useContext} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {useState} from 'react';
import {Input} from '@/ui/Input';
import {Button} from '@/ui/Button';
import {colors} from '@/ui/colors';
import Animated, {
  useAnimatedKeyboard,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {router} from 'expo-router';
import Svg, {Path} from 'react-native-svg';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {AuthenticationContext} from '@/AuthenticationContext';
import {useMutation} from '@tanstack/react-query';
import {API_SERVER_URL} from '@/api';

export default function SignInScreen() {
  const {setToken} = useContext(AuthenticationContext);
  const {isLoading, mutateAsync} = useMutation({
    mutationFn: async () => {
      return fetch(`${API_SERVER_URL}/sign-in`, {method: 'POST'}).then(
        response => response.json(),
      );
    },
  });

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const insets = useSafeAreaInsets();

  const keyboard = useAnimatedKeyboard();
  const translateStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: -keyboard.height.value}],
    };
  });

  return (
    <View style={styles.screen}>
      <Text style={[styles.header, {marginTop: 16 + insets.top}]}>
        Welcome to Birb!
      </Text>
      <Svg
        style={styles.logo}
        width="160"
        height="240"
        viewBox="0 0 400 600"
        fill="none">
        <Path
          d="M67.1134 36.1823C90.962 -2.52739 151.577 -17.6975 174.432 28.8588L209.211 59.1988L173.438 59.722C162.679 69.309 150.086 76.1126 145.118 84.8309C140.149 93.5493 137.168 107.324 147.602 135.049C158.036 162.773 173.438 191.021 188.344 206.191C203.249 221.361 218.451 230.5 245.939 259.5C273.427 288.5 282.744 328.597 295.662 347.429C308.58 366.261 334.416 397.124 366.711 424.848C323.983 439.495 286.719 427.464 286.719 427.464C326.235 456.896 351.482 470.997 400 493.375C333.346 487.514 298.893 480.255 250.946 448.911C243.403 458.034 235.712 455.434 222.626 457.804C226.976 478.454 229.543 486.487 228.052 506.364C226.562 526.242 220.103 546.643 220.103 546.643C229.142 546.572 237.989 547.167 245.939 551.351C236.002 553.967 231.53 553.967 226.065 561.813C220.6 569.66 224.574 595.292 226.065 600C221.097 589.538 215.18 572.799 210.212 570.706C205.243 568.614 178.719 576.813 158.54 582.738C158.54 582.738 197.791 564.429 197.294 561.813C196.797 559.198 160.051 564.404 148.603 563.383L204.25 552.398C208.057 533.798 207.185 526.766 205.243 518.919C203.302 511.072 198.242 503.226 194.764 496.949C191.286 490.671 188.344 477.071 188.344 457.804C170.231 457.917 156.925 454.748 140.607 447.254C140.607 447.254 143.092 479.686 140.607 490.148C138.123 500.61 131.879 512.754 120.237 534.612C132.909 536.151 139.351 538.005 150.048 542.459C150.048 542.459 127.068 542.982 122.721 546.643C118.374 550.305 121.727 563.383 122.767 577.507C122.767 577.507 108.809 558.675 105.331 557.629C101.853 556.582 74.5008 561.942 51.7179 569.137C50.7838 568.387 87.4449 553.444 86.4512 551.351C85.4576 549.259 61.9232 548.482 46.2067 546.643C67.9381 543.783 95.8913 544.551 101.853 539.32C107.816 534.089 115.268 517.873 115.268 509.503C115.268 501.133 113.281 500.087 109.306 485.963C105.331 471.84 106.822 460.331 105.331 450.392C103.841 440.453 83.4702 421.099 59.1247 395.466C59.1247 395.466 20.9071 352.66 5.5045 298.78C-9.8981 244.901 9.97473 214.038 28.8563 188.405C47.7378 162.773 46.383 152.311 47.2396 126.156C48.0962 100.001 43.2648 74.892 67.1134 36.1823Z"
          fill="white"
        />
      </Svg>
      <Animated.View
        style={[
          styles.inner,
          {paddingBottom: 24 + insets.bottom},
          translateStyle,
        ]}>
        <View style={styles.gap}>
          <Text style={styles.signInHeader}>Sign in here</Text>
          <Text style={styles.description}>
            Sign in to your account to continue.
          </Text>
        </View>
        <Input
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
          autoFocus
        />
        <Input
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Button
          isLoading={isLoading}
          onPress={() => {
            mutateAsync().then(data => {
              setToken(data.token);
              router.replace('/');
            });
          }}
          style={{
            width: Dimensions.get('screen').width - 48,
          }}>
          Sign In
        </Button>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    position: 'absolute',
    right: 32,
    top: 108,
  },
  screen: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: colors.blue[9],
  },
  inner: {
    padding: 24,
    gap: 16,
    backgroundColor: '#fff',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  header: {
    fontSize: 48,
    fontWeight: '800',
    color: '#fff',
    marginHorizontal: 24,
    marginTop: 64,
  },
  signInHeader: {
    fontSize: 24,
    fontWeight: '600',
    color: colors.slate[12],
  },
  description: {
    fontSize: 15,
    color: colors.slate[11],
  },
  gap: {
    gap: 4,
  },
});
