import React, {useState} from 'react';
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
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
  const dates = ['Feb 20', 'Feb 21', 'Feb 22', 'Feb 23', 'Feb 24']; // Example dates, you can replace with your actual data
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = (selectedDate: string) => {
    setIsDropdownOpen(prevState => ({
      ...prevState,
      [selectedDate]: !prevState[selectedDate],
    }));
  };

  const renderDateItem = (date: string) => {
    // Example data for dropdown menu, you can replace with your actual data
    const dropdownData = [
      {time: '10:00 AM', event: 'Meeting'},
      {time: '02:00 PM', event: 'Lunch'},
      {time: '05:00 PM', event: 'Gym'},
    ];

    return (
      <View style={styles.dateItem} key={date}>
        <Text style={styles.dateText}>{date}</Text>
        <TouchableOpacity
          style={styles.dropdownButton}
          onPress={() => toggleDropdown(date)}>
          <MaterialCommunityIcons name="chevron-down" size={24} color="black" />
        </TouchableOpacity>
        {/* Dropdown menu */}
        {isDropdownOpen[date] && (
          <View style={styles.dropdownMenu}>
            {dropdownData.map((item, index) => (
              <TouchableOpacity style={styles.dropdownMenuItem} key={index}>
                <Text>{item.time}</Text>
                <Text>{item.event}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>
    );
  };

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
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
  },
  dateItem: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#7a7afa',
    borderBottomWidth: 5,
    borderBottomColor: '#7a7afa',
    padding: 10,
    width: '100%',
    alignSelf: 'flex-start',
    alignItems: 'center',
    height: 100,
    borderRadius: 15,
    marginBottom: 20,
    borderLeftWidth: 1, // Add left border width
    borderRightWidth: 5, // Add right border width
    borderLeftColor: '#7a7afa', // Color of the left border
    borderRightColor: '#7a7afa', // Color of the right border
  },
  dateText: {
    fontSize: 20,
  },
  dropdownButton: {
    marginLeft: 'auto',
  },
  dropdownMenu: {
    position: 'absolute',
    top: '100%',
    right: 0,
    backgroundColor: '#fff',
    zIndex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginTop: 5,
  },
  dropdownMenuItem: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});

export default Calendar;
