import React from 'react';
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';
import AppStack, { AuthStack } from './DrawerNavigator'
import Camera from '../screens/Home/Features/Camera';
import GoogleMaps from '../screens/Home/Features/GoogleMaps';

export default createAppContainer(createSwitchNavigator(
  {
    Auth: AuthStack,
    App: AppStack,
    CameraScreen: Camera,
    GoogleMaps:GoogleMaps
  },
  {
    initialRouteName: 'Auth',
    headerMode: 'none'
  }
  
));