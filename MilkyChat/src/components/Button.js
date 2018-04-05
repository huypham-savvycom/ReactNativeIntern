import React, { Component } from "react";
import { TouchableOpacity, View, StyleSheet, Text } from "react-native";

const Button = ({ text }) => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Text style={styles.textStyle}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    height: 50,
    width: 328,
    alignSelf: "center",
    borderRadius: 30,
  },
  textStyle: {
    color: "#89C9C5",
    fontSize: 17,
    fontWeight: "600",
  },
});

export default Button;
