import React from 'react';
import {View, Text} from 'react-native';
import {globalStyles} from '../styles/PageStyles';
interface ScreenProps {}

const CompetitionScreen: React.FC<ScreenProps> = () => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.text}>{'Competition Info'}</Text>
    </View>
  );
};

export default CompetitionScreen;