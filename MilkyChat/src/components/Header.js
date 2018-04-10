import React from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import * as g from "../../Constants";

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <View style={styles.leftIconView}>
          <TouchableOpacity>
            <Image source={require("../assets/icons/iconLeftMenu.png")} style={{marginTop: 10, marginRight: 15}}/>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require("../assets/icons/avt.png")} style={{backgroundColor: '#FFFFFF', borderRadius: 15}}/>
          </TouchableOpacity>
        </View>
        <View style={styles.logoView}>
          <Image
            source={require("../assets/images/logoUser.png")}
            style={{ height: 25, width: 125 }}
          />
        </View>
        <View style={styles.rightIconView}>
          <TouchableOpacity>
            <Image source={require("../assets/icons/iconFeedback.png")} style={{marginRight: 14}}/>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require("../assets/icons/iconSearch.png")} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: g.height * 64,
    width: g.fullWidth,
    backgroundColor: "#89C9C5",
    justifyContent: "center",
  },
  headerView: {
    paddingTop: 20 * g.height,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  logoView: {
    alignSelf: "center",
  },
  leftIconView: {
    alignSelf: "flex-start",
    flexDirection: "row",
    paddingLeft: 13
  },
  rightIconView: {
      flexDirection: 'row',
      paddingRight: 13,
      paddingTop: 4
  }
});

export default Header;
