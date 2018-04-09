import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableHighlight
} from "react-native";
import { Stacknavigation } from "react-navigation";
import Icon from "react-native-vector-icons/FontAwesome";
import HeaderComponent from "./HeaderComponent";

export default class Watering extends Component {
  static navigationOptions = {
    drawerLabel: "Tưới cây",
    drawerIcon: () => {
      // <Icon name="home" size={30} color="black" />
      return (
        <Image
          source={require("../image/watering.png")}
          style={{ paddingLeft: 6,width: 40, height: 27, tintColor: "black" }}
        />
      );
    }
  };
  render() {
    return (
      <View style={{ flex: 1, width: "100%" }}>
        <HeaderComponent {...this.props} title="Tưới cây" />
        <View style={styles.container}>
          <Text>Tưới cây</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    width: "99%",
    alignItems: "center",
    justifyContent: "center"
  }
});
