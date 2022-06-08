import { StyleSheet, View } from 'react-native'
import Colors from '../../constants/Colors';

function Card({children}) {
    return (
        <View style={styles.card}>{children}</View>
    );
}

export default Card;

const styles = StyleSheet.create({
    card: {
        alignItems: 'center',
        backgroundColor: Colors.inputBg,
        borderRadius: 8,
        elevation: 8,
        justifyContent: 'center',
        marginHorizontal: 24,
        marginTop: 36,
        padding: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 6,
    },
})