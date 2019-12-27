/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import AppNavigator from './navigation/AppNavigator';
import { Provider } from "react-redux";
import { applyMiddleware,createStore } from 'redux';
import thunk from "redux-thunk";
import rootReducer from './redux/reducers';
import codePush from "react-native-code-push";

const store=createStore(rootReducer, applyMiddleware(thunk))

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Provider store={store}><AppNavigator/></Provider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

const codePushOptions = { checkFrequency: codePush.CheckFrequency.ON_APP_START };
export default codePush(codePushOptions)(App);
