import React, { Component } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
} from "react-native";
import { Stacknavigation } from "react-navigation";
import Icon from "react-native-vector-icons/FontAwesome";
const color = {
    soCayCanTuoi: 'red',
    soCayDaTuoi: 'green',
    soCayChet: 'blue',
};
const widthCay = 50;
const heightCay = 130;
export default class Statist extends Component {
    state = {
        soCayCanTuoi:{height: 0.7},
        soCayDaTuoi: {height: 1.3},
        soCayChet: {height: 0.4}
    }
  render() {
    return (
      <ScrollView style={{ flex: 1, width: "100%" }}>
        <ScrollView style={styles.vStatis} horizontal={true}>
            <View style={[styles.vCayCanTuoi]}>
            </View>
            <View style={styles.vCayDaTuoi}>
            </View>
            <View style={styles.vCayChet}>
            </View>
            <View style={styles.vCayChet}>
            </View>
            <View style={styles.vCayChet}>
            </View>
            <View style={styles.vCayChet}>
            </View>
        </ScrollView>
        <ScrollView style={styles.vStatis} horizontal={true}>
            <View style={styles.vCayCanTuoi}>
            </View>
            <View style={styles.vCayDaTuoi}>
            </View>
            <View style={styles.vCayChet}>
            </View>
            <View style={styles.vCayChet}>
            </View>
            <View style={styles.vCayChet}>
            </View>
            <View style={styles.vCayChet}>
            </View>
        </ScrollView>
        <ScrollView style={styles.vStatis} horizontal={true}>
            <View style={styles.vCayCanTuoi}>
            </View>
            <View style={styles.vCayDaTuoi}>
            </View>
            <View style={styles.vCayChet}>
            </View>
            <View style={styles.vCayChet}>
            </View>
            <View style={styles.vCayChet}>
            </View>
            <View style={styles.vCayChet}>
            </View>
        </ScrollView>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    width: "100%",
  },
  vStatis:{
      height: 300,
      backgroundColor: 'rgba(0,0,0,0.2)',
      borderBottomColor: 'black',
      borderBottomWidth: 1,
      borderLeftWidth: 1,
      borderLeftColor: 'black',
      borderRightWidth: 1,
      borderRightColor: 'black',
      marginTop: 20,
      flexDirection: 'row',
  },
  vCayChet:{
    backgroundColor: color.soCayChet,
    width: widthCay,
    height: heightCay*0.8,
    marginLeft: 20,
    marginTop: 300 - heightCay*0.8,
  },
  vCayCanTuoi:{
    backgroundColor: color.soCayCanTuoi,
    width: widthCay,
    height: heightCay*1.3,
    marginLeft: 15,
    marginTop: 300 - heightCay*1.3,
  },
  vCayDaTuoi:{
    backgroundColor: color.soCayDaTuoi,
    width: widthCay,
    height: heightCay*1.8,
    marginLeft: 15,
    marginTop: 300 - heightCay*1.8,
  }
});
