// AppNavigation.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import LoginPage from '../screens/login/LoginPage';
import VerifyOTPPage from '../screens/login/VerifyOtpPage';
const Stack = createNativeStackNavigator();

function AppNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Otp">
                <Stack.Screen name="Login" component={LoginPage} />
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Otp" component={VerifyOTPPage} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigation;
