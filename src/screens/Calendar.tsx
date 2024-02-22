import React, {useState, useRef} from 'react';
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import globalStyles from '../styles/PageStyles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props {
  iconName: string;
  iconSize?: number;
  iconColor?: string;
  backgroundColor?: string;
}

const Calendar: React.FC<Props> = () => {
  const scrollViewRef = useRef<ScrollView>(null);
  const [scrollY, setScrollY] = useState(0);
  const [selectedDate, setSelectedDate] = useState('');
  const handleSelectDate = (newSelectedDate: string) => {
    setSelectedDate(newSelectedDate); // Adjust the offset value as per your needs
  };
  const dates = ['Feb 20', 'Feb 21', 'Feb 22', 'Feb 23', 'Feb 24']; // Example dates, you can replace with your actual data
  const dateItemHeight = 120;
  const [isDropdownOpen, setIsDropdownOpen] = useState<{
    [key: string]: boolean;
  }>({}); // Use object for dropdown state

  const toggleDropdown = (selectedDate: string) => {
    setIsDropdownOpen(prevState => ({
      ...prevState,
      [selectedDate]: !prevState[selectedDate],
    }));
    const dropdownMenuOffset = 150; // Adjust the offset as needed
    const dateItemIndex = dates.indexOf(selectedDate);
    if (scrollViewRef.current && isDropdownOpen[selectedDate]) {
      const yOffset = dateItemIndex * dateItemHeight + dropdownMenuOffset;
      scrollViewRef.current.scrollTo({y: yOffset, animated: true});
    }
  };

  const renderDateItem = (date: string) => {
    // Example data for dropdown menu, you can replace with your actual data
    const dropdownData = [
      {time: '10:00 AM', event: 'Meeting'},
      {time: '02:00 PM', event: 'Lunch'},
      {time: '05:00 PM', event: 'Gym'},
    ];

    const isItemSelected = selectedDate === date;
    return (
      <View style={styles.dateItem} key={date}>
        <Text style={styles.dateText}>{date}</Text>

        <TouchableOpacity
          style={styles.dropdownButton}
          onPress={() => {
            Alert.alert(
              'Schedule',
              dropdownData
                .map(item => `${item.time} - ${item.event}`)
                .join('\n'),
              [
                {
                  text: 'OK',
                  style: 'cancel',
                  onPress: () => console.log('OK Pressed'),
                },
              ],
              {cancelable: false},
            );
          }}>
          <MaterialCommunityIcons name="chevron-down" size={24} color="black" />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <ScrollView
      contentContainerStyle={styles.scrollContainer}
      ref={scrollViewRef}
      scrollEventThrottle={16}>
      <View style={styles.dateItemContainer}>
        {dates.map(date => renderDateItem(date))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    alignItems: 'flex-start',
    paddingHorizontal: 10,
    flexGrow: 1,
  },
  dateItemContainer: {
    marginHorizontal: 20,
    marginVertical: 10,
    flexGrow: 1,
  },
  dateItem: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#000000',
    borderBottomWidth: 5,
    borderBottomColor: '#000000',
    borderLeftColor: '#000000', // Color of the left border
    borderRightColor: '#000000', // Color of the right border
    opacity: 0.8,
    padding: 10,
    width: '100%',
    alignSelf: 'flex-start',
    alignItems: 'center',
    height: 100,
    borderRadius: 15,
    marginBottom: 20,
    borderLeftWidth: 1, // Add left border width
    borderRightWidth: 5, // Add right border width
    position: 'relative', // Add position property
    zIndex: 1, // Add zIndex property
    backgroundColor: '#7a7afa'
  },
  dateText: {
    fontSize: 20,
    fontFamily: 'Robotica-Italic',
    color: '#ffffff',
  },
  dropdownButton: {
    marginLeft: 'auto',
  },
});

export default Calendar;
