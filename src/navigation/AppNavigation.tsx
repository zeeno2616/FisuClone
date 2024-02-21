/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home';
import CalendarScreen from '../screens/Calendar';
import ProfileScreen from '../screens/Profile';
import CompetitionScreen from '../screens/Competition';
import NavBarIcon from '../components/NavBarIcon';
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
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: true,
            tabBarIcon: ({focused}) => (
              <NavBarIcon
                name="home"
                size={30}
                color={focused ? '#7a7afa' : '#000000'}
              />
            ),
          }}
        />
        <Tab.Screen
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
        <Tab.Screen
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
        <Tab.Screen
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
