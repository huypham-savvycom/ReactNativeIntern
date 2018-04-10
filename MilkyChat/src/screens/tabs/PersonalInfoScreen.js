import React, { Component } from 'react';
import {
    View, Text, StyleSheet, Image
} from 'react-native';

export default class HomeScreen extends Component {
static navigationOptions = {
    tabBarIcon: ({ tintColor, focused }) => {
      return (
        <Image
          source={focused 
                    ? require("../../assets/icons/iconUserFocused.png") 
                    : require("../../assets/icons/iconUser.png")}
        />
      );
    },
  };
    render() {
        return (
            <View style={styles.container}>
                <Text>This is Home Screen</Text>
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