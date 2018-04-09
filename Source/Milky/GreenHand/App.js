import React, { Component } from "react";
import {StyleSheet, View, Text } from 'react-native';
import {StackNavigator} from 'react-navigation';
import Welcome from './Welcome';
import Login from './Login';
import Main from './Main';
// const RootApp = StackNavigator(
//     {
//         Welcome:{
//             screen: Welcome,
//         },
//         Login:{
//             screen: Login,
//         }
//     },
//     {
//         initialRouteName: 'Welcome',
//         headerMode: 'none',
//     },
//   );

  export default class GreenApp extends Component {
      constructor(props) {
          super(props);
          this.state = {
              isWelcome: true,
              isLogin: false,
          }
      }
      setScreen = (welcome, login) => {
          this.setState({
              isWelcome: welcome,
              isLogin: login
          });
      }
      render(){
          return(
            this.state.isWelcome ? 
                <Welcome isActive={this.setScreen}/> : 
                this.state.isLogin ? <Login isActive={this.setScreen}/> : 
                                     <Main isActive={this.state.isLogin}/>
          );
      }
  }