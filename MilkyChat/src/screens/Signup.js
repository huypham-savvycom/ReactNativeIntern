import React, { Component } from 'react';
import {
    View, Text, StyleSheet, Dimensions, TouchableWithoutFeedback,
    Keyboard
} from 'react-native';
import Logo from '../components/Logo';
import TextInputs from '../components/TextInputs';
import ToggleSwitch from '../components/ToggleSwitch';
import Button from '../components/Button';
import ButtonText from '../components/ButtonText';

const { height, width } = Dimensions.get('window');

export default class SignUp extends Component {
    render() {
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    <View style={styles.logoStyle}><Logo/></View>
                    <View style={styles.inputView}>
                        <TextInputs text='First name'/>
                        <TextInputs text='Last name'/>
                        <ToggleSwitch text='Are you an Educator/ a Caregiver?'/>
                        <TextInputs text='Phone number' keyboardType='phone-pad'/>
                        <TextInputs text='Account name'/>
                        <TextInputs text='Password' secureTextEntry={true}/>
                    </View>
                    <View style={styles.buttonView}>
                        <Button text='SIGN UP'/>
                        <ButtonText text='Return to Login' 
                            onPress={() => this.props.navigation.goBack()}/>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#89C9C5'
    },
    logoStyle: {
        paddingTop: height * 60 / 667
    },
    inputView: {
        justifyContent: 'space-between',
        height: height * 300 / 667,
        marginTop: height * 60 / 667,
    },
    buttonView: {
        justifyContent: 'space-between',
        paddingTop: height * 37 / 667,
        height: height * 140 / 667
    }
})