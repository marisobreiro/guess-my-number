import { StyleSheet, Text, Pressable, View } from 'react-native'

function PrimaryButton({btntext}) {

    function pressHandler() {
        console.log('Pressed');
    }

    return (
            <View style={styles.btnOuterContainer}>
                <Pressable 
                    onPress={pressHandler}
                    style={({pressed}) => 
                        pressed 
                        ? [styles.btnInnerContainer, styles.pressed]
                        : styles.btnInnerContainer}
                    android_ripple={{ color: "#640233"}}
                    >
                    <Text style={styles.btnText}>{btntext}</Text>
                </Pressable>
            </View>
    )
}

export default PrimaryButton;

const styles = StyleSheet.create({
    btnOuterContainer: {
        borderRadius: 28,
        marginHorizontal: 6,
        overflow: 'hidden'
    },
    btnInnerContainer: {
        backgroundColor: '#72063c',
        elevation: 2,
        paddingVertical: 8,
        paddingHorizontal: 16
    },
    btnText: {
        color: '#FFFFFF',
        textAlign: 'center'
    },
    pressed: {
        opacity: 0.75
    }
})
