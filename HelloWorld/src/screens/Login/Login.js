import React, { PureComponent } from 'react';
import { View, Image, Text, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import { color } from '../../ultils/constants/color';
import { styles } from './style';
const { height, width } = Dimensions.get('screen');
export default class Login extends PureComponent {
    render() {
        return (
            <View style={styles.container} >
                <View style={styles.image_layout}>
                    <Image
                        source={require('../../ultils/images/iconUser.png')}
                        style={styles.logo}
                    />
                </View>
                <View style={styles.main_layout}>
                    <TextInput
                        placeholder='Email'
                        placeholderTextColor='#fff'
                        underlineColorAndroid='#fff'
                        style={styles.text_input}
                    />
                    <TextInput
                        placeholder='Password'
                        placeholderTextColor='#fff'
                        underlineColorAndroid='#fff'
                        style={styles.text_input}
                    />
                    <View style={styles.button_layout}>
                        <TouchableOpacity style={styles.button_login}>
                            <Text style={styles.text_login}>LOGIN</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.sign_up_button}>
                        <Text style={}>Sign-up</Text>
                    </TouchableOpacity> 
                </ View>
                <View style={{ flex: 1.65 }}></View>
            </ View >
        );
    }
}


