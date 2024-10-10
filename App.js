import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomePage from './Components/HomePage';


export default function App() {
    return (
        <SafeAreaProvider>
            {/* Find Buddy page */}
            <HomePage />
        </SafeAreaProvider>
    );
}
