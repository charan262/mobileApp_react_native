import React from 'react';
import { StyleSheet, Text } from 'react-native';
import Colors from '../constants/Colors';
import Strings from '../constants/Strings';

export const NormalText = (props) => (
    <Text style={styles.textStyle}>{props.text}</Text>
)

const styles = StyleSheet.create({
    textStyle: {
        color: Colors.grayColor,
        fontSize: Strings.textFontSize,
        fontFamily: Strings.textFontFamily,
        padding:2
    }
})