import React, { Component } from 'react';
import { View, Image } from 'react-native';

class Icon2 extends Component {
  render() {
    return (
      <View>
        <Image
          source={require('../images/logo.png')}
        />
      </View>
    );
  }
}

export default Icon2;
