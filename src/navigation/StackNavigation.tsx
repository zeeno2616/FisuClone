/*
  Home Screen Stack Navigator
  Currently navigates from home screen to a test screen.
  Currently setup as a template to showcase the app's current functionality.
  TO DO: Create more screens as required
*/
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import Test from '../screens/Test';

type RootStackParamList = {
  Home: undefined;
  Test: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Test" component={Test} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
