/*
  Main Nested Navigation setup of the app
  Currently includes a tab navigator and a stack navigator nested in the first component
  TO DO: (Maybe) move this system out of a separate file and into the main App.tsx file
  TO DO: Add more screens as required
*/
/* eslint-disable react/no-unstable-nested-components */

import React from 'react';
import CompetitionScreen from '../screens/Competition';
import CalendarScreen from '../screens/Calendar';
import ProfileScreen from '../screens/Profile';
import NavBarIcon from '../components/NavBarIcon';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import StackNavigation from './StackNavigation';

function AppNavigation(): React.JSX.Element {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarActiveTintColor: '#7a7afa',
          tabBarInactiveTintColor: '#000000',
          tabBarStyle: {
            backgroundColor: '#FFFFFF',
            alignItems: 'center',
            justifyContent: 'center',
            borderTopWidth: 0,
            height: 60,
            paddingBottom: 5,
          },
          headerStyle: {
            height: 60,
          },
          tabBarLabelStyle: {
            marginBottom: 5,
          },
        }}>
        <Tab.Screen // Tab Navigator 1: Home
          name="Home"
          component={StackNavigation}
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <NavBarIcon
                name="home"
                size={30}
                color={focused ? '#7a7afa' : '#000000'}
              />
            ),
          }}
        />
        <Tab.Screen // Tab Navigator 2: Competition
          name="Competition"
          component={CompetitionScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <NavBarIcon
                name="trophy-variant"
                size={30}
                color={focused ? '#7a7afa' : '#000000'}
              />
            ),
          }}
        />
        <Tab.Screen // Tab Navigator 3: Calendar
          name="Calendar"
          component={CalendarScreen}
          options={{
            headerShown: true,
            tabBarIcon: ({focused}) => (
              <NavBarIcon
                name="calendar"
                size={30}
                color={focused ? '#7a7afa' : '#000000'}
              />
            ),
          }}
        />
        <Tab.Screen // Tab Navigator 4: Profile
          name="Profile"
          component={ProfileScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <NavBarIcon
                name="snowman"
                size={30}
                color={focused ? '#7a7afa' : '#000000'}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default AppNavigation;
