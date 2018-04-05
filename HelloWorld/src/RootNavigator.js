import { StackNavigator, TabNavigator } from 'react-navigation';
import Login from './screens/Login/Login';
import SignUp from './screens/SignUp/SignUp';
import Welcome from './screens/Welcome/Welcome';
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
    Welcome: { screen: Welcome },
    SignUp: { screen: SignUp },
    Login: { screen: Login },

},
    {
        headerMode: 'none',
    }
);
export default RootNavigator;
