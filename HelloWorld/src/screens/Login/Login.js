import React, { PureComponent } from 'react';
import { View, Image, Text, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import { color } from '../../ultils/constants/color';
import { styles } from './style';
import { CustomTextInput } from '../../components';
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
                    <CustomTextInput label='Email' />
                    <CustomTextInput label='Password' type='password' />
                    <View style={styles.button_layout}>
                        <TouchableOpacity style={styles.button_login}>
                            <Text style={styles.text_login}>LOGIN</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.sign_up_button}>
                        <Text style={styles.sign_up_text}>Sign-up</Text>
                    </TouchableOpacity>
                </ View>
                <View style={{ flex: 1.65 }}></View>
            </ View >
        );
    }
}


