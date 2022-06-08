import { Alert, StyleSheet, Text, View } from "react-native";
import { useState, useEffect } from "react";

import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, onGameOver }) {

    const initialGuess = generateRandomBetween(
        1, 
        100, 
        userNumber
    );
    const [currentGuess, setCurrentGuest] = useState(initialGuess); 

    useEffect(() => {
        if (currentGuess == userNumber) {
            onGameOver();
        }
    }, [currentGuess, userNumber, onGameOver]); //momentos que o app vai checar se o será game over

    function nextGuessHandler(direction) {
        // direction => 'lower', 'greater''
        if (
            (direction === 'lower' && currentGuess < userNumber) || 
            (direction == 'greater' && currentGuess > userNumber)
        ) {
            Alert.alert(
                'Jogue limpo!', 
                'Você sabe que isso não está certo...', 
                [{text: 'Sorry', style: 'cancel'}]);
            return;
        }
        if (direction === 'lower') {
            maxBoundary = currentGuess;
        } else {
            minBoundary = currentGuess + 1;
        }
        const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
        setCurrentGuest(newRndNumber);
    }

    return (
        <View style={styles.screen}>
            <Title titletext="Opponent's Guest" />
            <NumberContainer children={currentGuess} />
            <View>
                <Text>
                    Higher or lower?
                </Text>
            </View>
            <View>
                <PrimaryButton btntext="-" onPress={nextGuessHandler.bind(this, 'lower')} />
                <PrimaryButton btntext="+" onPress={nextGuessHandler.bind(this, 'greater')}/>
            </View>
        </View>
    )
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        padding: 24
    }
})