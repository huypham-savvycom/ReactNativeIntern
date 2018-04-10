import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default class HomeScreen extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor, focused }) => {
      return (
        <Image
          source={focused 
                    ? require("../../assets/icons/iconHomeFocused.png") 
                    : require("../../assets/icons/iconHome.png")}
        />
      );
    },
  };

    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

  render() {
      const { numberOfLike } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.postView}>
            <View style={styles.infoView}>
                <View style={{flexDirection: 'row'}}>
                    <Image source={require('../../assets/data/avtKatie.png')}/>
                <View style={{paddingLeft: 9}}>
                    <Text style={{fontSize: 16, fontWeight: 'bold'}}>Katie Smith</Text>
                    <View style={{flexDirection:'row'}}>
                    <Text style={{color: '#777777', fontSize: 13}}>Yesterday</Text>
                    <Text style={{color: '#ABB1B1', marginLeft: 5, marginRight: 5}}>•</Text>
                    <Text style={{color: '#777777', fontSize: 13}}>5:20 PM</Text>
                    </View>
                </View>
                </View>
                <View style={{paddingBottom: 10}}>
                    <Image source={require('../../assets/icons/avt.png')}/>
                </View>
            </View>
            <View>
                <Image source={require("../../assets/data/photoKatie.png")}/>
            </View>
            <View style={styles.statusView}>
                <Text style={{fontSize: 15, fontWeight: '200', fontFamily: 'HelveticaNeue'}}>Donec sagittis nibh vel risus vestibulum, quis ornare massa hendrerit.</Text>
            </View>
            <View style={styles.reactView}>
            <View style={{flexDirection: 'row', paddingTop:13, paddingBottom: 13}}>
                <TouchableOpacity style={{paddingRight: 4}}>
                    <Image source={require('../../assets/icons/iconView.png')}/>
                </TouchableOpacity>
                <Text style={{fontFamily: 'HelveticaNeue', fontSize: 14, fontWeight:'200'}}>{'410'}</Text>
                <TouchableOpacity style={{paddingLeft: 35, paddingRight: 4}}>
                    <Image source={require('../../assets/icons/iconHeart.png')}/>
                </TouchableOpacity>
                <Text style={{fontFamily: 'HelveticaNeue', fontSize: 14, fontWeight:'200'}}>{'37'}</Text>
                <TouchableOpacity style={{paddingLeft: 35, paddingRight: 4}}>
                    <Image source={require('../../assets/icons/iconComment.png')}/> 
                </TouchableOpacity>
                <Text style={{fontFamily: 'HelveticaNeue', fontSize: 14, fontWeight:'200'}}>{'19'}</Text>
            </View>
            <View style={{flexDirection: 'row', paddingTop: 13, paddingBottom: 13}}>
                <Image source={require('../../assets/icons/iconAttachment.png')} style={{paddingRight: 10}}/>
                <Text style={{fontFamily: 'HelveticaNeue', fontSize: 14, fontWeight:'200'}}>{'Attachment'}</Text>
            </View>
            </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
    backgroundColor: '#D2D2D2'
  },
  postView: {
      backgroundColor: '#FFFFFF'
  },
  infoView: {
      flexDirection: 'row',
      paddingBottom: 12,
      alignItems: 'center',
      paddingTop: 14,
      paddingLeft: 13,
      paddingRight: 13,
      justifyContent: 'space-between'
  },
  statusView: {
      paddingTop: 10,
      paddingLeft: 13,
      paddingRight: 13,
      paddingBottom: 16
  },
  reactView: {
      borderTopWidth: 1,
      width: 349,
      justifyContent: 'space-between',
      alignSelf: 'center',
      borderColor: '#ECECEC',
      flexDirection: 'row'
  }
});
