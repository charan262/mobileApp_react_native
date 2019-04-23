import React from 'react';
import { View, Text, Platform, TouchableOpacity } from 'react-native';
import Colors from '../constants/Colors';
import TabBarIcon from './TabBarIcon';

const ImgButton = (props) => {
    return (
        <TouchableOpacity style={props.style ? {...styles.buttonStyles, ...props.style} : styles.buttonStyles} onPress={props.onPress}>
                {props.buttonImage ? <TabBarIcon name={props.name} /> : null}
                <Text style={styles.buttonTextStyle}>{props.buttonName}</Text>
        </TouchableOpacity>
    )
}
const styles = {
    buttonStyles: {
        height: 60,
        width: 200,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: Colors.tintColor,
        borderRadius:4,
        borderWidth: 2,
        borderColor: Colors.tabIconDefault,
    },
    buttonTextStyle: {
        color: Colors.whiteColor, 
        fontSize: 16, 
        fontWeight: 'bold',
        padding: 10
    }
}
export { ImgButton };