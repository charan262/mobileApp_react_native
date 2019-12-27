import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  FlatList,
  View
} from 'react-native';
import Colors from '../../constants/Colors';
import { myData } from '../../constants/mockData';
import { Card } from 'react-native-elements';

export default class Skills extends React.Component {
  
  render() {
    return (
      <ScrollView>
        <View style={{ paddingBottom: 150 }} >
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
       </ScrollView>
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
    fontSize: 14
  }
});
