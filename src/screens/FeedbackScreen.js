import React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    openURL,
    Linking,
    TextInput,
    Dimensions
} from 'react-native';

import HeaderNavigator from '../components/HeaderNavigator';
import Colors from '../constants/Colors';
import { ImgButton } from '../components/Button';
import Strings from '../constants/Strings';

export default class FeedbackScreen extends React.Component {
    state = {
        btnEnable1: false,
        btnEnable2: false
    }

    onBtnClick1 = () => {
        this.setState({ btnEnable1: !this.state.btnEnable1, btnEnable2: false })
    }

    onBtnClick2 = () => {
        this.setState({ btnEnable2: !this.state.btnEnable2, btnEnable1: false })
    }
    render() {
        const { width, height } = Dimensions.get('window');
        return (
            <View style={styles.container}>
                <View style={{ flexDirection: 'column' }}>
                <Text style={{padding: 14, color: Colors.tintColor, fontFamily: Strings.textFontFamily, fontSize: 20 }}>What do you think of my App?</Text>
                <View style={styles.contentContainer}>
                    <ImgButton
                        buttonImage={true}
                        btnStyle={styles.buttonStyle(this.state.btnEnable1)}
                        btnTextStyle={this.state.btnEnable1 ? { color: Colors.whiteColor}:{color: Colors.tintColor}}
                        focused={!this.state.btnEnable1}
                        name={Platform.OS === 'ios' ? 'ios-heart' : 'md-heart'}
                        buttonName='Like'
                        onPress={this.onBtnClick1} 
                    />
                    <ImgButton
                        buttonImage={true}
                        btnStyle={styles.buttonStyle(this.state.btnEnable2)}
                        btnTextStyle={this.state.btnEnable2 ? { color: Colors.whiteColor}:{color: Colors.tintColor}}
                        focused={!this.state.btnEnable2}
                        name={Platform.OS === 'ios' ? 'ios-heart-dislike' : 'md-heart-dislike'}
                        buttonName='Dislike'
                        onPress={this.onBtnClick2} 
                    />
                </View>
                <View style={{ marginLeft: width/16, marginTop: 20 }}>
                    <TextInput
                        multiline = {true}
                        numberOfLines = {4}
                        textAlignVertical = 'top'
                        style={styles.textInputStyle}
                        placeholder='Type feedback...'
                        returnKeyType = "done"
                    />
                </View >
                <View style={{ marginLeft: width*0.23, marginTop: 20 }}>
                    <ImgButton
                        buttonName='SUBMIT'
                     />
                </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.whiteColor,
    },
    contentContainer: {
        alignSelf: 'center',
        flexDirection: 'row',
    },
    buttonStyle: (btnColor) => ({
        height: 100,
        width: Dimensions.get('window').width/2.2,
        backgroundColor: btnColor ? Colors.tintColor : null, 
        marginLeft: 8
    }),
    versionStyle: {
        color: Colors.tintColor,
        paddingTop: 4,
        fontSize: Strings.textFontSize,
        fontFamily: Strings.textFontFamily
    },
    textInputStyle: {
        height: 100,
        width: Dimensions.get('window').width/1.12,
        borderWidth: 1,
        borderColor: Colors.tabIconDefault,        
    }
});
