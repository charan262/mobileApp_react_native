import React from 'react';
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';
import AppStack, { AuthStack } from './DrawerNavigator'


export default createAppContainer(createSwitchNavigator(
  {
    Auth: AuthStack,
    App: AppStack
  },
  {
    initialRouteName: 'Auth',
    headerMode: 'none'
  }
  
));