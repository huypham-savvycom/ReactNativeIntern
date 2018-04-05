import React, { } from 'react';
import { View, Text, StatusBar } from 'react-native';
import { color } from '../ultils/constants/color';

const Header = ({ title, leftButton, rightButton }) => {
    console.log();
    return (
        <View style={{ flexDirection: 'row', height: 64 - (StatusBar.currentHeight), backgroundColor: color.paleTeal }}>
            <StatusBar
                backgroundColor={color.paleTeal}
                barStyle="light-content"
            />
            <View style={{ paddingLeft: 5 }}>
                {leftButton}
            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 20, color: '#fff', fontFamily: 'HelveticaNeue Medium', fontWeight: 'bold' }}>{title}</Text>
            </View>
            <View style={{ paddingRight: 5 }}>
                {rightButton}
            </View>

        </View>
    );
};
export { Header };

