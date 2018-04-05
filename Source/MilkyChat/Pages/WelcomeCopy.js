
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Logo from '../Component/Logo';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class WelcomeCopy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bgNumber: 1,
      uri: ['../image/background1.png',
            '../image/background2.png',
            '../image/background3.png'
          ]
    }
  }
  componentDidMount() {
    this.setBackground();
  }
  setBgNumber(value) {
    clearInterval(this.setBackground);
    this.setState({
      bgNumber: value,
    }, () => {
      this.setBackground();
    });
  }
  setBackground = setInterval(() => {
    this.setBgNumber(this.state.bgNumber + 1);
  }, 4000);
  render() {
    let bgNumber = this.state.bgNumber;
    return (
      <ImageBackground
        style={styles.container}
        source={require(this.state.uri[bgNumber])}>
        <View style={styles.vlogo}>
          <Logo />
        </View>
        <View style={styles.vWelcome}>
          <Text style={styles.text}>
            Follow
          </Text>
          <Text style={styles.text}>
            Your Kid's
          </Text>
          <Text style={styles.text}>
            Journey
          </Text>
        </View>
        <View style={styles.vStart}>
          <View style={styles.vIcons}>

          </View>
          <TouchableOpacity style={styles.btn}>
            <Text style={{ color: 'rgb(133, 201, 197)', fontSize: 20, textAlign: 'center' }}>
              GET STARTED
                </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  vWelcome: {
    flex: 3,
    width: '99%',
    justifyContent: 'center',
    paddingLeft: 24
  },
  welcome: {
    fontSize: 26,
    textAlign: 'center',
    color: 'white',
  },
  text: {
    fontSize: 30,
    color: 'white',
    lineHeight: 30,
  },
  vlogo: {
    flex: 4,
    paddingTop: 20,
  },
  vStart: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
    width: '99%',
  },
  vIcons: {
    flex: 3,
    width: `80%`,
  },
  btn: {
    flex: 7,
    width: '60%',
    height: 42,
    borderRadius: 36,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
