// screens/HomeScreen.js
import React from 'react';
import { View, Text } from 'react-native';
import { Button, Card } from 'react-native-paper';
import { useTheme } from 'react-native-paper';


export default function HomeScreen({ navigation }) {
    const theme = useTheme();

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: theme.colors.background }}>
            <Card style={{ margin: 16, padding: 16 }}>
                <Text style={{ fontSize: 20, color: theme.colors.text }}>Welcome to Flour Delivery</Text>
                <Button
                    mode="contained"
                    onPress={() => navigation.navigate('Details')}
                    style={{ marginTop: 20 }}
                    color={theme.colors.primary}
                >
                    View Products
                </Button>
            </Card>
        </View>

    );
}
