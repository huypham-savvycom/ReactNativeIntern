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

var d = new Date();
var dd = d.getDate();
if (dd < 10) {
  dd = `0` + dd;
}
var mm = d.getMonth() + 1;
var yy = d.getFullYear();
var weekday = new Array(7);
weekday[0] = "Chủ nhật";
weekday[1] = "Thứ 2";
weekday[2] = "Thứ 3";
weekday[3] = "Thứ 4";
weekday[4] = "Thứ 5";
weekday[5] = "Thứ 6";
weekday[6] = "Thứ 7";
var dayOfWeek = weekday[d.getDay()];
var days = dayOfWeek + ", ngày " + dd + " tháng " + mm + ", " + yy;
export default class HeaderComponent extends Component {
  onPress = () => {
    let { navigate } = this.props.navigation;
    navigate("DrawerOpen");
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: "row", width: "100%" }}>
          <TouchableHighlight style={{ width: 40 }} onPress={this.onPress}>
            <Icon name="bars" size={28} color="white" />
          </TouchableHighlight>
          <Text style={styles.title}>{this.props.title}</Text>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "flex-end"
            }}
          >
            <Icon name="ellipsis-v" size={26} color="white" />
          </View>
        </View>
        <View style={{ marginLeft: 47 }}>
          <Text style={{ color: "white", marginTop: 20 }}>{days}</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: "#00C99D",
    width: "100%",
    height: 100,
    shadowColor: "red",
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.8
  },
  title: {
    fontWeight: "bold",
    marginLeft: 7,
    color: "white",
    fontSize: 16,
    textAlignVertical: "center"
  }
});
