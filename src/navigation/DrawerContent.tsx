import React, {useContext} from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Svg, {Path} from 'react-native-svg';
import {colors} from '../ui/colors';
import {AuthenticationContext} from '../AuthenticationContext';
import {useCurrentUser} from '../useCurrentUser';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from './navigationTypes';

export function DrawerContent() {
  const {setToken} = useContext(AuthenticationContext);
  const {currentUser} = useCurrentUser();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <SafeAreaView>
      <View style={styles.list}>
        <View>
          <View style={styles.top}>
            <Image source={{uri: currentUser?.avatar}} style={styles.avatar} />
            <Text style={styles.header}>{currentUser?.name}</Text>
            <Text style={styles.text}>@{currentUser?.login}</Text>
          </View>
          <View style={styles.options}>
            <DrawerButton
              title="Profile"
              onPress={() => {
                navigation.navigate('Profile', {login: currentUser?.login});
              }}
              Icon={
                <Svg width="24" height="24" viewBox="0 0 48 48" fill="none">
                  <Path
                    d="M24 4C18.4772 4 14 8.47715 14 14C14 19.5228 18.4772 24 24 24C29.5228 24 34 19.5228 34 14C34 8.47715 29.5228 4 24 4ZM16.5 14C16.5 9.85786 19.8579 6.5 24 6.5C28.1421 6.5 31.5 9.85786 31.5 14C31.5 18.1421 28.1421 21.5 24 21.5C19.8579 21.5 16.5 18.1421 16.5 14ZM12.2499 28C9.90326 28 8.00002 29.9013 8 32.2489L8 33C8 36.7555 9.94167 39.5669 12.9202 41.3802C15.8491 43.1633 19.7861 44 24 44C28.2139 44 32.1509 43.1633 35.0798 41.3802C38.0583 39.5669 40 36.7555 40 33L40 32.2487C40 29.9011 38.0967 28 35.7502 28H12.2499ZM10.5 32.2489C10.5 31.283 11.283 30.5 12.2499 30.5H35.7502C36.7171 30.5 37.5 31.2829 37.5 32.2488L37.5 33C37.5 35.7444 36.1398 37.8081 33.7798 39.2448C31.3703 40.7117 27.9323 41.5 24 41.5C20.0677 41.5 16.6297 40.7117 14.2202 39.2448C11.8602 37.8081 10.5 35.7444 10.5 33L10.5 32.2489Z"
                    fill={colors.slate[9]}
                  />
                </Svg>
              }
            />
            <DrawerButton
              title="Sign out"
              onPress={() => {
                setToken(null);
              }}
              Icon={
                <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <Path
                    d="M8.50215 11.4995C9.05562 11.4995 9.5043 11.9482 9.5043 12.5017C9.5043 13.0552 9.05562 13.5038 8.50215 13.5038C7.94868 13.5038 7.5 13.0552 7.5 12.5017C7.5 11.9482 7.94868 11.4995 8.50215 11.4995ZM12 4.3537V10.4995L12.0005 11.0045L19.442 11.0035L17.7196 9.27977C17.4534 9.01346 17.4292 8.59679 17.6471 8.30321L17.7198 8.21911C17.9861 7.95289 18.4027 7.92875 18.6963 8.14666L18.7804 8.21929L21.777 11.2169C22.043 11.483 22.0674 11.8992 21.85 12.1928L21.7775 12.2769L18.7809 15.2803C18.4884 15.5736 18.0135 15.5741 17.7203 15.2816C17.4537 15.0156 17.429 14.599 17.6465 14.3051L17.7191 14.2209L19.432 12.5035L12.0005 12.5045L12 19.2495C12 19.7159 11.5788 20.0692 11.1196 19.9881L2.61955 18.4868C2.26121 18.4235 2 18.1121 2 17.7482V5.74953C2 5.38222 2.26601 5.06896 2.62847 5.00944L11.1285 3.61361C11.5851 3.53863 12 3.89097 12 4.3537ZM10.5 5.2369L3.5 6.38641V17.1191L10.5 18.3555V5.2369ZM13 18.5008L13.7652 18.501L13.867 18.4941C14.2335 18.4443 14.5158 18.1299 14.5152 17.7497L14.508 13.4995H13V18.5008ZM13.002 9.99953L13 8.72487V4.99952L13.7453 4.99953C14.1245 4.99953 14.4381 5.28105 14.4883 5.64664L14.4953 5.74829L14.502 9.99953H13.002Z"
                    fill={colors.slate[9]}
                  />
                </Svg>
              }
            />
          </View>
        </View>
        <View style={styles.logo}>
          <Svg width="14" height="42" viewBox="0 0 400 600" fill="none">
            <Path
              d="M67.1134 36.1823C90.962 -2.52739 151.577 -17.6975 174.432 28.8588L209.211 59.1988L173.438 59.722C162.679 69.309 150.086 76.1126 145.118 84.8309C140.149 93.5493 137.168 107.324 147.602 135.049C158.036 162.773 173.438 191.021 188.344 206.191C203.249 221.361 218.451 230.5 245.939 259.5C273.427 288.5 282.744 328.597 295.662 347.429C308.58 366.261 334.416 397.124 366.711 424.848C323.983 439.495 286.719 427.464 286.719 427.464C326.235 456.896 351.482 470.997 400 493.375C333.346 487.514 298.893 480.255 250.946 448.911C243.403 458.034 235.712 455.434 222.626 457.804C226.976 478.454 229.543 486.487 228.052 506.364C226.562 526.242 220.103 546.643 220.103 546.643C229.142 546.572 237.989 547.167 245.939 551.351C236.002 553.967 231.53 553.967 226.065 561.813C220.6 569.66 224.574 595.292 226.065 600C221.097 589.538 215.18 572.799 210.212 570.706C205.243 568.614 178.719 576.813 158.54 582.738C158.54 582.738 197.791 564.429 197.294 561.813C196.797 559.198 160.051 564.404 148.603 563.383L204.25 552.398C208.057 533.798 207.185 526.766 205.243 518.919C203.302 511.072 198.242 503.226 194.764 496.949C191.286 490.671 188.344 477.071 188.344 457.804C170.231 457.917 156.925 454.748 140.607 447.254C140.607 447.254 143.092 479.686 140.607 490.148C138.123 500.61 131.879 512.754 120.237 534.612C132.909 536.151 139.351 538.005 150.048 542.459C150.048 542.459 127.068 542.982 122.721 546.643C118.374 550.305 121.727 563.383 122.767 577.507C122.767 577.507 108.809 558.675 105.331 557.629C101.853 556.582 74.5008 561.942 51.7179 569.137C50.7838 568.387 87.4449 553.444 86.4512 551.351C85.4576 549.259 61.9232 548.482 46.2067 546.643C67.9381 543.783 95.8913 544.551 101.853 539.32C107.816 534.089 115.268 517.873 115.268 509.503C115.268 501.133 113.281 500.087 109.306 485.963C105.331 471.84 106.822 460.331 105.331 450.392C103.841 440.453 83.4702 421.099 59.1247 395.466C59.1247 395.466 20.9071 352.66 5.5045 298.78C-9.8981 244.901 9.97473 214.038 28.8563 188.405C47.7378 162.773 46.383 152.311 47.2396 126.156C48.0962 100.001 43.2648 74.892 67.1134 36.1823Z"
              fill={colors.blue[10]}
            />
          </Svg>
          <Text style={styles.appName}>Birb</Text>
          <Text style={styles.text}>v0.1.2</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

function DrawerButton({
  title,
  onPress,
  Icon,
}: {
  title: string;
  onPress: () => void;
  Icon: JSX.Element;
}) {
  return (
    <Pressable onPress={onPress}>
      {({pressed}) => (
        <View style={[styles.link, pressed && styles.pressed]}>
          {Icon}
          <Text style={styles.linkText}>{title}</Text>
        </View>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  logo: {
    flexDirection: 'row',
    gap: 4,
    alignItems: 'center',
    padding: 16,
  },
  appName: {
    fontWeight: '600',
    fontSize: 15,
    color: colors.blue[10],
  },
  list: {
    gap: 16,
    justifyContent: 'space-between',
    height: '100%',
  },
  top: {
    padding: 16,
    gap: 4,
  },
  options: {
    paddingHorizontal: 8,
    gap: 4,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: colors.slate[5],
  },
  header: {
    fontSize: 24,
    color: colors.slate[12],
  },
  text: {
    fontSize: 14,
    color: colors.slate[11],
  },
  link: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    gap: 8,
    paddingHorizontal: 8,
  },
  pressed: {
    borderRadius: 10,
    backgroundColor: colors.slate[2],
  },
  linkText: {
    fontSize: 16,
    color: colors.slate[12],
  },
});
