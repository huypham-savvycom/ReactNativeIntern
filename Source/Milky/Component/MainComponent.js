import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Animated,
  Easing,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import HeaderComponent from "./HeaderComponent";
import { mainComponentStyle } from "./Style";
import {} from "react-navigation";
export default class MainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(0.4),
      marginAnim: new Animated.Value(400)
    };
  }
  componentDidMount() {
    Animated.timing(this.state.marginAnim, {
      toValue: 0,
      duration: 500,
      easing: Easing.bounce
    }).start();
    const ani1 = Animated.timing(this.state.fadeAnim, {
      toValue: 1,
      duration: 700
    });
    const ani2 = Animated.timing(this.state.fadeAnim, {
      toValue: 0.4,
      duration: 700
    });
    const sequen = Animated.sequence([ani1, ani2]);
    Animated.loop(sequen).start();
  }
  infoWater = () => {
    alert("Đây là thông tin nguồn nước");
  };
  infoTree = () => {
    alert("Đây là thông tin cây");
  };
  watering = () => {
    this.props.navigation.navigate("Watering");
  };
  static navigationOptions = {
    drawerLabel: "Trang chính",
    drawerIcon: () => {
      // <Icon name="home" size={30} color="black" />
      return (
        <Image
          source={require("../image/main.png")}
          style={{ width: 30, height: 30, tintColor: "black" }}
        />
      );
    }
  };
  render() {
    return (
      <ScrollView style={{ flex: 1, width: "100%" }}>
        <HeaderComponent {...this.props} title="Trang chính" />
        <Animated.View
          style={[
            mainComponentStyle.container,
            { marginLeft: this.state.marginAnim }
          ]}
        >
          <View style={mainComponentStyle.top}>
            <View style={mainComponentStyle.top1}>
              <Text>Thông tin cây</Text>
              <TouchableOpacity
                style={mainComponentStyle.top1Circle}
                onPress={this.infoTree}
              >
                <Image
                  source={require("../image/tree.png")}
                  style={{ tintColor: "white", width: 40, height: 40 }}
                />
              </TouchableOpacity>
            </View>
            <View style={mainComponentStyle.top2}>
              <Text>Thông tin nguồn nước</Text>
              <TouchableOpacity
                style={mainComponentStyle.top2Circle}
                onPress={this.infoTree}
              >
                <Image
                  source={require("../image/water.png")}
                  style={{ tintColor: "white", width: 33, height: 48 }}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={mainComponentStyle.mid}>
            <View style={mainComponentStyle.midCircle}>
              <Text style={mainComponentStyle.midText}>3</Text>
              <Text style={mainComponentStyle.midText}>Cây cần tưới</Text>
              <Image
                source={require("../image/leaves.png")}
                style={{ width: 110, height: 120, tintColor: "white" }}
              />
            </View>
          </View>
          <View style={mainComponentStyle.bot}>
            <Animated.View
              style={[
                mainComponentStyle.botCircle,
                { opacity: this.state.fadeAnim }
              ]}
            >
              <TouchableOpacity onPress={this.watering}>
                <Image
                  source={require("../image/watering.png")}
                  style={{
                    tintColor: "white",
                    width: 50,
                    height: 36
                  }}
                />
              </TouchableOpacity>
            </Animated.View>
            <Text>Tiến hành tưới cây</Text>
          </View>
        </Animated.View>
      </ScrollView>
    );
  }
}
