import { StyleSheet, Text, View } from 'react-native';
import Colors from '../../constants/Colors';

function GuessLogItem({ roundNumber, guess }) {
    return ( 
        <View style={styles.listItem}>
            <Text style={styles.itemText}>#{roundNumber}</Text>
            <Text style={styles.itemText}>Opponent's guess: {guess}</Text>
        </View>
    )
}

export default GuessLogItem;

const styles = StyleSheet.create({
    listItem: {
        borderRadius: 40,
        padding: 12,
        marginVertical: 8,
        backgroundColor: Colors.bgSecondary,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 350,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 0 },
        shadowOpacity: 0.25,
        shadowRadius: 3
    },
    itemText: {
        fontFamily: 'open-sans',
        color: Colors.darkPrimary
    }
})