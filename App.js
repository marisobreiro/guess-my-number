import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { ImageBackground, SafeAreaView, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import Colors from './constants/Colors';

export default function App() {

    const [userNumber, setUserNumber] = useState();
    const [gameIsOver, setGameIsOver] = useState(true);
    const [guessRounds, setGuessRounds] = useState(0);

    const [fontsLoaded] = useFonts({
        'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
        'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    function pickedNumberHandler(pickedNumber) {
        setUserNumber(pickedNumber);
        setGameIsOver(false);
    }

    function gameOverHandler(numberOfRounds) {
        setGameIsOver(true);
        setGuessRounds(numberOfRounds);
    }

    function startNewGameHandler() {
        setUserNumber(null);
        setGuessRounds(0);
    }

    let screen = <StartGameScreen onPickedNumber={pickedNumberHandler} />

    if (userNumber) {
        screen = 
        <GameScreen 
            userNumber={userNumber} 
            onGameOver={gameOverHandler} />
    }

    if (gameIsOver && userNumber) {
        screen = 
        <GameOverScreen 
            userNumber={userNumber} 
            roundsNumber={guessRounds} 
            onStartNewGame={startNewGameHandler} />
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
