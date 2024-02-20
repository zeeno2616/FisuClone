import React from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';

import RoundIcon from '../components/RoundIcon';
import RectangularButton from '../components/RectangleButton';
interface ScreenProps {}

const topIcons = [
  {iconName: 'information-variant', text: 'Info'},
  {iconName: 'timeline-clock-outline', text: 'Schedule'},
  {iconName: 'medical-bag', text: 'Health'},
  {iconName: 'map-marker-outline', text: 'Venue'},
  {iconName: 'cash', text: 'Finance'},
  {iconName: 'airplane', text: 'Travel'},
  {iconName: 'star', text: 'Points'},
  {iconName: 'phone', text: 'Contacts'},
];

const bottomIcons = [
  {text: 'History'},
  {text: 'Mascot'},
  {text: 'Emblem'},
  {text: 'Venues'},
  {text: 'Sports'},
  {text: 'Sponsors'},
];

const HomeScreen: React.FC<ScreenProps> = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <FlatList
          data={topIcons}
          numColumns={4} // Set to the number of columns you want (4 in this case)
          renderItem={({item}) => (
            <RoundIcon
              iconName={item.iconName}
              text={item.text}
              backgroundColor="#7a7afa"
              // Add other props as needed
            />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <Text style={styles.subheading}>Encyclopedia</Text>
      <View style={styles.bottomContainer}>
        <FlatList
          data={bottomIcons}
          numColumns={2}
          renderItem={({item}) => <RectangularButton text={item.text} />}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
};
export const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  topContainer: {
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center', // Center items horizontally
    justifyContent: 'space-between', // Arrange items in the center
    marginBottom: 10,
  },
  subheading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  bottomContainer: {
    flex: 1,
    alignItems: 'center', // Center items horizontally
  },
  row: {
    width: '100%',
    paddingHorizontal: 10,
    flexDirection: 'row', // Arrange items horizontally
    marginBottom: 10, // Add margin between rows
    justifyContent: 'space-between',
    alignItems: 'center',
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
