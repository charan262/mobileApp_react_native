import React from 'react';
import { StyleSheet, Text } from 'react-native';
import Colors from '../constants/Colors';
import Strings from '../constants/Strings';

export const SubHeaderText = (props) => (
    <Text style={styles.textStyle}>{props.text}</Text>
)

const styles = StyleSheet.create({
    textStyle: {
        color: Colors.tintColor,
        fontSize: Strings.textFontSize,
        fontFamily: Strings.subHeaderFontFamily,
        paddingLeft: 16,
        paddingTop: 4,
        alignSelf: 'auto'
    }
})