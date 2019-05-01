import React from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import { AvatarImg } from '../../components/Avatar';
import Colors from '../../constants/Colors';
import Strings from '../../constants/Strings';

export default class Header extends React.Component {
    render() {
        return (
            <View style={styles.imageContainer}>
                <AvatarImg rounded={true} source={require('../../constants/assets/charan.jpg')} />
                <Text style={styles.textStyle}>Charan Maddi</Text>
                <Text style={styles.textStyle}>Software Engineer</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
        backgroundColor: 'rgba(95,158,160,1)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
        left: 0,
        right: 0,
    },
    textStyle: {
        color: Colors.whiteColor,
        fontFamily: Strings.textFontFamily,
        fontSize: 16
    }
});
