import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props {
  iconName: string;
  iconSize?: number;
  iconColor?: string;
  backgroundColor?: string;
  text?: string; // Added text prop
  onPress: () => void; // Add onPress prop of type function
}

const RoundIcon: React.FC<Props> = ({
  iconName,
  iconSize = 24,
  iconColor = '#fff',
  backgroundColor = '#fff',
  text = 'Test', // Default text value
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <View style={[styles.iconContainer, {backgroundColor}]}>
          <MaterialCommunityIcons
            name={iconName}
            size={iconSize}
            color={iconColor}
          />
        </View>
        <Text style={styles.iconText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    backgroundColor: '#48abe0',
    height: 55,
    width: 55,
    shadowColor: 'darkslategray',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 4,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 27.5,
    marginHorizontal: 16,
    marginVertical: 10,
  },
  iconText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
});

export default RoundIcon;
