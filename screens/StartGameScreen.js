import { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, View } from "react-native";

import BtnContainer from "../components/UI/BtnContainer";
import Card from "../components/UI/Card";
import CardText from "../components/UI/CardText";
import Container from "../components/UI/Container";
import PrimaryButton from "../components/UI/PrimaryButton";
import Title from "../components/UI/Title";
import Colors from "../constants/Colors";

function StartGameScreen({ onPickedNumber }) {
    const [enteredNumber, setEnteredNumber] = useState('');

    function numberInputHandler(enteredText) {
        setEnteredNumber(enteredText);
    }

    function resetInputHandler() {
        setEnteredNumber('');
    }

    function confirmInputHandler() {
        const chooseNumber = parseInt(enteredNumber);

        if (isNaN(chooseNumber) || chooseNumber <= 0 || chooseNumber > 99) {
            Alert.alert(
                'Número inválido!', 
                'O número escolhido deve estar entre 1 e 99', 
                [{ text: 'Ok', style: 'destructive', onPress: resetInputHandler }]
            );
            return;
        } 
        onPickedNumber(chooseNumber); 
    }

    return (
        <Container style={styles.rootContainer}>
            <Title titletext="Guess my number" />
            <Card>
                <CardText cardText="Insira um número" />
                <TextInput 
                    style={styles.numberInput}
                    maxLength={2}
                    keyboardType="number-pad"
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={enteredNumber}
                    onChangeText={numberInputHandler} 
                />
                <BtnContainer>
                    <View style={styles.btnContainer}>
                        <PrimaryButton 
                            btntext="Recomeçar" 
                            onPress={resetInputHandler}/>
                    </View>
                    <View style={styles.btnContainer}>
                        <PrimaryButton 
                            btntext="Confirmar" 
                            onPress={confirmInputHandler}
                        />
                    </View>
                </BtnContainer>
            </Card>
        </Container>
    )
}

export default StartGameScreen;

const styles = StyleSheet.create({
    rootContainer: {
        marginTop: 100,
        alignItems: 'center'
    },
    numberInput: {
        borderBottomColor: Colors.bgSecondary,
        borderBottomWidth: 2,
        color: Colors.bgSecondary,
        fontSize: 32,
        fontWeight: 'bold', 
        height: 50,
        marginVertical: 20,
        textAlign: 'center',
        width: 50
    },
    labelInput: {
        color: Colors.bgSecondary,
        fontSize: 16
    },
    btnContainer: {
        flex: 1
    }
})