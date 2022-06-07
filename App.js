import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { ImageBackground, SafeAreaView, StyleSheet } from 'react-native';

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import Colors from './constants/Colors';

export default function App() {

    const [userNumber, setUserNumber] = useState();

    function pickedNumberHandler(pickedNumber) {
        setUserNumber(pickedNumber);
    }

    let screen = <StartGameScreen onPickedNumber={pickedNumberHandler} />

    if (userNumber ) {
        screen = <GameScreen />
    }

    return (
        <LinearGradient 
            style={styles.rootScreen}
            colors={[ Colors.bg, Colors.bgSecondary ]}>
            <ImageBackground 
                source={require('./assets/images/background.png')}
                resizeMode="cover"
                style={styles.rootScreen}
                imageStyle={styles.backgroundImage}
            >
                <SafeAreaView>{screen}</SafeAreaView>
            </ImageBackground>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    rootScreen: {
        flex: 1
    },
    backgroundImage: {
        opacity: 0.15
    }
});
