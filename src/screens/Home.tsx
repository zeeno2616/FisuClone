import React from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack'; // Import StackNavigationProp
import {RootStackParamList} from '../navigation/StackNavigation'; // Import RootStackParamList type
import RoundIcon from '../components/RoundIcon';
import RectangularButton from '../components/RectangleButton';
import {useNavigation} from '@react-navigation/native';

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
  const navigation =
    useNavigation<StackNavigationProp<RootStackParamList, 'Home'>>(); // Define type for navigation

  const handleButtonPress = () => {
    navigation.navigate('Test');
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <FlatList
          data={topIcons}
          numColumns={4}
          renderItem={({item}) => (
            <RoundIcon
              iconName={item.iconName}
              text={item.text}
              backgroundColor="#7a7afa"
              onPress={handleButtonPress}
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
          renderItem={({item}) => (
            <RectangularButton text={item.text} onPress={handleButtonPress} />
          )}
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
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  subheading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    marginVertical: 12,
    paddingHorizontal: 10,
  },
  bottomContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

export default HomeScreen;
