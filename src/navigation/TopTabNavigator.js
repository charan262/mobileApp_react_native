import React from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation';

import SKILLS from '../screens/Professional/Skills';
import EXPERIENCE from '../screens/Professional/Experience';
import EDUCATION from '../screens/Professional/Education';
import Colors from '../constants/Colors';
import Strings from '../constants/Strings';

export const TabNavigator = createMaterialTopTabNavigator(
    {
      SKILLS,
      EXPERIENCE,
      EDUCATION
    }, {
        navigationOptions: ({ navigation, screenProps }) => ({
            header: null,
            headerMode: 'none',
            tabBarVisible: true,
            tabBarLabel: () => {
              const { routeName } = navigation.state;
              switch (routeName) {
                //
              }
              return <Text>{routeName}</Text>;
            },
          }),
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