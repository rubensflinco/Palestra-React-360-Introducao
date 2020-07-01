import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-360';

export default class Hello360 extends React.Component {
  render() {
    return (
      <View style={styles.panel}>
        <Image source={{uri: 'https://i.imgur.com/sBQFtx7.png'}}  style={styles.react}/>
        <Image source={{uri: 'https://i.imgur.com/x0OF8Zj.png'}}  style={styles.rubens}/>
        <Image source={{uri: 'https://i.imgur.com/DgqizJB.png'}}  style={styles.nerdzao}/>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
  },
  nerdzao: {
    marginTop: 20,
    width: 168,
    height: 168,
  },
  rubens: {
    marginTop: 20,
    width: 500,
    height: 204,
  },
  react: {
    marginTop: 20,
    width: 500,
    height: 168,
  },
});

AppRegistry.registerComponent('Hello360', () => Hello360);
