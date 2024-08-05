// screens/HomeScreen.js
import React from 'react';
import { View, StyleSheet, ScrollView, Image, } from 'react-native';
import { useTheme } from 'react-native-paper';
import ImageCarousel from './image-swipe/ImageCarousel';
import ProductCategory from './product-category/ProductCategory';
import Coupon from './coupon/Coupon';

export default function HomeScreen() {
    const theme = useTheme();

    return (
        <ScrollView style={styles.container}>
            <ImageCarousel></ImageCarousel>
            <Coupon></Coupon>
            <ProductCategory></ProductCategory>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

