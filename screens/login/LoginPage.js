import React from 'react'
import { useEffect, useLayoutEffect, useMemo, useReducer, useState } from "react";
import { StyleSheet, /* ScrollView, */ View, Text, Alert, Image } from "react-native";
import { TextInput, Button, useTheme } from 'react-native-paper';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import ErrorMessage from '../../components/Error/ErrorMesssage'; // Import the custom error component
import CustomButton from '../../components/Button/Button';




const LoginPage = ({ navigation }) => {

    const schema = yup.object().shape({
        email: yup.string().email('Invalid email address').required('Email is required'),
        password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    });

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const theme = useTheme();
    const styles = createStyles(theme); // Create styles based on the theme


    const onSubmit = data => {
        console.log(data);
    };

    return (
        <View style={styles.container}>
            <View style={styles.centerContainer}>
                <View style={styles.circle}>
                    <Image source={require('../../assets/logo/logo.png')} style={styles.image} />
                </View>
                <Text style={[theme.components.Title, styles.title]}>FlourShop</Text>
            </View>
            <Controller
                control={control}
                name="email"
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        label="Email"
                        value={value}
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
    centerContainer: {
        alignItems: 'center',  // Center align only the circle and title
        marginBottom: 20,
    },
    circle: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: "black",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        overflow: 'hidden'
    },


    image: {
        width: 100,
        height: 100,
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
        textDecorationLine: 'underline',
    },
    signInButton: {
        marginTop: 16,
        backgroundColor: theme.colors.primary,
    },
});


