import React, { Component } from "react";
import { View, StyleSheet, TextInput, Dimensions, Text } from "react-native";
import FlipToggle from "react-native-flip-toggle-button";
// import Switch from 'react-native-customisable-switch';

const { height, width } = Dimensions.get("window");

export default class TextInputs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActivate: false,
    };
  }

  render() {
      const { text, ...props } = this.props;
    return (
      <View style={styles.flipToggleStyle}>
        <View style={{ paddingTop: 10 }}>
          <Text style={styles.textStyle}>{text}</Text>
        </View>
        <View>
          <FlipToggle
            value={this.state.isActivate}
            buttonWidth={51}
            buttonHeight={31}
            buttonRadius={40}
            sliderWidth={28}
            sliderHeight={28}
            sliderRadius={60}
            buttonOnColor="#FFFFFF"
            buttonOffColor="#FFFFFF"
            sliderOnColor="#89C9C5"
            sliderOffColor="#89C9C5"
            onToggle={newState => {
              this.setState({ isActivate: newState });
              console.log(`toggle is ${this.state.isActivate ? `on` : `off`}`);
            }}
            onToggleLongPress={() => console.log("toggle long pressed!")}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flipToggleStyle: {
    borderBottomWidth: 1,
    borderBottomColor: "#FFFFFF50",
    paddingBottom: 2.5,
    width: width * 328 / 374,
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textStyle: {
    fontSize: 15,
    color: "#FFFFFF",
  },
});
