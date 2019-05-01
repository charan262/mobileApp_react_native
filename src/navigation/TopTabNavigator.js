import React from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation';

import SKILLS from '../screens/Professional/Skills';
import EXPERIENCE from '../screens/Professional/Experience';
import EDUCATION from '../screens/Professional/Education';
import Colors from '../constants/Colors';
import Strings from '../constants/Strings';
// import console = require('console');

export const TabNavigator = createMaterialTopTabNavigator(
    {
      SKILLS,
      EXPERIENCE,
      EDUCATION
    }, {
      initialRouteName:'SKILLS',
      tabBarPosition:'top',
          animationEnabled: true,
          swipeEnabled: true,
          tabBarOptions: {
            indicatorStyle: {
              backgroundColor: Colors.tintColor,
            },
            labelStyle: {
                fontSize: 14,
                color: Colors.tintColor,
                fontFamily: Strings.subHeaderFontFamily,

              },
              tabStyle: {
                height: 48,
                alignItems: 'center',
                justifyContent: 'center'
              },
              style: {
                backgroundColor: Colors.whiteColor,
              }
        }
    }
   
)