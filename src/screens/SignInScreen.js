import React from 'react';
import { Text, View, Button, AsyncStorage } from 'react-native';

export default class SignIn extends React.Component {

    proceedSignIn = async() => {
        // await AsyncStorage.setItem('userToken', 'charan');
        this.props.navigation.navigate('App');
    }
    render() {
        return (
            <View>
                <Button title="Sign in!" onPress={this.proceedSignIn} />
            </View>
        )
    }
}