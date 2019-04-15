import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TouchableHighlight
} from 'react-native';

import { currentGreeting } from '../utils/timeFormat';
import HeaderNavigator from '../components/HeaderNavigator';

export default class AppInfo extends React.Component {

  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
    }}>

        <HeaderNavigator {...this.props}/>
        <View>
          <Text>Hello this is AppInfo Screen</Text>
        </View>

    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,

  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  }
});
