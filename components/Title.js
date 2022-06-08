import { StyleSheet, Text } from 'react-native';
import Colors from '../constants/Colors';

function Title({titletext}) {
    return <Text style={styles.title}>{titletext}</Text>
}

export default Title;

const styles = StyleSheet.create({
    title: {
        // borderWidth: 2,
        // borderColor: Colors.bgSecondary,
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
        padding: 8,
        textAlign: 'center',
        textTransform: 'uppercase'
    }
})