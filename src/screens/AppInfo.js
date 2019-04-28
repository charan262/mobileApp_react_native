import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  openURL,
  Linking
} from 'react-native';

import Colors from '../constants/Colors';
import { ImgButton } from '../components/Button';
import Strings from '../constants/Strings';

export default class AppInfo extends React.Component {
  canOpenUrl = () => {
    const URL = "https://github.com/charan262/mobileApp_react_native";
    Linking.canOpenURL(URL).then(supported => {
      if (!supported) {
        console.log('Can\'t handle url: ' + URL);
      } else {
        return Linking.openURL(URL);
      }
    }).catch(err => console.error('An error occurred', err));
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <ImgButton
            buttonImage={true}
            btnStyle={styles.buttonStyle}
            name='logo-github'
            buttonName='Github Source File'
            onPress={this.canOpenUrl} />
            <Text style={styles.versionStyle}>App Version 0.0.1</Text>
        </View>
        <View style={{ flex: 3, marginLeft: 20, flexDirection: 'column' }} >
        <Text style={styles.versionStyle}>What's New?</Text>
        <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontSize: 30 }}>{'\u2022'}</Text>
            <Text style={{ paddingLeft: 5, paddingTop: 8, fontSize: Strings.textFontSize, fontFamily: Strings.textFontFamily, color: Colors.grayColor }}>New feature added</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontSize: 30 }}>{'\u2022'}</Text>
            <Text style={{ paddingLeft: 5, paddingTop: 8, fontSize: Strings.textFontSize, fontFamily: Strings.textFontFamily, color: Colors.grayColor }}>Bug Fixes</Text>
          </View>
          </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.whiteColor
  },
  contentContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyle: {
    marginHorizontal: 0,
  },
  versionStyle: {
    color: Colors.tintColor,
    paddingTop: 4,
    fontSize: Strings.textFontSize,
    fontFamily: Strings.textFontFamily
  }
});
