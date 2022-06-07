import { StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen() {
    return (
        <View style={styles.inputContainer}>
            <TextInput 
                style={styles.numberInput}
                maxLength={2}
                keyboardType="number-pad"
                autoCapitalize="none"
                autoCorrect={false}
            />
            <View style={styles.btnsContainer}>
                <View style={styles.btnContainer}>
                    <PrimaryButton btntext="Recomeçar" />
                </View>
                <View style={styles.btnContainer}>
                    <PrimaryButton btntext="Confirmar" />
                </View>
            </View>
        </View>
    )
}

export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer: {
        alignItems: 'center',
        backgroundColor: '#3B021F',
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
        borderBottomColor: '#DDB52F',
        borderBottomWidth: 2,
        color: '#DDB52F',
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