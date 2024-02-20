import React from 'react';
import {View, Text} from 'react-native';
import {globalStyles} from '../styles/PageStyles';
interface ScreenProps {}

const HomeScreen: React.FC<ScreenProps> = () => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.text}>{'Home'}</Text>
    </View>
  );
};

export default HomeScreen;