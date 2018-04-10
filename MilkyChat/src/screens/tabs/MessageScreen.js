import React, { Component } from 'react';
import {
    View, Text, StyleSheet, Image
} from 'react-native';

export default class MessageScreen extends Component {
static navigationOptions = {
    tabBarIcon: ({ tintColor, focused }) => {
      return (
        <Image
          source={focused 
                    ? require("../../assets/icons/iconChatFocused.png") 
                    : require("../../assets/icons/iconChat.png")}
        />
      );
    },
  };
    render() {
        return (
            <View style={styles.container}>
                <Text>This is Message Screen</Text>
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