import { StyleSheet, Dimensions } from 'react-native';
import { color } from '../../ultils/constants/color';

const { height, width } = Dimensions.get('screen');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.paleTeal,
        alignItems: 'center'
    },
    image_layout: {
        flex: 3.56,
        width,
        alignItems: 'center'
    },
    logo: {
        width: 243,
        height: 62,
        marginTop: height * 0.142
    },
    main_layout: {
        flex: 5.23,
        width: '88%',
        height: '36.3%'
    },
    text_input: {
        flex: 1,
        padding: 0,
        color: '#fff'
    },
    button_layout: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    button_login: {
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        borderRadius: 25,
        width: '100%'
    },
    text_login: {
        color: color.paleTeal,
        fontSize: height * 0.025
    },
    sign_up_button: {
        width: '100%',
        alignItems: 'center'
    },
    sign_up_text: {
        color: '#fff',
        fontSize: height * 0.02
    },
    return: {
        flex: 1.21,
        justifyContent: 'center',
        alignItems: 'center'
    }
});