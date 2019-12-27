import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Animated,
  ScrollView,
  TouchableOpacity,
  FlatList
} from 'react-native';
import { TabNavigator } from '../../navigation/TopTabNavigator';
import  Header  from './Header';

export default class ProfessionScreen extends React.Component {
  static router = TabNavigator.router;
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{ width: '100%', height: 140, position: "absolute", top: 0,  overflow: "hidden" }}>
            <Header/>
        </View>
        <View style={{ flex: 1,marginTop: 140,marginBottom: -140 }}>
          <TabNavigator navigation={this.props.navigation}/>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
});
