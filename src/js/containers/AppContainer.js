import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import NavigationContainer from './NavigationContainer';
import reducers from '../reducers';
import LoginScene from '../components/LoginScene';

const store = createStore(reducers);

class AppContainer extends Component {
    constructor() {
        super();

        this.state = {
            isFetching: false,
            isLogged: false,
        };
    }
    renderRoot() {
        if (this.state.isFetching) {
            return (
                <Text>
                    Cargando...
                </Text>
            );
        }
        if (this.state.isLogged) {
            return (
                <Provider store={store}>
                    <NavigationContainer />
                </Provider>
            );
        }
        return (
            <LoginScene />
        );
    }
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: '#191414',
                }}
            >
                <StatusBar
                    barStyle="light-content"
                />
                {this.renderRoot()}
            </View>
        );
    }
}
export default AppContainer;
