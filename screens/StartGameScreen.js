import { useState } from "react";
import { Alert, StyleSheet, TextInput, View } from "react-native";

import PrimaryButton from "../components/PrimaryButton";
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
        <View style={styles.inputContainer}>
            <TextInput 
                style={styles.numberInput}
                maxLength={2}
                keyboardType="number-pad"
                autoCapitalize="none"
                autoCorrect={false}
                value={enteredNumber}
                onChangeText={numberInputHandler} 
            />
            <View style={styles.btnsContainer}>
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
            </View>
        </View>
    )
}

export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer: {
        alignItems: 'center',
        backgroundColor: Colors.inputBg,
        borderRadius: 8,
        elevation: 8,
        justifyContent: 'center',
        marginHorizontal: 24,
        marginTop: 100,
        padding: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.25
    },
    numberInput: {
        borderBottomColor: Colors.bgSecondary,
        borderBottomWidth: 2,
        color: Colors.bgSecondary,
        fontSize: 32,
        fontWeight: 'bold', 
        height: 50,
        marginVertical: 8,
        textAlign: 'center',
        width: 50
    },
    btnsContainer: {
        flexDirection: 'row',
    },
    btnContainer: {
        flex: 1
    }
})