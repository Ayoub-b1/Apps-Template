import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function App() {
    return (
            <View className="flex-1 items-center justify-center bg-white">
                <Text className="text-3xl font-pextrabold ">Open up Appjs to start working on your app!</Text>
                <StatusBar style="auto" />
            </View>
        
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});