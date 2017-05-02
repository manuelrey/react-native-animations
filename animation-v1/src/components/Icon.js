import React, { Component } from 'react';
import { View, Animated, Image, Easing } from 'react-native';

const timing = 2500

class Icon extends Component {
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
    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    })

    return (
      <View>
        <Animated.Image
            style={{ width: 113, height: 100, transform: [{rotate: spin}] }}
            source={require('../images/logo.png')}
        />
      </View>
    );
  }
}

export default Icon;
