import React, { Component } from 'react';
import { View, Animated } from 'react-native';

export default class StickyTabs extends Component {

  componentWillMount() {
    this.offset = new Animated.Value(0)
  }

  render() {
    const height = this.props.headerHeight
    const header = this.props.headerComponent
    const content = React.cloneElement(this.props.contentComponent, {
      screenProps: {
        headerHeight: height,
        scrollY: this.offset,
      },
    })
    let translateY = Animated.diffClamp(this.offset,0,86)
                      .interpolate({
                        inputRange: [0, height],
                        outputRange: [0, -height],
                      })
    return (
      <View style={{flex: 1}}>
        <Animated.View
          style={{
            width: '100%',
            height: height,
            position: "absolute",
            top: 0,
            overflow: "hidden",
            transform: [{ translateY }],
          }}
        >
          {header}
        </Animated.View>
        <Animated.View
          style={[
            {
              flex: 1,
              marginTop: height,
              marginBottom: -height,
            },
            { transform: [{ translateY }] },
          ]}
        >
          {content}
        </Animated.View>
      </View>
    )
  }

}