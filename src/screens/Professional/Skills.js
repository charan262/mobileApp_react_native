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
import { NormalText } from '../../components/NormalText';
import { Card } from 'react-native-elements';

export default class Skills extends React.Component {
  render() {
    return (
      <StickyScroll {...this.props}>
        <View style={{ flex: 1 }}>
          <FlatList
            data={myData.skills}
            contentContainerStyle={{ marginTop: 0 }}
            renderItem={({ item }) => {
              return (
                <Card key={item.key}>
                  <Text style={styles.subHead}>{item.name}</Text>
                  <Text style={styles.textStyle}>{item.desc}</Text>
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
    fontSize: 14
  },
  textStyle: {
    color: Colors.grayColor,
    fontSize: 20
  }
});
