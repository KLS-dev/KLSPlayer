import React, { PropTypes } from 'react';
import { NavigationExperimental, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import LoginScene from '../components/LoginScene';
import Main from '../components/Main';
import Scene from '../components/Scene';
import { navigatePop, navigateReset, navigatePush } from '../actions/navigationStateActions';

const {
    Transitioner: NavigationTransitioner,
} = NavigationExperimental;


class NavigationContainer extends React.Component {
    constructor() {
        super();

        this.renderScene = this.renderScene.bind(this);
        this.renderSceneContainer = this.renderSceneContainer.bind(this);
    }
    renderScene({ scene }) {
        const { route } = scene;

        switch (route.key) {
            case 'index':
                return <Main />;
            case 'login':
                return <LoginScene />;
            default:
                return <LoginScene />;
        }
    }
    renderSceneContainer(navigatorProps) {
        return (
            <Scene
                {...navigatorProps}
                renderScene={this.renderScene}
                backAction={this.props.backAction}
            />
        );
    }
    render() {
        const { navigationState } = this.props;
        return (
            // Redux is handling the reduction of our state for us. We grab the navigationState
            // we have in our Redux store and pass it directly to the <NavigationTransitioner />.
            <NavigationTransitioner
                navigationState={navigationState}
                style={styles.container}
                render={this.renderSceneContainer}
            />
    );
    }
}

NavigationContainer.propTypes = {
    navigationState: PropTypes.any,
    backAction: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    sceneContainer: {
        flex: 1,
        marginTop: 64,
    },
});

export default connect(
    state => ({
        navigationState: state.navigationState,
    }),
    dispatch => ({
        backAction: () => {
            dispatch(navigatePop());
        },
        resetToIndex: () => {
            dispatch(navigatePush({
                key: 'index2',
                title: 'index',
                fullscreen: true,
            }));
        },
    })
)(NavigationContainer);
