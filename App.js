import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, View} from 'react-native';
import StartGameScreen from './screens/StartGameScreen';

export default function App() {
    return (
        <LinearGradient 
            style={styles.rootScreen}
            colors={['#4E0329', '#DDB52F']}>
            <StartGameScreen />
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    rootScreen: {
        flex: 1
    }
});
