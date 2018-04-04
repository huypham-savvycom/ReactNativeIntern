import React, { PureComponent } from 'react';
import { View, Image, Text, TextInput, TouchableOpacity, Switch } from 'react-native';
import { color } from '../../ultils/constants/color';
import { styles } from './style';
import { CustomTextInput } from '../../components';
export default class Login extends PureComponent {
    state = {
        switchValue: true
    }
    render() {
        const { switchValue } = this.state;
        return (
            <View style={styles.container} >
                <View style={styles.image_layout}>
                    <Image
                        source={require('../../ultils/images/iconUser.png')}
                        style={styles.logo}
                    />
                </View>
                <View style={styles.main_layout}>
                    <CustomTextInput
                        placeholder='John'
                        label='First Name'
                    />
                    <CustomTextInput
                        placeholder='Smith'
                        label='Last Name'
                    />
                    <View style={{ flexDirection: 'row', height: 50 }}>
                        <CustomTextInput
                            placeholder='Are you an Educator/ a Caregiver'
                            label={switchValue ? 'Educator' : 'Caregiver'}
                            style={{ flex: 1 }}
                        />
                        <View style={{ alignSelf: 'center', backgroundColor: '#fff', height: 24, borderRadius: 12, justifyContent: 'center', alignItems: 'center' }}>
                            <Switch
                                onValueChange={(value) => {
                                    this.setState({ switchValue: value })
                                    console.log(value);
                                }}
                                value={switchValue}
                                tintColor={color.paleTeal}
                                onTintColor='#fff'
                                thumbTintColor={switchValue ? color.paleTeal : '#fff'}
                            />
                        </View>
                    </View>
                    <CustomTextInput
                        placeholder='johnsmith@gmail.com'
                        label='Email'
                    />
                    <CustomTextInput
                        placeholder='•••••••••'
                        label='Password'
                    />
                    <View style={styles.button_layout}>
                        <TouchableOpacity style={styles.button_login}>
                            <Text style={styles.text_login}>SIGN UP</Text>
                        </TouchableOpacity>
                    </View>
                </ View>
                <View style={styles.return}>
                    <TouchableOpacity style={styles.sign_up_button}>
                        <Text style={styles.sign_up_text}>Return to Login</Text>
                    </TouchableOpacity></View>
            </ View >
        );
    }
}


