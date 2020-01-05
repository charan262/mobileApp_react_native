import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Dimensions,
  Animated
} from 'react-native';

import { myData } from '../../constants/mockData';
import { Card } from 'react-native-elements';
import Colors from '../../constants/Colors';

export default class PersonalScreen extends React.Component {

  state = {
    indexToAnimate:null
  }

  componentWillMount() {
    this.animatedValue = new Animated.Value(0);
    this.value = 0;
    this.animatedValue.addListener(({value}) => this.value = value) 

    this.frontSideInterpolateVal = this.animatedValue.interpolate({
      inputRange: [0,180],
      outputRange: ['0deg', '180deg']
    });

    this.backSideInterpolateVal = this.animatedValue.interpolate({
      inputRange: [0,180],
      outputRange: ['180deg', '360deg']
    });
  }

  flipCard = (itemKey) => {
    this.setState({ indexToAnimate: itemKey })
    if (this.value >= 90) {
        Animated.spring(this.animatedValue, {
            toValue: 0,
            friction: 8,
            tension: 10
        }).start();
    } else if (this.value < 90) {
        Animated.spring(this.animatedValue, {
            toValue: 180,
            friction: 8,
            tension: 10
        }).start();
    }
   }
  render() {
    const frontAnimStyle = {
      transform: [
        { rotateY: this.frontSideInterpolateVal }
      ]
    }
    const backAnimStyle = {
      transform: [
        { rotateY: this.backSideInterpolateVal }
      ]
    }
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignSelf: 'center', backgroundColor: '#F5FFFA' }}>
       <FlatList
            data={myData.resources}
            contentContainerStyle={{ marginTop: 0 }}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity  onPress={this.flipCard.bind(this,index)}>
                    {this.state.indexToAnimate === index ? 
                      (<View>
                      <Animated.View key={item.key} style={[styles.container, frontAnimStyle]} >
                         <Text style={styles.textStyle}>{item.desc}</Text>
                    </Animated.View>
                    <Animated.View style={[backAnimStyle, styles.backContainer, styles.cardStyle]} >
                         <View>
                         <Text style={[styles.backtextStyle, index == 0 && { paddingTop:20, paddingLeft:20}]}>{index == 0 && 'Name - '+ item.name}</Text>
                         <Text style={[styles.backtextStyle, index == 0 && { paddingLeft:20 }]}>{index == 0 && 'Email - '+ item.email}</Text>
                         <Text style={[styles.backtextStyle, index == 1 && { paddingLeft:20, paddingTop:30, position:'absolute'}]}>{index == 1 && 'Facebook - '+ item.facebook}</Text>
                         <Text style={[styles.backtextStyle, index == 1 && { paddingLeft:20,paddingTop:55, position:'absolute'}]}>{index == 1 && 'LinkedIn - '+ item.linkedIn}</Text>
                         <Text style={[styles.backtextStyle, index == 2 && { paddingLeft:20, paddingTop:30, position:'absolute' }]}>{index == 2 && 'Github - '+ item.github}</Text>
                         </View>
                    </Animated.View></View>) : 

                    <Animated.View key={item.key} style={[styles.container]} >
                         <Text style={styles.textStyle}>{item.desc}</Text>
                    </Animated.View>
                    }
                </TouchableOpacity>
              )
            }}
          />
          
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      borderRadius:5,
      borderColor: Colors.tintColor,
      backgroundColor: Colors.tintColor,
      height: Dimensions.get('window').height*0.20,
      width: Dimensions.get('window').width*0.80,
      justifyContent: 'center', 
      alignItems: 'center',
      backfaceVisibility:'hidden',
      margin: 20
  },
  backContainer: {
    borderRadius:5,
    borderColor: Colors.tintColor,
    borderWidth:1,
    backgroundColor: Colors.whiteColor,
    height: Dimensions.get('window').height*0.20,
    width: Dimensions.get('window').width*0.80,
    backfaceVisibility:'hidden',
    margin: 20
},
  textStyle: {
    color: Colors.whiteColor,
    fontSize: 24
  },
  backtextStyle: {
    color: Colors.tintColor,
    fontSize: 20,
    alignSelf:'stretch'
  },
  cardStyle:{
    position: "absolute",
    top: 0
  }
});
