import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import RoundIcon from '../components/RoundIcon';
interface ScreenProps {}

const HomeScreen: React.FC<ScreenProps> = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <RoundIcon
          iconName="information-variant"
          backgroundColor="#48abe0"
          text="Info"
        />
        <RoundIcon
          iconName="timeline-clock-outline"
          backgroundColor="#48abe0"
          text="Schedule"
        />
        <RoundIcon
          iconName="medical-bag"
          backgroundColor="#48abe0"
          text="Health"
        />
        <RoundIcon iconName="location" backgroundColor="#48abe0" text="Venue" />
      </View>
      <View style={styles.topContainer}>
        <RoundIcon iconName="cash" backgroundColor="#48abe0" text="Finance" />
        <RoundIcon
          iconName="airplane"
          backgroundColor="#48abe0"
          text="Travel"
        />
        <RoundIcon iconName="star" backgroundColor="#48abe0" text="Points" />
        <RoundIcon iconName="phone" backgroundColor="#48abe0" text="Contacts" />
      </View>

      <View style={styles.container}>
        <Text style={styles.text}>{'Home'}</Text>
      </View>
    </View>
  );
};
export const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  topContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center', // Align items to the center if necessary
    marginVertical: 8,
    paddingHorizontal: 30,
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
});

export default HomeScreen;
