import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Animated, Dimensions } from 'react-native';

const HEIGHT = Dimensions.get('window').height;

class LoginScene extends Component {
    constructor() {
        super();

        this.state = {
            top: new Animated.Value((HEIGHT / 2) - 20),
            bottom: new Animated.Value(0),
            container: new Animated.Value(0),
        };
    }
    componentDidMount() {
        Animated.timing(
            this.state.top,
            {
                toValue: HEIGHT,
                duration: 300,
                delay: 200,
            }
        ).start();
        Animated.timing(
            this.state.bottom,
            {
                toValue: (HEIGHT / 2),
                duration: 500,
            }
        ).start();
        Animated.timing(
            this.state.container,
            {
                toValue: HEIGHT,
                duration: 500,
                delay: 500,
            }
        ).start();
    }
    render() {
        return (
            <Animated.View
                style={{
                    flex: 1,
                    transform: [
                        { translateY: this.state.container },
                    ],
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
                            { translateY: this.state.top },
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
                        transform: [
                            { translateY: this.state.bottom },
                        ],
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
