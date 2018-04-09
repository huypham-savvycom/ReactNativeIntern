import React from "react";
import { View, StyleSheet, TextInput, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

const TextInputs = ({ text, ...props }) => {
  return (
    <TextInput
      {...props}
      style={styles.textInputStyle}
      autoCorrect={false}
      placeholder={text}
      placeholderTextColor="#FFFFFF90"
      selectionColor="#FFFFFF"
    />
  );
};

const styles = StyleSheet.create({
  textInputStyle: {
    borderBottomWidth: 1,
    borderBottomColor: "#FFFFFF50",
    color: "#FFFFFF",
    paddingBottom: 6,
    width: width * 328 / 374,
    alignSelf: "center",
    fontSize: 15,
  },
});

export default TextInputs;
