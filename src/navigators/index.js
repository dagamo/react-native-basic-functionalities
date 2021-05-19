import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import Splashscreen from '../screens/splashscreen';

//New instance of the createStackNavigator class
const Stack = createStackNavigator();

/**
 * The root screen contains the application's navigation.
 *
 * @see https://reactnavigation.org/docs/en/hello-react-navigation.html#creating-a-stack-navigator
 */

const screenVertical = {
  gestureEnabled: false,
  gestureDirection: 'vertical',
  cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
};

const screenHorizontal = {
  gestureEnabled: true,
  gestureDirection: 'horizontal',
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
};

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen" headerMode="none">
        <Stack.Screen name="SplashScreen" component={Splashscreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
