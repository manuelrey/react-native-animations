import React, { Component } from 'react';
import { View, Animated, Image, Easing } from 'react-native';

const timing = 3000

class TextAnimated extends Component {
  constructor () {
    super()
    this.spinValue = new Animated.Value(0)
  }

  componentDidMount () {
    this.spin()
  }
  spin () {
    this.spinValue.setValue(0)
    Animated.timing(
      this.spinValue,
      {
        toValue: 1,
        duration: timing,
        easing: Easing.linear
      }
    ).start(() => this.spin())
  }

  render() {
    const textSize = this.spinValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [20, 30, 20]
    })

    return (
      <View>

        <Animated.Text
        style={{
          fontSize: textSize,
          marginTop: 20,
          color: 'deepskyblue'}} >
          It's Awesome!
      </Animated.Text>
      </View>
    );
  }
}

export default TextAnimated;
