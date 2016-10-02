import React, { Component } from 'react';
import { StyleSheet, Text, TouchableHighlight, View, Linking } from 'react-native';
import spotify from 'react-native-spotify';

class Main extends Component {
    constructor() {
        super();

        this.handleOpenURL = this.handleOpenURL.bind(this);
    }
    componentDidMount() {
        spotify.setup('19ff9062336c4833aa842c19d7bd968e');
        Linking.addEventListener('url', this.handleOpenURL);
    }
    componentWillUnmount() {
        Linking.removeEventListener('url', this.handleOpenURL);
    }
    goToLogin() {
        spotify.goToLogin('klsplayer-spotify-auth://returnafterlogin');
    }
    handleOpenURL(event) {
        spotify.handleAuthCallbackUrl(event.url, this.playRandomSong);
    }
    playRandomSong() {
        spotify.play('58s6EuEYJdlb0kO7awm3Vp');
    }
    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight onPress={this.goToLogin}>
                    <Text style={styles.welcome}>
                      Welcome to React Native!
                    </Text>
                </TouchableHighlight>
                <Text style={styles.instructions}>
                  To get started, edit index.ios.js
                </Text>
                <Text style={styles.instructions}>
                  Press Cmd+R to reload,{'\n'}
                  Cmd+D or shake for dev menu
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default Main;
