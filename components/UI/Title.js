import { StyleSheet, Text } from 'react-native';

function Title({titletext}) {
    return <Text style={styles.title}>{titletext}</Text>
}

export default Title;

const styles = StyleSheet.create({
    title: {
        borderWidth: 2,
        borderColor: 'white',
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
        padding: 8,
        textAlign: 'center',
        textTransform: 'uppercase'
    }
})