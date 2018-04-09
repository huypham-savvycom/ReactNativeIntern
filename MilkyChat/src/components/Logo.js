import React, { Component } from "react";
import { View, Image, StyleSheet, Dimensions } from "react-native";

const { h, w } = Dimensions.get('window');

export default class Logo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.iconUserStyle}>        
        <Image
          source={require("../assets/images/iconUser.png")}
        />
        </View>        
        <View style={styles.logoUserStyle}>
        <Image
          source={require("../assets/images/logoUser.png")}
        />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-end",
    // backgroundColor: "gray",
    justifyContent:'center',
    // paddingTop: 95*h,
    alignSelf: 'center', 
  },
  iconUserStyle: {
    //   backgroundColor: '#88C578',
      marginBottom: 8
  },
  logoUserStyle: {
    paddingLeft: 13,
    // backgroundColor: '#36B9C2'
  }
});
