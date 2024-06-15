// screens/HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Card, useTheme } from 'react-native-paper';

export default function HomeScreen({ navigation }) {
    const theme = useTheme();
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: theme.colors.background }}>
            <Card style={{ margin: 16, padding: 16 }}>
                <Text style={{ fontSize: 20 }}>Welcome to Flour Delivery</Text>
                <Button mode="contained" onPress={() => console.log('Pressed')} style={{ fontSize: 30, color: theme.colors.text }}>
                    Press me
                </Button>
                <Button mode="outlined" onPress={() => console.log('Pressed')}>
                    Press me
                </Button>
                <Text style={{ fontSize: 17, fontFamily: "san" }}>Welcome to Flour Delivery</Text>
                <Text style={{ fontSize: 17, fontFamily: "san-medium" }}>Welcome to Flour Delivery</Text>
                <Text style={{ fontSize: 17, fontFamily: "san-bold" }}>Welcome to Flour Delivery</Text>
            </Card>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        // backgroundColor: 'purple',
        padding: 8,
    },
    label: {
        color: 'white',
        fontSize: 16,
    },
});
