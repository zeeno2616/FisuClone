import React from 'react';
import {View, Text} from 'react-native';
import {globalStyles} from '../styles/PageStyles';
interface ScreenProps {}

const CalendarScreen: React.FC<ScreenProps> = () => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.text}>{'Calendar'}</Text>
    </View>
  );
};

export default CalendarScreen;