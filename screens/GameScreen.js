import { StyleSheet, Text, View } from "react-native";
import { useState } from "react/cjs/react.production.min";
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

function GameScreen({userNumber}) {

    const initialGuess = generateRandomBetween(1, 100, userNumber)
    const [currentGuess, setCurrentGuest] = useState(initialGuess); 

    return (
        <View style={styles.screen}>
            <Title titletext="Opponent's Guest" />
            <View>
                <Text>
                    Higher or lower?
                </Text>
            </View>
            <View>
                <PrimaryButton btntext="-" />
                <PrimaryButton btntext="+" />
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