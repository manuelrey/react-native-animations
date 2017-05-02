import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from './src/components/Icon';
import Icon2 from './src/components/Icon2';
import TextAnimated from './src/components/TextAnimated';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Icon />
          <Text style={styles.title}>React Native</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  logoContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: 'white',
    marginTop: 50,
    fontSize: 30
  }
});

Expo.registerRootComponent(App);
