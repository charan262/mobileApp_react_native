import React from 'react';
import { View, Text, Platform, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const BackButton = (props) => {
   return(
        <Icon
            name='md-arrow-round-back'
            size={30}
            color={props.color}
            onPress={props.onPress}
            style={{ marginStart:10, marginTop: 40 }}
            />
          
   )
}

const styles = {
    buttonStyles: {
        // height: 60,
        // justifyContent: 'flex-start',
        // backgroundColor: Colors.tintColor,
        borderRadius:4,
        borderWidth: 2,
        // borderColor: Colors.tabIconDefault,
        zIndex: 10,
    }
}

export { BackButton }
