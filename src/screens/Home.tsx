import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import RoundIcon from '../components/RoundIcon';
interface ScreenProps {}

const HomeScreen: React.FC<ScreenProps> = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text>Home Screen</Text>
      </View>
      <View style={styles.topContainer}>
        <RoundIcon iconName="star" backgroundColor="#FDD835" />
        <RoundIcon iconName="star" backgroundColor="#FDD835" />
        <RoundIcon iconName="star" backgroundColor="#FDD835" />
        <RoundIcon iconName="star" backgroundColor="#FDD835" />
        </View>
        <View style={styles.topContainer}>
        <RoundIcon iconName="star" backgroundColor="#FDD835" />
        <RoundIcon iconName="star" backgroundColor="#FDD835" />
        <RoundIcon iconName="star" backgroundColor="#FDD835" />
        <RoundIcon iconName="star" backgroundColor="#FDD835" />
      </View>

      <View style={styles.container}>
        <Text style={styles.text}>{'Home'}</Text>
      </View>
    </View>
    
  );
};
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  headerContainer: {
    flex: 0.2,
    backgroundColor: '#EEE',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  topContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    justifyContent: 'space-evenly',
    marginVertical: 15,
    paddingHorizontal: 10, // Add padding horizontally
  },
  scrollContainer: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
  },
  navbar: {
    backgroundColor: '#FFFFFF',
  },
});

export default HomeScreen;