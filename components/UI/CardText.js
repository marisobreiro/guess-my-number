import { StyleSheet, Text } from "react-native";
import Colors from "../../constants/Colors";

function CardText({cardText}) {
    return <Text style={styles.cardText}>{cardText}</Text>
}

export default CardText;

const styles = StyleSheet.create({
    cardText: {
        color: Colors.bgSecondary,
        fontSize: 16
    }
})