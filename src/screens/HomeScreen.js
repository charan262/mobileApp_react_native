import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';


// import { MonoText } from '../components/StyledText';
import { currentGreeting } from '../utils/timeFormat';

export default class HomeScreen extends React.Component {
 state = {
   msg: currentGreeting()
 }
  static navigationOptions = {
    title: 'Home'
  };
 componentDidMount() {
    this.getTime = setInterval(() => this.setState({ msg: currentGreeting()}), 60*1000)
 }
 componentDidBlur() {
    console.log("unmount")
    clearInterval(this.getTime)
   
 }
 onBlur = () => {
   console.log("blur")
 }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
          </View>
            <View style={styles.getStartedContainer}>
              <Text>{`Hello User, ${this.state.msg}`}</Text>
            </View>
        </ScrollView>
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
