import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity
} from "react-native";
import Logo from "../components/Logo";
import TextInputFloat from "../components/TextInputFloat";
import Button from '../components/Button';
import ButtonText from "../components/ButtonText";
import {SignUpScreen, WelcomeScreen} from '../../Screens';
import SignUp from './SignUp'

const { height, width } = Dimensions.get("window");

export default class Login extends Component {


  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.logoStyle}>
            <Logo />
          </View>
            <TextInputFloat label="Email"/>
            <View style={{paddingTop: 20}}>
                <TextInputFloat 
                  label="Password"
                  secureTextEntry={true} 
                  // onChangeText={(text) => this.setState({emailInput: text})}
                  />
            </View>
            <View style={{paddingTop: 40}}>
              <Button text='LOGIN'/>
            </View>
            <View style={{paddingTop: 40}}>
              <ButtonText text='Sign-up' onPress={() => {this.props.navigation.navigate(SignUpScreen)}}/>
            </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#89C9C5",
  },
  logoStyle: {
    paddingTop: height * 95 / 667,
    paddingBottom: height * 145 / 667
  },
});
