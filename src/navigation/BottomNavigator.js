import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createSwitchNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/Home/HomeScreen';
import ProfessionScreen from '../screens/Professional/ProfessionScreen';
import PersonalScreen from '../screens/Personal/PersonalScreen';
import Colors from '../constants/Colors';

const HomeStack = createStackNavigator({ Home: HomeScreen },
  {
    navigationOptions: {
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
      tabBarOptions: {
        activeTintColor: Colors.tintColor,
      }
    },
    headerMode: 'none',
    headerVisible: false
  }
);

const ProfessionStack = createStackNavigator({ Profession: ProfessionScreen }, {
  navigationOptions : {
    tabBarLabel: 'Profession',
    tabBarIcon: ({ focused }) => (
      <TabBarIcon
        focused={focused}
        name={Platform.OS === 'ios' ? 'ios-laptop' : 'md-laptop'}
      />
    ),
    tabBarOptions: {
      activeTintColor: Colors.tintColor,
    }
  },
  headerMode: 'none',
  headerVisible: false
});

const PersonalStack = createStackNavigator({ Personal: PersonalScreen }, {
  navigationOptions : {
    tabBarLabel: 'Reach Me',
    tabBarIcon: ({ focused }) => (
      <TabBarIcon
        focused={focused}
        name={Platform.OS === 'ios' ? 'ios-contact' : 'md-contact'}
      />
    ),
    tabBarOptions: {
      activeTintColor: Colors.tintColor,
    }
  },
  headerMode: 'none',
  headerVisible: false
});

export default createBottomTabNavigator({
  // HomeStack,
  ProfessionStack,
  PersonalStack,
});
