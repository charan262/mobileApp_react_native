import React, { Component } from 'react';
import { View, Animated } from 'react-native';

const StickyTabs=(props)=>{
    const offset = new Animated.Value(0)
    const height = props.headerHeight
    const header = props.headerComponent
    const content = React.cloneElement(props.contentComponent, {
      screenProps: {
        headerHeight: height,
        scrollY: offset,
      },
    })
    let translateY = Animated.diffClamp(offset,0,height)
                      .interpolate({
                        inputRange: [0, height],
                        outputRange: [0, -height],
                      })
                      console.log(translateY)
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
export default StickyTabs