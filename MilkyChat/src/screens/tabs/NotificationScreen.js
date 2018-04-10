import React, { Component } from 'react';
import {
    View, Text, StyleSheet, Image
} from 'react-native';

export default class NotificationScreen extends Component {
static navigationOptions = {
    tabBarIcon: ({ tintColor, focused }) => {
      return (
        <Image
          source={focused 
                    ? require("../../assets/icons/iconBellFocused.png") 
                    : require("../../assets/icons/iconBell.png")}
        />
      );
    },
  };
    render() {
        return (
            <View style={styles.container}>
                <Text>This is Notification Screen</Text>
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