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

export default class FindWaterComponent extends Component {
  static navigationOptions = {
    drawerLabel: "Tìm nguồn nước",
    drawerIcon: () => {
      // <Icon name="home" size={30} color="black" />
      return (
        <Image
          source={require("../image/water.png")}
          style={{ paddingLeft: 6,width: 24, height: 35, tintColor: "black" }}
        />
      );
    }
  };
  render() {
    return (
      <View style={{ flex: 1, width: "100%" }}>
        <HeaderComponent {...this.props} title="Nguồn nước" />
        <View style={styles.container}>
          <Text>Tìm nguồn nước</Text>
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
