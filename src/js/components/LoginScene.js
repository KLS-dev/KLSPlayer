import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Animated } from 'react-native';

class LoginScene extends Component {
    constructor() {
        super();

        this.state = {
            bounce: new Animated.Value(0),
        };
    }
    componentDidMount() {
        Animated.spring(
            this.state.bounce,
            {
                toValue: 100,
                friction: 1,
            }
        ).start();
    }
    render() {
        return (
            <Animated.View
                style={{
                    flex: 1,
                    backgroundColor: 'pink',
                    flexDirection: 'column',
                }}
            >
                <Text
                    style={{
                        position: 'absolute',
                        backgroundColor: 'red',
                        textAlign: 'center',
                    }}
                >
                    sdfsdfsd
                </Text>
                <Animated.View
                    style={{
                        flex: 1,
                        transform: [
                            { translateY: this.state.bounce },
                        ],
                        backgroundColor: 'green',
                    }}
                >
                    <Text>
                        holas
                    </Text>
                </Animated.View>
                <Animated.View
                    style={{
                        flex: 1,
                        backgroundColor: 'purple',
                    }}
                >
                    <Text>
                        adios
                    </Text>
                </Animated.View>
            </Animated.View>
        );
    }
}

export default LoginScene;
