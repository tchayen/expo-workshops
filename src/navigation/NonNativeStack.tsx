import {createStackNavigator} from '@react-navigation/stack';
import {withLayoutContext} from 'expo-router';

const {Navigator} = createStackNavigator();

/**
 * https://expo.github.io/router/docs/migration/react-navigation/stack#setup
 */
export const CustomStack = withLayoutContext(Navigator);
