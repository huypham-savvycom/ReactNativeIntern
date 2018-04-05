import React, { PureComponent } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from './style';
import { STRING } from '../../ultils/constants/string';
import { color } from '../../ultils/constants/color';

export default class User extends PureComponent {
    static navigationOptions = {
        tabBarIcon: ({ focused }) => (
            <Icon name={focused ? 'ios-person' : 'ios-person-outline'} size={25} color={color.paleTeal} />
        ),
        header: null,
    };
    render() {
        return (
            <View style={styles.container} >

            </ View >
        );
    }
}
