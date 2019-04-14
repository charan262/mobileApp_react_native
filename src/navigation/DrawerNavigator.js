import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import TabBarIcon from '../components/TabBarIcon';

import AppInfo from '../screens/AppInfo'

import BottomTabNavigator from './BottomNavigator';
export default createDrawerNavigator({
    Home: {
        screen: BottomTabNavigator
    },
    App: {
        screen: AppInfo
    },
}, {
        initialRouteName: 'Home'
    }
);
