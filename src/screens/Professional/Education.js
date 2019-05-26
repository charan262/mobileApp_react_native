import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TouchableHighlight,
  FlatList,
  Animated
} from 'react-native';
import Colors from '../../constants/Colors';
import StickyScroll from './StickyScroll';
import { myData } from '../../constants/mockData';
import Strings from '../../constants/Strings';
import { Card } from 'react-native-elements';

export default class Education extends React.Component {
  render() {
    return (
      <StickyScroll {...this.props}>
        <View style={{ flex: 1 }}>
          <FlatList
            data={myData.education}
            contentContainerStyle={{ marginTop: 0 }}
            renderItem={({ item }) => {
              return (
                <Card key={item.key}>
                  <Text style={styles.subHead}>{item.degree}</Text>
                  <Text style={styles.companyStyle}>{item.major}</Text>
                  <Text style={styles.durStyle}>{item.college}</Text>
                  <Text style={styles.durStyle}>{item.duration}</Text>
                </Card>
              )
            }}
          />
        </View>
      </StickyScroll>
    )
  }
}

const styles = StyleSheet.create({
  subHead: {
    color: Colors.blackColor,
    fontSize: 18
  },
  companyStyle: {
    color: Colors.grayColor,
    fontSize: 16
  },
  durStyle: {
    color: Colors.grayColor,
    fontSize: 14
  }
});
