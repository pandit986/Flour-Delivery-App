import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, TextInput, Button, HelperText } from 'react-native-paper';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

// Define the validation schema using Yup
const schema = yup.object().shape({
    email: yup.string().email('Invalid email address').required('Email is required'),
});

const ForgotPassword = () => {
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = data => {
        console.log('Email:', data.email);
    };

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <Text style={styles.heading}>Forgot Password</Text>
                <Text style={styles.subHeading}>Sign in to continue</Text>
                <Controller
                    control={control}
                    name="email"
                    render={({ field: { onChange, onBlur, value } }) => (
                        <>
                            <TextInput
                                label="Email"
                                mode="outlined"
                                value={value}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                style={styles.input}
                                keyboardType="email-address"
                                autoCapitalize="none"
                                error={!!errors.email}
                            />
                            {errors.email && <HelperText type="error">{errors.email.message}</HelperText>}
                        </>
                    )}
                />
                <Button mode="contained" onPress={handleSubmit(onSubmit)} style={styles.button}>
                    Submit
                </Button>
            </View>
        </ScrollView>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: "center",
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    subHeading: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 40,
    },
    input: {
        marginBottom: 20,
    },
    button: {
        marginTop: 10,
    },
});

export default ForgotPassword;
