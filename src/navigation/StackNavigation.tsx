import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import Test from '../screens/Test';

// Define a type for the parameters accepted by each screen in the stack
type RootStackParamList = {
  Home: undefined; // No additional parameters for Home screen
  Test: undefined; // No additional parameters for Test screen
};

const Stack = createStackNavigator<RootStackParamList>(); // Pass the RootStackParamList type parameter

const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home} // Remove the header
      />
      <Stack.Screen
        name="Test"
        component={Test} // Remove the header
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
