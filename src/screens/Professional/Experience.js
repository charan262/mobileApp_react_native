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
import { myData } from '../../constants/mockData';
import Strings from '../../constants/Strings';
import { Card } from 'react-native-elements';

export default class Experience extends React.Component {
  render() {
    return (
      <ScrollView>
        <View style={{ paddingBottom: 150 }}>
          <FlatList
            data={myData.experince}
            contentContainerStyle={{ marginTop: 0 }}
            renderItem={({ item }) => {
              return (
                <Card key={item.key}>
                  <Text style={styles.subHead}>{item.position}</Text>
                  <Text style={styles.companyStyle}>{item.company}</Text>
                  <Text style={styles.durStyle}>{item.duration}</Text>
                </Card>
              )
            }}
          />
        </View>
      </ScrollView>
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
