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
import StickyScroll from './StickyScroll'

export default class Skills extends React.Component {
  render() {
    return (
      <StickyScroll {...this.props}>
     
      <View style={{flex: 1}}>
         <FlatList
          data={[{key:'1', num:'1'},{key:'2', num:'2'},{key:'3', num:'3'},{key:'4', num:'4'},{key:'5', num:'5'},{key:'6', num:'6'},{key:'7', num:'7'},{key:'8', num:'8'},{key:'9', num:'9'},{key:'10', num:'10'},{key:'11', num:'11'},{key:'12', num:'12'},{key:'13', num:'12'},{key:'14', num:'12'},{key:'15', num:'12'},{key:'16', num:'12'},{key:'17', num:'18'},{key:'18', num:'12'}]}
          contentContainerStyle={{marginTop: 0}}
          renderItem={({ item }) => {
            return (
            <View key={item.key}><Text style={{ padding: 20}}>{item.num}</Text></View>
            )
          }}
          />
    </View>
    </StickyScroll>
    )
  }
}

const styles = StyleSheet.create({
});
