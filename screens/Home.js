import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import {  Button } from 'react-native-paper';

const Home = () => {
    return (
        <View style={styles.container}>
            <Text>Open up App.js to start working on yourgt app!</Text>
            <Button mode="contained">
                Increment
            </Button>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});