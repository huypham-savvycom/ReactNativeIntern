import React, { Component } from "react";
import {
  ScrollView,
  View,
  Dimensions,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text
} from "react-native";
import { DrawerNavigator, DrawerItems, SafeAreaView } from "react-navigation";
import {
  MainScreen,
  WorkHistory,
  Watering,
  Statistic,
  FindWater,
  InfoAccount,
  Setting
} from "./Main/ScreenName";
import MainComponent from "../Component/MainComponent";
import WorkingHistoryComponent from "../Component/WorkingHistoryComponent";
import WateringComponent from "../Component/WateringComponent";
import StatisticComponent from "../Component/StatisticComponent";
import FindWaterComponent from "../Component/FindWaterComponent";
import InfoAccountComponent from "../Component/InfoAccountComponent";
import SettingComponent from "../Component/SettingComponent";
var { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    height: 220,
    width: "100%",
    backgroundColor: "yellow",
    borderBottomWidth: 1,
    borderBottomColor: "grey"
  },
  icon: {
    width: 50,
    height: 50,
    justifyContent: "center",
    paddingLeft: 5,
    marginLeft: 0,
    marginRight: 0
  }
});
const CustomComponent = props => (
  <ScrollView style={{ flex: 1, width: "100%" }}>
    <View style={styles.container} />
    <SafeAreaView style={{ flex: 1 }}>
      <DrawerItems {...props} />
    </SafeAreaView>
    <TouchableOpacity
      style={{ flexDirection: "row", height: 50, width: "100%" }}
      onPress={() => {
        console.log(props);
      }}
    >
      <View style={styles.icon}>
        <Image
          source={require("../image/log-out.png")}
          style={{ marginLeft: 5, width: 30, height: 30, tintColor: "black" }}
        />
      </View>
      <Text
        style={{
          textAlignVertical: "center",
          height: 50,
          marginLeft: 15,
          fontWeight: "bold",
          color: "black"
        }}
      >
        Đăng xuất
      </Text>
    </TouchableOpacity>
  </ScrollView>
);
let Drawer = DrawerNavigator(
  {
    MainScreen: {
      screen: MainComponent
    },
    WorkHistory: {
      screen: WorkingHistoryComponent
    },
    Watering: {
      screen: WateringComponent
    },
    Statistic: {
      screen: StatisticComponent
    },
    FindWater: {
      screen: FindWaterComponent
    },
    Setting: {
      screen: SettingComponent
    },
    InfoAccount: {
      screen: InfoAccountComponent
    }
  },
  {
    initialRouteName: MainScreen,
    drawerWidth: 250,
    drawerPosition: "left",
    drawerOpenRoute: "DrawerOpen",
    drawerCloseRoute: "DrawerClose",
    drawerToggleRoute: "DrawerToggle",
    contentComponent: CustomComponent,
    contentOptions: {
      activeTintColor: "#00C99D",
      iconContainerStyle: {
        width: 50,
        height: 50,
        justifyContent: "center",
        paddingLeft: 5,
        marginLeft: 0,
        marginRight: 0
      },
      itemsContainerStyle: {
        borderBottomWidth: 1,
        borderBottomColor: "grey",
        marginLeft: 0
      },
    },
  }
);

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      soCayCanTuoi: 3,
      soCayDaTuoi: 0
    };
  }
  render() {
    return <Drawer info={this.state} />;
  }
}
