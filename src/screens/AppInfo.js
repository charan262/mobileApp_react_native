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

import HeaderNavigator from '../components/HeaderNavigator';
import Colors from '../constants/Colors';
import { ImgButton } from '../components/Button';

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
        <HeaderNavigator {...this.props} />
        <View styles = {styles.contentContainer}>
        <ImgButton
          buttonImage={true}
          name='logo-github'
          buttonName='Github Source File'
          onPress={this.canOpenUrl} />
        <Text>App Version 0.0.1</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems:'center',
    marginLeft: 30

  }
});
