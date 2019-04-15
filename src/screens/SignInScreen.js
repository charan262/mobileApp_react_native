import React from 'react';
import { Text, View, Button, AsyncStorage, StyleSheet, TextInput, Dimensions, TouchableOpacity } from 'react-native';
import Colors from '../constants/Colors';
export default class SignIn extends React.Component {

    state = {
        uName : null,
        pswd: null
    }

    proceedSignIn = async() => {
        // await AsyncStorage.setItem('userToken', this.state.uName);
        this.props.navigation.navigate('App');
    }
    render() {
        return (
            <View style={styles.container}>
               <View>
               <TextInput
                    style={styles.textInput}
                    placeholder='Enter word - testUser'
                    onChangeText={(text) => this.setState({uName:text})}
                    onBlur = {this.onBlurText}
                    value={this.state.uName}
                    placeholderTextColor={Colors.tintColor}
                />
                 <TextInput
                    style={styles.textInput}
                    placeholder = 'Enter word - testPassword'
                    onChangeText={(text) => this.setState({pswd:text})}
                    value={this.state.pswd}
                    secureTextEntry
                    placeholderTextColor={Colors.tintColor}
                />
               </View>
                <TouchableOpacity style = {styles.button} onPress={this.proceedSignIn}>
                   <Text style= {{ color: Colors.tintColor }}>LOGIN</Text>
                </TouchableOpacity>
                <Text>{this.state.pswd}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Colors.tintColor,
  },
  textInput: {
    height: 40,
    width: 240,
    borderColor: Colors.whiteColor,
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    backgroundColor: Colors.whiteColor,
    borderRadius: 4
  },
  button: {
    alignItems: 'center',
    backgroundColor: Colors.tintColor,
    borderColor: Colors.whiteColor,
    borderWidth: 1,
    padding: 10,
    height: 40,
    width: 240,
    backgroundColor:Colors.whiteColor,
    borderRadius: 4
  },
})