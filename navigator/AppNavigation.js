// AppNavigation.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/home-page/HomeScreen';
import WelcomeScreen from '../screens/welcome-screen/WelcomeScreen';
import SignUpScreen from '../screens/signup/SignUp';
import VerifyOTPPage from '../screens/login/VerifyOtpPage';
import ForgotPassword from '../screens/login/ForgotPassword';
import LoginPage from '../screens/login/LoginPage';
import MainTabNavigator from './MainTabNavigator';
import LocationScreen from '../screens/header/location/LocationScreen';
import ProductDetailScreen from '../screens/product-detail-page/ProductDetailScreen';
import CategoryScreen from '../screens/home-page/product-category/component/CategoryScreen';
import CommonHeader from '../screens/home-page/product-category/component/CommonHeader';

const Stack = createNativeStackNavigator();

function AppNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="WelcomeScreen">
                <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
                <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{ headerShown: false }} />
                <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
                <Stack.Screen name="VerifyOtp" component={VerifyOTPPage} options={{ headerShown: false }} />
                <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ headerShown: false }} />

                <Stack.Screen name="LoginPage" component={LoginPage} options={{ headerShown: false }} />
                <Stack.Screen name="LocationScreen" component={LocationScreen} options={{ headerShown: false }} />
                {/* <Stack.Screen name="CategoryScreen" component={CategoryScreen} options={{ headerShown: false }} />
                <Stack.Screen name="ProductScreen" component={ProductDetailScreen} options={{ headerShown: false }} /> */}
                <Stack.Screen
                    name="CategoryScreen"
                    component={CategoryScreen}
                    options={({ navigation, route }) => ({
                        header: () => <CommonHeader navigation={navigation} title={route.params.title} />,
                    })}
                />
                <Stack.Screen
                    name="ProductScreen"
                    component={ProductDetailScreen}
                    options={({ navigation, route }) => ({
                        header: () => <CommonHeader navigation={navigation} title={route.params.title} />,
                    })}
                />
                <Stack.Screen name="Main" component={MainTabNavigator} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigation;
