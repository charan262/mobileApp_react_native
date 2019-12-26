import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  FlatList
} from 'react-native';

import { currentGreeting } from '../../utils/timeFormat';
import { withNavigationFocus } from 'react-navigation';
import { Card, Button } from 'react-native-elements'
import { features } from '../../constants/mockData';
import { SubHeaderText } from '../../components/SubHeaderText';
import { NormalText } from '../../components/NormalText';
import Colors from '../../constants/Colors';
import { ImgButton } from '../../components/Button';

class HomeScreen extends React.Component {
  state = {
    msg: currentGreeting()
  }

  onButtonPress = (name, navigate) => {
    switch(name) {
      case 'Camera':
           return navigate('CameraScreen')
      case 'Google Maps':
         console.log('Hello Google Maps')
         break;
      case 'Date Picker':
         console.log('Hello Picker')
         break;
      case 'Net Info':
         console.log('Hello Ninfo')
         break;
      case 'Geo Location':
         console.log('Hello Geo')
         break;
      default: 
         console.log('nothing is clicked')
      
    }
  }

  render() {
    const { width } = Dimensions.get('window')
    const { navigate } = this.props.navigation
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#F5FFFA'
      }}>
        {/* <Card><SubHeaderText text='FEATURES IMPLEMENTED - REACT NATIVE'/></Card> */}
        <FlatList
          data={features}
          renderItem={({ item }) => {
            return (
              <Card title={item.name} key={item.key} containerStyle={{ backgroundColor: Colors.whiteColor }}>
                <NormalText text={item.description} />
                <ImgButton
                  btnStyle={{ marginLeft: width*0.14, height: 40, margin: 10, backgroundColor: Colors.whiteColor }}
                  buttonName='Try Now'
                  btnTextStyle={{ color: Colors.tintColor }}
                  onPress = { this.onButtonPress.bind(this, item.name, navigate) }
                   />
              </Card>
            )
          }
          }
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  
});

export default withNavigationFocus(HomeScreen)
