import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class HelloWorld extends Component {
    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.textStyle}>Hello World!</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textStyle: {
        fontSize: 30,
        fontWeight: 'bold'
    }
})