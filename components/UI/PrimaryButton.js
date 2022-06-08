import { StyleSheet, Text, Pressable, View } from 'react-native'

import Colors from '../../constants/Colors';

function PrimaryButton({btntext, onPress}) {

    return (
            <View style={styles.btnOuterContainer}>
                <Pressable 
                    onPress={onPress}
                    style={({pressed}) => 
                        pressed 
                        ? [styles.btnInnerContainer, styles.pressed]
                        : styles.btnInnerContainer}
                    android_ripple={{ color: Colors.darkPrimary}}
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
        backgroundColor: Colors.primary,
        elevation: 2,
        paddingVertical: 8,
        paddingHorizontal: 16
    },
    btnText: {
        color: '#FFFFFF',
        textAlign: 'center',
        fontSize: 16
    },
    pressed: {
        opacity: 0.75
    }
})
