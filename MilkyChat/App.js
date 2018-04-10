/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Login from './src/screens/Login';
import SignUp from './src/screens/SignUp';
import Welcome from './src/screens/Welcome';
import Home from './src/screens/Home';

import {
  LoginScreen, SignUpScreen, WelcomeScreen, HomeScreen
} from './Screens';

const App = StackNavigator({    
    LoginScreen: {
        screen: Login,
        navigationOptions: {
          header: null
        }
    },
    SignUpScreen: {
        screen: SignUp,
        navigationOptions: {
          header: null
        }
    },
    HomeScreen: {
        screen: Home,
        navigationOptions: {
          header: null
        }
    },
},{
  mode: 'modal'
});

export default App;