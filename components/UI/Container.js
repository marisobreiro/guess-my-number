import { StyleSheet, View } from "react-native";

function Container({children}) {
    return (
        <View style={styles.container}>{children}</View>
    );
}

export default Container;

const styles = StyleSheet.create({
    container: {
        marginTop: 100,
        alignItems: 'center'
    },
})