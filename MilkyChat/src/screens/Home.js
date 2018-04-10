import React, { Component } from 'react';
import {
    View, Text, StyleSheet
} from 'react-native';
import { TabNavigator } from 'react-navigation';
import HomeScreen from './tabs/HomeScreen';
import MessageScreen from './tabs/MessageScreen';
import CameraScreen from './tabs/CameraScreen';
import NotificationScreen from './tabs/NotificationScreen';
import PersonalInfoScreen from './tabs/PersonalInfoScreen';
import Header from '../components/Header';

export default class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Header/>
                <MainNavigator>
                    <Text>This is the main screen</Text>
                </MainNavigator>
            </View>
        );
    }
}

const MainNavigator = TabNavigator({
    Home: {
        screen: HomeScreen
    },
    Message: {
        screen: MessageScreen
    },
    Camera: {
        screen: CameraScreen
    },
    Notification: {
        screen: NotificationScreen
    },
    PersonalInfo: {
        screen: PersonalInfoScreen
    }
},
{
    swipeEnabled: true,
    animationEnabled: true,
    tabBarPosition: 'bottom',
    tabBarOptions: {
        showLabel: false,
        showIcon: true,
    },
})

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})