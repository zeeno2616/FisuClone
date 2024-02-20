import React from 'react';
import { View, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


interface Props {
  iconName: string;
  iconSize?: number;
  iconColor?: string;
  backgroundColor?: string;
}

const RoundIcon: React.FC<Props> = ({
  iconName,
  iconSize = 24,
  iconColor = '#000',
  backgroundColor = '#fff',
}) => {
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <MaterialCommunityIcons name={iconName} size={iconSize} color={iconColor} />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      width: 70,
      height: 70,
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center',
      elevation: 5, 
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 }, 
      shadowOpacity: 0.3, 
      shadowRadius: 3, 
    },
  });

export default RoundIcon;
