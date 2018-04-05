import React, { PureComponent } from 'react';
import { View, Image, Text, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from './style';
import { STRING } from '../../ultils/constants/string';
import { color } from '../../ultils/constants/color';
import { Header, Tag } from '../../components';


export default class Timeline extends PureComponent {
    static navigationOptions = {
        tabBarIcon: ({ focused }) => (
            <Icon name={focused ? 'ios-home' : 'ios-home-outline'} size={25} color={color.paleTeal} />
        ),
        header: null,
    };
    renderItem = ({ item, index }) => {
        console.log(item, index);
        return (
            <Tag status='Donec sagittis nibh vel risus vestibulum, quis ornare massa hendrerit.' />
        );
    }
    render() {
        return (
            <View style={styles.container} >
                <Header
                    title='Milk.Chat'
                    leftButton={
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                            <TouchableOpacity><Icon name='ios-menu-outline' color='#fff' size={25} style={{ marginRight: 10 }} /></TouchableOpacity>
                            <TouchableOpacity><Image source={require('../../ultils/images/avatar.png')} /></TouchableOpacity>
                        </View>
                    }
                    rightButton={
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                            <TouchableOpacity><Icon name='ios-chatboxes-outline' color='#fff' size={25} style={{ marginRight: 10 }} /></TouchableOpacity>
                            <TouchableOpacity><Icon name='ios-search-outline' color='#fff' size={25} /></TouchableOpacity>
                        </View>
                    }
                />
                <View style={{ flex: 1 }}>
                    <FlatList
                        data={[1, 2, 3, 4, 5]}
                        renderItem={this.renderItem}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
            </ View >
        );
    }
}
