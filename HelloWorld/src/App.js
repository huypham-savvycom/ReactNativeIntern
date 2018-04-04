import React, { Component } from 'react';
import { AppRegistry, AsyncStorage } from 'react-native';
import thunkMiddleWare from 'redux-thunk';
import { Provider } from 'react-redux';

import AppNavigatorState from './AppNavigatorState';
import store from './store';
import reducers from './reducers';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <AppNavigatorState />
            </Provider>
        );
    }
}

AppRegistry.registerComponent('HelloWorld', () => App);
export default App;
