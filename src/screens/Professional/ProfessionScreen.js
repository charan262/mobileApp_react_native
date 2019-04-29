import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { TabNavigator } from '../../navigation/TopTabNavigator';

export default class ProfessionScreen extends React.Component {
  static router = TabNavigator.router;
  render() {
    return (
      <View style={{flex: 1}}>
        <Card></Card>
        <TabNavigator navigation={this.props.navigation}/>
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
