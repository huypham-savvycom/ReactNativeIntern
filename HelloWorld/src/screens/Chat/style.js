import { StyleSheet, Dimensions } from 'react-native';
import { color } from '../../ultils/constants/color';

const { height, width } = Dimensions.get('screen');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.paleTeal,
        alignItems: 'center'
    },
    logo: {
        width: 243,
        height: 62,
        alignSelf: 'center'
    },
    button_layout: {
        flex: 2.2,
        alignItems: 'center',
        width: '100%'
    },
    button_login: {
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        borderRadius: 25,
        width: '56%'

    },
    text: {
        color: '#fff',
        alignSelf: 'flex-end',
        fontFamily: 'Myriad Set Pro Text',
        fontSize: 17
    },
    text_login: {
        color: color.paleTeal,
        fontSize: 21
    },
    welcome_layout: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
