import { Image, StyleSheet, Text, View } from "react-native";

import Container from '../components/UI/Container'
import Title from '../components/UI/Title'
import PrimaryButton from '../components/UI/PrimaryButton'
import Colors from "../constants/Colors";

function GameOverScreen({roundsNumber, userNumber, onStartNewGame}) { 
    return (
        <Container>
            <Title titletext="Game over!" />
            <View style={styles.imageContainer}>
                <Image source={require('../assets/images/success.png')} style={styles.image} />
            </View>
            <Text style={styles.text}>O celular precisou de <Text style={styles.highlight}>{roundsNumber}</Text> rodadas para adivinhar o número <Text style={styles.highlight}>{userNumber}</Text>.</Text>
            <View>
                <PrimaryButton btntext="Jogar novamente" onPress={onStartNewGame} />
            </View>
        </Container>
    )
}

export default GameOverScreen;

const styles = StyleSheet.create({
    imageContainer: {
        borderRadius: 100,
        height: 200,
        marginVertical: 30,
        overflow: "hidden",
        width: 200
    },
    image: {
        height: '100%',
        width: '100%'
    },
    text: {
        fontFamily: 'open-sans',
        fontSize: 25,
        color: 'white',
        margin: 30,
        textAlign: 'center'
    },
    highlight: {
        fontFamily: 'open-sans-bold',
        color: Colors.bg
    }
})