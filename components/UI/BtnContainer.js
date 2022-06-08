import { StyleSheet, View } from "react-native";

export default function BtnContainer({children}) {
    return <View style={styles.btnContainer}>{children}</View>
}

const styles = StyleSheet.create({
    btnContainer: {
        flexDirection: "row"
    }
})