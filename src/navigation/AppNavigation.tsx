/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home';
import CalendarScreen from '../screens/Calendar';
import ProfileScreen from '../screens/Profile';
import NavBarIcon from '../components/NavBarIcon';
function AppNavigation(): React.JSX.Element {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarActiveTintColor: '#000000',
          tabBarInactiveTintColor: '#000000',
          tabBarStyle: {
            backgroundColor: '#FFFFFF',
            alignItems: 'center',
            justifyContent: 'center',
            borderTopWidth: 0,
            height: 60,
            paddingBottom: 5,
          },
          tabBarLabelStyle: {
            marginBottom: 5,
          },
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => (
                <NavBarIcon
                  name="home"
                  size={30}
                  color={focused ? '#000000' : '#000000'}
                />
              ),
          }}
        />
<Tab.Screen
          name="Calendar"
          component={CalendarScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => (
                <NavBarIcon
                  name="calendar"
                  size={30}
                  color={focused ? '#000000' : '#000000'}
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
                  color={focused ? '#000000' : '#000000'}
                />
              ),
          }}
        />
        

      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default AppNavigation;