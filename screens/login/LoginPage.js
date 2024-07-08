import React from 'react'
import { useEffect, useLayoutEffect, useMemo, useReducer, useState } from "react";
import { StyleSheet, ScrollView, View, Text, Alert, Image, Dimensions } from "react-native";
import { TextInput, Button, useTheme } from 'react-native-paper';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import ErrorMessage from '../../components/Error/ErrorMesssage'; // Import the custom error component
import CustomButton from '../../components/Button/Button';




const LoginPage = ({ navigation }) => {

    const schema = yup.object().shape({
        email: yup.string().email('Invalid email address').required('Email is required'),
        password: yup.string()
            .min(8, 'Password must be at least 8 characters')
            .max(16, 'Password must be no more than 16 characters')
            .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
            .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
            .matches(/\d/, 'Password must contain at least one number')
            .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character')
            .required('Password is required'),
    });

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const theme = useTheme();
    const styles = createStyles(theme); // Create styles based on the theme

    // Get screen dimensions
    const { width, height } = Dimensions.get("window");
    const imageHeight = height * 0.3; // 30% of screen height

    const onSubmit = data => {
        console.log(data);
    };

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image
                        source={require('../../assets/login/login.png')}
                        style={[styles.image, { width: width * 0.8, height: imageHeight }]}
                    />
                    <Text style={[theme.components.Title, styles.title]}>FlourShop</Text>
                </View>
                <Controller
                    control={control}
                    name="email"
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            label="Email"
                            value={value}
                            mode="outlined"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            keyboardType="email-address"
                            autoCapitalize="none"
                            style={styles.input}
                            error={!!errors.email}
                            placeholder='Enter Your Email'
                        />
                    )}
                />
                <ErrorMessage message={errors.email?.message} />
                <Controller
                    control={control}
                    name="password"
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            label="Password"
                            mode="outlined"
                            value={value}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            secureTextEntry
                            style={styles.input}
                            error={!!errors.password}
                            placeholder='Enter Your Password'

                        />
                    )}
                />
                <ErrorMessage message={errors.password?.message} />
                <Text
                    style={styles.forgotPassword}
                    onPress={() => navigation.navigate('ForgotPassword')}>
                    Forgot Password?
                </Text>
                <CustomButton onPress={handleSubmit(onSubmit)} label={" Sign In"}></CustomButton>

            </View>
        </ScrollView>

    );

}

export default LoginPage;



const createStyles = (theme) => StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
        backgroundColor: 'white',

    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: "center",
    },

    imageContainer: {
        flex: 3,
        paddingTop: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        resizeMode: 'contain', // Ensure the image maintains its aspect ratio
    },

    title: {
        textAlign: 'center',
        marginBottom: 20,
        marginTop: 20,
    },

    input: {
        marginBottom: 12,
        backgroundColor: theme.colors.background,
    },
    forgotPassword: {
        color: 'blue',
        textAlign: 'right',
        marginBottom: 12,
    },
    signInButton: {
        marginTop: 16,
        backgroundColor: theme.colors.primary,
    },
});


