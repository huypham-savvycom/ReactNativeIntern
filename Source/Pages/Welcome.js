
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import Logo from '../Component/Logo';

export default class Welcome extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.vWelcome}>
            <Text style={styles.welcome}>
                Welcome to
            </Text>
        </View>
        <View style={styles.vlogo}>
            <Logo />
        </View>
        <View style={styles.vStart}>
            <TouchableOpacity style={styles.btn}>
                <Text style={[styles.welcome, {color: 'rgb(133, 201, 197)'}]}>
                    GET STARTED
                </Text>
            </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgb(133, 201, 197)',
  },
  vWelcome:{
    flex: 3,
    width: '99%',
    justifyContent: 'center',
  },
  welcome: {
    fontSize: 26,
    textAlign: 'center',
    color: 'white',
  },
  vlogo:{
    flex: 4,
    paddingTop: 10,
  },
  vStart:{
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
    width: '99%'
  },
  btn:{
      width: '60%',
      height: 46,
      borderRadius: 42,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
  }
});
