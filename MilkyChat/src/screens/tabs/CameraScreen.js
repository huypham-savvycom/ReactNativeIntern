import React, { Component } from 'react';
import {
    View, Text, StyleSheet, Image
} from 'react-native';

export default class CameraScreen extends Component {
static navigationOptions = {
    tabBarIcon: ({ tintColor, focused }) => {
      return (
        <Image
          source={focused 
                    ? require("../../assets/icons/iconCameraFocused.png") 
                    : require("../../assets/icons/iconCamera.png")}
        />
      );
    },
  };
    render() {
        return (
            <View style={styles.container}>
                <Text>This is Camera Screen</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})