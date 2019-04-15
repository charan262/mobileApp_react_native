import React from 'react';
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';
import AppStack from './DrawerNavigator'
import SignInScreen from '../screens/SignInScreen';

const AuthLoading = createStackNavigator({ SignIn: SignInScreen}, { headerMode: 'none', headerVisible: false })

export default createAppContainer(createSwitchNavigator(
  {
    Auth: AuthLoading,
    App: AppStack
  },
  {
    initialRouteName: 'Auth'
  }
  
));