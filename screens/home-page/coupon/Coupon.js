// components/Coupon.js
import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';

const Coupon = () => {
    return (
        <View style={styles.container}>
            <Image
                source={require('../../../assets/homepage/coupon/coupon.png')} // Update this path to your coupon image
                style={styles.couponImage}
                resizeMode="contain"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    couponImage: {
        width: Dimensions.get('window').width, 
        height: undefined,
        aspectRatio: 2, // Adjust the aspect ratio according to your image dimensions
    },
});

export default Coupon;
