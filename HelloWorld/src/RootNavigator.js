import { StackNavigator, TabNavigator } from 'react-navigation';
import Login from './screens/Login/Login';
// const MainNavigator = TabNavigator({

// }, {
//         headerMode: 'none',
//         tabBarPosition: 'bottom',
//         lazy: false,
//         tabBarOptions: {
//             showLabel: false,
//             showIcon: true,
//             style: {
//                 backgroundColor: 'brown',
//             },
//             // indicatorStyle: { backgroundColor: 'brown' },
//         }
//     });

const RootNavigator = StackNavigator({
    Login: { screen: Login },
},
    {
        headerMode: 'none',
    }
);
export default RootNavigator;
