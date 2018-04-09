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

export default class SettingComponent extends Component {
  static navigationOptions = {
    drawerLabel: "Cài đặt",
    drawerIcon: () => {
      // <Icon name="home" size={30} color="black" />
      return (
        <Image
          source={require("../image/settings.png")}
          style={{ paddingLeft: 6,width: 30, height: 30, tintColor: "black" }}
        />
      );
    }
  };
  render() {
    return (
      <View style={{ flex: 1, width: "100%" }}>
        <HeaderComponent {...this.props} title="Nguồn nước" />
        <View style={styles.container}>
          <Text>Cài đặt</Text>
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
