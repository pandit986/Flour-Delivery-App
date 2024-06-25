// screens/HomeScreen.js
import React from 'react';
import { View, Text, TouchableOpacity,   } from 'react-native';
import { Button, Card, useTheme } from 'react-native-paper';

export default function HomeScreen({ navigation }) {
    const theme = useTheme();

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: theme.colors.background }}>
            <Text>Welcome Screen</Text>
            <TouchableOpacity onPress={() => navigation.navigate("LoginPage")}>
                    <Text >Explore as a Visitor</Text>
                </TouchableOpacity>
        </View>
    );
}


