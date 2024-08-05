// components/Coupon.js
import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';

const Coupon = () => {
    const screenWidth = Dimensions.get('window').width;
    const aspectRatio = 2; // Aspect ratio of the image (width / height) it mean (2 width / 1 heigth)

    return (
        <View style={[styles.container, { width: screenWidth, height: screenWidth / aspectRatio }]}>
            <Image
                source={require('../../../assets/homepage/coupon/coupon.png')}
                style={styles.couponImage}
                resizeMode="cover"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    couponImage: {
        width: '100%',
        height: '100%',
    },
});

export default Coupon;
