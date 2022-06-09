import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import { useState, useEffect } from "react";
import { Ionicons } from '@expo/vector-icons'

import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/UI/PrimaryButton";
import Title from "../components/UI/Title";
import Card from "../components/UI/Card";
import CardText from "../components/UI/CardText";
import Container from "../components/UI/Container";
import BtnContainer from "../components/UI/BtnContainer";

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

    const initialGuess = generateRandomBetween(1, 100, userNumber);
    const [currentGuess, setCurrentGuest] = useState(initialGuess);
    const [guessRounds, setGuessRounds] = useState([initialGuess]); 

    useEffect(() => {
        if (currentGuess == userNumber) {
            onGameOver();
        }
    }, [currentGuess, userNumber, onGameOver]); //momentos que o app vai checar se o será game over

    useEffect(() => {
        minBoundary = 1;
        maxBoundary = 100;
    }, []);

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
        setGuessRounds(prevGuessRounds => [newRndNumber, ...prevGuessRounds]);
    }

    return (
        <Container>
            <Title titletext="Opponent's Guest" />
            <NumberContainer children={currentGuess} />
            <Card>
                <View style={styles.text}>
                    <CardText cardText="Maior ou menor?"/>
                </View>
                <BtnContainer>
                    <View style={styles.btnContainer}>
                        <PrimaryButton btntext="-" onPress={nextGuessHandler.bind(this, 'lower')}>
                        </PrimaryButton>
                    </View>
                    <View style={styles.btnContainer}>
                        <PrimaryButton btntext="+" onPress={nextGuessHandler.bind(this, 'greater')}/>
                    </View>
                </BtnContainer>
            </Card>
            <View>
                {guessRounds.map(guessRounds => <Text key={guessRounds}>{guessRounds}</Text>)}
            </View>
        </Container>
    )
}

export default GameScreen;

const styles = StyleSheet.create({
    btnContainer: {
        flex: 1
    },
    text: {
        marginVertical: 20
    }
})