import React from 'react';
import { Platform, View, Text, Image, Alert } from 'react-native';
import { createStackNavigator, createDrawerNavigator, DrawerItems } from 'react-navigation';
import TabBarIcon from '../components/TabBarIcon';

import AppInfo from '../screens/AppInfo';
import Feedback from '../screens/FeedbackScreen';
import BottomTabNavigator from './BottomNavigator';
import Colors from '../constants/Colors';

export default createDrawerNavigator({
    'Home': {
        screen: BottomTabNavigator,
        navigationOptions: {
            drawerIcon: ({ focused }) => (
                <TabBarIcon
                    focused={focused}
                    name={Platform.OS === 'ios' ? 'ios-home' : 'md-home'}
                />
            )
        }
    },
    'App Info': {
        screen: AppInfo,
        navigationOptions: {
            drawerIcon: ({ focused }) => (
                <TabBarIcon
                    focused={focused}
                    name={Platform.OS === 'ios' ? 'ios-information-circle-outline' : 'md-information-circle-outline'}
                />
            )
        }
    },
    'Feedback': {
        screen: Feedback,
        navigationOptions: {
            drawerIcon: ({ focused }) => (
                <TabBarIcon
                    focused={focused}
                    name={Platform.OS === 'ios' ? 'ios-text' : 'md-text'}
                />
            ),
        }
    }
}, {
        initialRouteName: 'Home',
        contentComponent: props => <DrawerContent {...props} />,
        contentOptions: {
            activeTintColor: Colors.tintColor,
        }
    }
);

const DrawerContent = (props) => {
    return (
        <View>
            <View
                style={{
                    backgroundColor: '#5F9EA0',
                    height: 140,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                <Image style={{ width: 80, height: 80 }} source={require('../constants/assets/charanImage.png')} />
                <Text style={{ color: 'white', fontSize: 20 }}>Charan Maddi</Text>
            </View>
            <DrawerItems {...props}
                onItemPress={
                    (route, focused) => {
                        if (route.route.routeName !== 'Logout') {
                            props.onItemPress(route);
                            return;
                        }
                        console.log(route)
                        Alert.alert('Alert Title', 'My Alert Msg', [{ text: 'OK', onPress: () => console.log(this.props)}])
                    }
                }
                 />
        </View>
    )
}
    

