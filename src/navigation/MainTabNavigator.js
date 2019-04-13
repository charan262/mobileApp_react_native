import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import ProfessionScreen from '../screens/ProfessionScreen';
import PersonalScreen from '../screens/PersonalScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'My Place',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? 'ios-home'
          : 'md-home'
      }
    />
  ),
};

const ProfessionStack = createStackNavigator({
  Profession: ProfessionScreen,
});

ProfessionStack.navigationOptions = {
  tabBarLabel: 'Profession',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-laptop' : 'md-laptop'}
    />
  )
};

const PersonalStack = createStackNavigator({
  Personal: PersonalScreen,
});

PersonalStack.navigationOptions = {
  tabBarLabel: 'Personal',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-cafe' : 'md-cafe'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  ProfessionStack,
  PersonalStack,
});
