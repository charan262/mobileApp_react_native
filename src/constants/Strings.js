import React from 'react';
import { Platform } from 'react-native';

export default {
   USER_NAME : 'testUser',
   PASSWORD : 'testPassword',
   subHeaderFontFamily : Platform.OS === 'ios' ? 'HelveticaNeue-Medium': 'sans-serif-medium',
   textFontFamily : Platform.OS ==='ios' ? 'HelveticaNeue-Light' :'sans-serif',
   textFontSize: 16
}