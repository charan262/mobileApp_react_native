import React from 'react';
import { Text, View, Button, AsyncStorage, StyleSheet, TextInput, Dimensions, TouchableOpacity, StatusBar, Platform, Alert } from 'react-native';
import Colors from '../constants/Colors';
import { connect } from 'react-redux';
import { login, removeError } from '../redux/actions/AuthAction';
import { bindActionCreators } from 'redux';
import { Spinner } from '../components/Spinner';

class SignIn extends React.Component {
    state = {
        uName : null,
        pswd: null,
    }

    static getDerivedStateFromProps(nextProps) {
        if (nextProps.auth) {
            nextProps.navigation.navigate('App');
        }
        return null;
    }

    proceedSignIn = () => {
        this.props.login(this.state.uName, this.state.pswd);
    }
    clearErrorMsg = () => {
         this.props.removeError()
    }
    forgotPassword = () => {
        Alert.alert('', 'User name - testUser \nPassword - testPassword')
    }
    render() {
        const { authLoading, errorMsg } = this.props;
        return (
            <View style={styles.container}>
               <View>
               <TextInput
                    style={styles.textInput}
                    placeholder='Enter word - testUser'
                    onChangeText={(text) => this.setState({uName:text})}
                    value={this.state.uName}
                    onFocus={this.clearErrorMsg}
                    blurOnSubmit
                />
                 <TextInput
                    style={styles.textInput}
                    placeholder = 'Enter word - testPassword'
                    onChangeText={(text) => this.setState({pswd:text})}
                    value={this.state.pswd}
                    secureTextEntry
                    onFocus={this.clearErrorMsg}
                    blurOnSubmit
                />
               </View>
                <TouchableOpacity disabled={authLoading} style = {styles.button} onPress={this.proceedSignIn}>
                   {authLoading ? <Spinner size='small'/>:<Text style= {{ color: Colors.tintColor }}>LOGIN</Text>}
                </TouchableOpacity>

                <TouchableOpacity onPress ={this.forgotPassword}><Text style={styles.forgotPassword}>Forgot Password?</Text></TouchableOpacity>
                <TouchableOpacity onPress ={this.forgotPassword}><Text style={styles.forgotPassword}>Sign up</Text></TouchableOpacity>
                {errorMsg == null ? null: <Text style = {{ color: 'red' }}>{this.props.errorMsg}</Text>}
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
  forgotPassword: {
      paddingTop: 6,
      color: Colors.whiteColor,
      textDecorationLine: 'underline',
      fontSize: 14,
      fontWeight: 'bold'
  }
})

const mapStateToProps = state => {
    return {
        auth: state.authLevel.validAuth.authCheck,
        errorMsg: state.authLevel.validAuth.error,
        authLoading: state.authLevel.authProgress
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ login, removeError },dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)