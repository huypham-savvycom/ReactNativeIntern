import { StackNavigator, TabNavigator } from 'react-navigation';
import Login from './screens/Login/Login';
import SignUp from './screens/SignUp/SignUp';
import Welcome from './screens/Welcome/Welcome';
import Camera from './screens/Camera/Camera';
import Notification from './screens/Notification/Notificatiton';
import Chat from './screens/Chat/Chat';
import User from './screens/User/User';
import Timeline from './screens/Timeline/Timeline';
import { color } from './ultils/constants/color';


const MainNavigator = TabNavigator({
    Timeline: { screen: Timeline },
    Chat: { screen: Chat },
    Camera: { screen: Camera },
    Notification: { screen: Notification },
    User: { screen: User },
}, {
        headerMode: 'none',
        tabBarPosition: 'bottom',
        lazy: false,
        tabBarOptions: {
            showLabel: false,
            showIcon: true,
            style: {
                backgroundColor: '#fff',
            },
            indicatorStyle: {
                backgroundColor: color.paleTeal
            },
        }
    });

const RootNavigator = StackNavigator({
    Welcome: { screen: Welcome },
    SignUp: { screen: SignUp },
    Login: { screen: Login },
    Main: { screen: MainNavigator }

},
    {
        headerMode: 'none',
        initialRouteName: 'Main'
    }
);
export default RootNavigator;
