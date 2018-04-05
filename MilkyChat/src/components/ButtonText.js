import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const ButtonText = ({text, ...props}) => {
    return(
        <TouchableOpacity {...props}>
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
        fontSize: 15,
        fontWeight: '600'
    }
})

export default ButtonText;