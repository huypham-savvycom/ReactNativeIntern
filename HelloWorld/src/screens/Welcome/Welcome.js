import React, { PureComponent } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { styles } from './style';
import { STRING } from '../../ultils/constants/string';

export default class Welcome extends PureComponent {

    navigateToLogin = () => {
        this.props.navigation.navigate('Login');
    }
    render() {
        return (
            <View style={styles.container} >
                <View style={styles.welcome_layout}>
                    <Text style={{ color: '#fff', fontSize: 26 }}>Welcome to</Text>
                </View>
                <View style={{ flex: 4.8 }}>
                    <Image
                        source={require('../../ultils/images/iconUser.png')}
                        style={styles.logo}
                    />
                    <Text style={styles.text}>{STRING.App}</Text>
                </View>
                <View style={styles.button_layout}>
                    <TouchableOpacity style={styles.button_login} onPress={this.navigateToLogin}>
                        <Text style={styles.text_login}>GET STARTED</Text>
                    </TouchableOpacity>
                </ View>
            </ View >
        );
    }
}
