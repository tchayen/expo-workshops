This is example app for a workshop. It's a bird app clone, called Birb.

It's a plain RN app.

It uses:

- `react-native-bootsplash` for splash screen.
- `react-navigation` for navigation.
- `react-native-screens`.
- `react-native-reanimated` for animations.
- `@shopify/flash-list` for lists.

## `expo-image`

With this commit we added `expo-image` to the project. Note that prior to that we had to install Expo modules: [Guide](https://docs.expo.dev/bare/installing-expo-modules/). However, all it took was to run a command:

```bash
npx install-expo-modules@latest
```

We also added a script for generating blurhashes (`/blurhash`) to enhance user experience.
