import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import HeaderNavigator from '../components/HeaderNavigator';

export default class ProfessionScreen extends React.Component {

  componentWillUnmount(){
    console.log('unmount-professional')
  }
  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
    }}>
        <View>
          <Text>Hello this is Professional Screen</Text>
        </View>

    </View>
    );
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
