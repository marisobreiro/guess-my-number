import { StyleSheet, Text, View } from 'react-native'; 
import Colors from '../../constants/Colors';

function NumberContainer({children}) {
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    )
}

export default NumberContainer;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        borderColor: Colors.bgSecondary,
        borderRadius: 8,
        borderWidth: 4,
        justifyContent: 'center',
        margin: 24,
        padding: 24
    },
    numberText: {
        color: Colors.bgSecondary,
        fontSize: 32,
        fontWeight: 'bold'
    }
})

