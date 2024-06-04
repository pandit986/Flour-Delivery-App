// screens/DetailsScreen.js
import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card, useTheme } from 'react-native-paper';

export default function DetailsScreen() {
    const theme = useTheme();
    return (
        <ScrollView style={{ flex: 1, backgroundColor: theme.colors.background }}>
            <View style={{ padding: 16 }}>
                <Card style={{ marginBottom: 16, padding: 16 }}>
                    <Text style={{ fontSize: 18, color: theme.colors.text }}>Product 1</Text>
                    <Text>Price: $10</Text>
                </Card>
                <Card style={{ marginBottom: 16, padding: 16 }}>
                    <Text style={{ fontSize: 18, color: theme.colors.text }}>Product 2</Text>
                    <Text>Price: $15</Text>
                </Card>
            </View>
        </ScrollView>
    );
}

