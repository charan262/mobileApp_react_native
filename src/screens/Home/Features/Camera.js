import React, { PureComponent } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  CameraRoll
} from 'react-native';

import { RNCamera } from 'react-native-camera';
import Icon from 'react-native-vector-icons/Ionicons';
import { BackButton } from '../../../components/BackButton';

class Camera extends PureComponent {
  
  state ={
    cameraType: 'back'
  }

  takePicture = async() => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      CameraRoll.saveToCameraRoll(data.uri, 'photo');
      console.log(data.uri);
    }
  };

  backButtonPress = () => {
    this.props.navigation.navigate('App')
  }

  cameraTypeHandler = () => {
      let rotateCamera;
      const cameraType = this.state.cameraType;
      if (cameraType === "front") {
        rotateCamera = "back";
      }
      if (cameraType === "back") {
        rotateCamera = "front";
      }
      this.setState(prevState => {
        return {
          ...prevState,
          cameraType: rotateCamera
        };
      });
  }
  render() {
    const { width } = Dimensions.get('window')
    return (
      <View style={styles.container}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={this.state.cameraType}
          flashMode={RNCamera.Constants.FlashMode.on}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          captureAudio={false}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
        />
         <BackButton color='#fff' onPress={this.backButtonPress}/>
        <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
        <Icon
            name='md-camera'
            size={40}
            color={'#fff'}
            style={styles.capture}
            onPress={this.takePicture.bind(this)}
            />
          
          <Icon
            name='md-reverse-camera'
            size={30}
            color={'#fff'}
            style={styles.cameraType}
            onPress={this.cameraTypeHandler}
             />
        </View>
        </View>
       
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    padding:10,
    alignItems: 'center',
    margin: 20,
  },
  cameraType: {
    flex: 0,
    padding:10,
    alignItems: 'center',
    margin: 25
  }
});
export default Camera;