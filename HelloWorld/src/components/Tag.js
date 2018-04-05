import React, { PureComponent } from 'react';
import { View, Text, Image, Dimensions, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { color } from '../ultils/constants/color';

const { width, height } = Dimensions.get('window');

class Tag extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isLike: false
        };
    }

    render() {
        const { isLike } = this.state;
        const { status } = this.props;
        return (
            <View style={{ width, height: width + (height * 0.3), alignItems: 'center', backgroundColor: '#fff' }} >
                <View style={{ width: '90%', height: height * 0.05, flexDirection: 'row', margin: width * 0.05 }}>
                    <Image source={require('../ultils/images/avatar1.png')} />
                    <View style={{ flex: 1, flexDirection: 'column', marginLeft: 5 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 19 }}>KatieSmith</Text>
                        <Text style={{ color: 'gray', fontSize: 13 }}>Yesterday • 5:20 PM</Text>
                    </View>
                    <View style={{ justifyContent: 'flex-start' }}>
                        <Image source={require('../ultils/images/avatar.png')} />
                    </View>
                </View>
                <Image source={require('../ultils/images/image.png')} style={{ width, height: width }} />
                <View style={{ width: '90%', height: height * 0.05, flexDirection: 'row', margin: width * 0.05 }}>
                    <Text style={{ fontSize: 15, fontFamily: 'HelveticaNeue Light' }}>{status}</Text>
                </View>
                <View style={{ width: '90%', height: height * 0.05, flexDirection: 'row', margin: width * 0.05, alignItems: 'center', borderTopWidth: 1, borderTopColor: 'rgb(236,236,236)' }}>
                    <Icon name='ios-eye-outline' size={30} style={{ margin: 5 }} />
                    <Text>410</Text>
                    <TouchableOpacity onPress={() => this.setState({ isLike: !isLike })}>
                        <Icon style={{ marginLeft: width * 0.1, marginRight: 5 }} name={isLike ? 'ios-heart' : 'ios-heart-outline'} color={isLike ? 'red' : 'gray'} size={30} />
                    </TouchableOpacity>
                    <Text>{isLike ? 38 : 37}</Text>
                    <Icon name='ios-chatbubbles-outline' size={30} style={{ marginLeft: width * 0.1, marginRight: 5 }} />
                    <Text>19</Text>
                    <View style={{ justifyContent: 'flex-end', flexDirection: 'row', flex: 1 }}>
                        <Image source={require('../ultils/images/avatar.png')} style={{ margin: 5 }} />
                        <Image source={require('../ultils/images/avatar.png')} style={{ margin: 5 }} />
                        <View style={{ height: 24, width: 24, borderRadius: 12, backgroundColor: '#fff', margin: 5, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: color.paleTeal }}>
                            <Image source={require('../ultils/images/avatar.png')} style={{ position: 'absolute', zIndex: -1, opacity: 0.2 }} />
                            <Text style={{ color: color.paleTeal }}>3+</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

export { Tag };
