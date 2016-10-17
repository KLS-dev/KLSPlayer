import React from 'react';
import { View, StyleSheet, NavigationExperimental } from 'react-native';

const {
    Card: NavigationCard,
    Header: NavigationHeader,
} = NavigationExperimental;

function Scene({ renderScene, backAction, ...navigatorProps }) {
    return (
        <View style={styles.container}>
            <NavigationCard
                {...navigatorProps}
                style={[
                    NavigationCard.CardStackStyleInterpolator.forHorizontal(navigatorProps),
                    styles.sceneContainer,
                ]}
                onNavigateBack={backAction}
                panHandlers={undefined}
                renderScene={sceneProps => renderScene(sceneProps)}
                key={navigatorProps.scene.route.key}
            />
            <NavigationHeader
                {...navigatorProps}
                onNavigateBack={backAction}
                renderTitleComponent={(navigatorHeaderProps) => {
                    const title = navigatorHeaderProps.scene.route.title;
                    return <NavigationHeader.Title>{title}</NavigationHeader.Title>;
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    sceneContainer: {
        flex: 1,
        marginTop: 64,
    },
});

export default Scene;
