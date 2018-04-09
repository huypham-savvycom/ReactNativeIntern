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

export default class StatisticComponent extends Component {
  static navigationOptions = {
    drawerLabel: "Thống kê",
    drawerIcon: () => {
      // <Icon name="home" size={30} color="black" />
      return (
        <Image
          source={require("../image/graph.png")}
          style={{ width: 30, height: 30, tintColor: "black" }}
        />
      );
    }
  };
  render() {
    return (
      <View style={{ flex: 1, width: "100%" }}>
        <HeaderComponent {...this.props} title="Thống kê" />
        <View style={styles.container}>
          <Text>Thống kê</Text>
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
