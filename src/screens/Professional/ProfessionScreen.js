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
import Colors from '../../constants/Colors';
import { AvatarImg } from '../../components/Avatar';
import Strings from '../../constants/Strings';
import  Header  from './Header';
import StickyTabs from './StickyTabs';

export default class ProfessionScreen extends React.Component {
  static router = TabNavigator.router;
  render() {
    return (
      <StickyTabs
        headerHeight={140}
        headerComponent={<Header />}
        contentComponent={<TabNavigator navigation={this.props.navigation} />}
      />
    );
  }
}
const styles = StyleSheet.create({
});
