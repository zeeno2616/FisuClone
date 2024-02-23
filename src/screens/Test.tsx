/*
  Sample text screen generated to explain how navigation through buttons will work
  TO DO: Remove this file and replace with the actual screens to be implemented into the app
*/
import React from 'react';
import {View, Text} from 'react-native';
import {globalStyles} from '../styles/PageStyles';
interface ScreenProps {}

const TestScreen: React.FC<ScreenProps> = () => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.text}>{'Competition Info'}</Text>
    </View>
  );
};

export default TestScreen;
