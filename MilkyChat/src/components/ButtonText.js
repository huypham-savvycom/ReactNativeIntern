import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const ButtonText = ({text}) => {
    return(
        <TouchableOpacity>
            <View style={styles.container}>
                <Text style={styles.textStyle}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',

    },
    textStyle: {
        color: '#FFFFFF',
        fontSize: 15
    }
})

export default ButtonText;