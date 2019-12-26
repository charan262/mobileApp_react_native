import React from 'react';
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';
import AppStack, { AuthStack } from './DrawerNavigator'
import Camera from '../screens/Home/Features/Camera'

export default createAppContainer(createSwitchNavigator(
  {
    Auth: AuthStack,
    App: AppStack,
    CameraScreen: Camera
  },
  {
    initialRouteName: 'Auth',
    headerMode: 'none'
  }
  
));