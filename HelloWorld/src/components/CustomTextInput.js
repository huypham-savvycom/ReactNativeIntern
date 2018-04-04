import React, { PureComponent } from 'react';
import { View, Text, TextInput, Animated, Platform, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

class CustomTextInput extends PureComponent {
    state = {
        text: '',
        animation: new Animated.Value(0),
        isForcus: false
    }
    componentDidUpdate() {
        const { isForcus } = this.state;
        console.log(isForcus);
        if (this.state.text === '') {
            Animated.timing(
                this.state.animation,
                {
                    toValue: isForcus ? 1 : 0,
                    duration: 500,
                    useNativeDriver: Platform.OS === 'android'
                }
            ).start();
        }
    }
    render() {
        const { label, type, placeholder, textInputStyle, style } = this.props;
        const { animation, text, isForcus } = this.state;
        const textStyle = {
            position: 'absolute',
            left: 3,
            transform: [{
                translateY: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -height * 0.05],
                })
            }],
            opacity: animation.interpolate({
                inputRange: [0, 0.01, 1],
                outputRange: placeholder === undefined ? [0.8, 0.8, 1] : [0, 0, 1],
            })
        };
        return (
            <View style={[{ height: height * 0.08, justifyContent: 'flex-end' }, style]} >
                <Animated.View style={textStyle}  >
                    <Text style={{ color: '#fff' }}>{label}</Text>
                </Animated.View>
                <TextInput
                    underlineColorAndroid='#fff'
                    placeholder={isForcus ? '' : placeholder}
                    placeholderTextColor='#fff'
                    onChangeText={(text) => this.setState({ text })}
                    onFocus={() => this.setState({ isForcus: true })}
                    onBlur={() => this.setState({ isForcus: false })}
                    value={text}
                    style={[{
                        padding: 0,
                        paddingLeft: 3,
                        marginBottom: placeholder === undefined ? '10%' : 0,
                        color: '#fff',
                        height: height * 0.05
                    }, textInputStyle]}
                    secureTextEntry={type === undefined ? false : true}
                />
            </View >
        );
    }
}

export { CustomTextInput };