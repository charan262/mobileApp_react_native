import React from 'react';
import { Text, View, TouchableHighlight, Platform } from 'react-native';
import TabBarIcon from './TabBarIcon';

export default class HeaderNavigator extends React.Component {
    render() {
        return(
            <View style={{
                height: 70,
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center'
            }}>
                <TouchableHighlight style={{ marginLeft: 15, marginTop: 10 }}
                    onPress={() => this.props.navigation.toggleDrawer()}>
                    <TabBarIcon
                        name={
                            Platform.OS === 'ios'
                              ? 'ios-menu'
                              : 'md-menu'
                          }
                        focused = {true}
                    />
                </TouchableHighlight>
            </View>
        )
    }
}