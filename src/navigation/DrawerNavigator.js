import React from 'react';
import { Platform, View, Text, Image, Alert } from 'react-native';
import { createStackNavigator, createDrawerNavigator, DrawerItems, NavigationActions } from 'react-navigation';
import TabBarIcon from '../components/TabBarIcon';

import AppInfo from '../screens/AppInfo';
import Feedback from '../screens/FeedbackScreen';
import BottomTabNavigator from './BottomNavigator';
import Colors from '../constants/Colors';
import HeaderNavigator from '../components/HeaderNavigator';
import SignInScreen from '../screens/SignInScreen';

export const AuthStack = createStackNavigator({ 
    'Login': {
        screen: SignInScreen,
    }
  }, { 
      headerMode: 'none', headerVisible: false 
})

const HomeNavigator = createStackNavigator({
    'HomeInfo': {
        screen: BottomTabNavigator,
        navigationOptions: ({ navigation }) => ({
            title:'Home',
            headerLeft: <HeaderNavigator navigation={navigation}/>
        })
    },
})

const AppNavigator = createStackNavigator({
    'AppInfo': {
        screen: AppInfo,
        navigationOptions: ({ navigation }) => ({
            title:'App Info',
            headerLeft: <HeaderNavigator navigation={navigation}/>
        })
    },
})

const FeedbackNavigator = createStackNavigator({
    'FeedbackInfo': {
        screen: Feedback,
        navigationOptions: ({ navigation }) => ({
            title:'Feedback',
            headerLeft: <HeaderNavigator navigation={navigation}/>

        })
    },
})

const LogoutNavigator = createStackNavigator({
    'LogoutInfo': {
        screen: 'Logout',
        navigationOptions: ({ navigation }) => ({
            // headerLeft: <HeaderNavigator navigation={navigation}/>

        })
    },
})

export default createDrawerNavigator({
    'Home': {
        screen: HomeNavigator,
        navigationOptions: {
            drawerIcon: ({ focused }) => (
                <TabBarIcon
                    focused={focused}
                    name={Platform.OS === 'ios' ? 'ios-home' : 'md-home'}
                />
            ),
        }
    },
    'App Info': {
        screen: AppNavigator,
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
        screen: FeedbackNavigator,
        navigationOptions: {
            drawerIcon: ({ focused }) => (
                <TabBarIcon
                    focused={focused}
                    name={Platform.OS === 'ios' ? 'ios-text' : 'md-text'}
                />
            ),
        }
    },
    'Logout': {
        screen: LogoutNavigator,
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
                        console.log(props)
                        Alert.alert('Alert Title', 'My Alert Msg', [{ text: 'OK', onPress: () => props.navigation.navigate('Auth')}])
                    }
                }
                 />
        </View>
    )
}
    

