import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { useTheme } from 'react-native-paper';
import ImageCarousel from './image-swipe/ImageCarousel';
import ProductCategory from './product-category/ProductCategory';
import Coupon from './coupon/Coupon';
import QuickLink from './quick-link/QuickLink';

export default function HomeScreen() {
    const theme = useTheme();
    const [showCoupon, setShowCoupon] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowCoupon(true);
        }, 500); 

        return () => clearTimeout(timer);
    }, []);

    return (
        <ScrollView style={styles.container}>
            <ImageCarousel />
            <QuickLink />
            {showCoupon && <Coupon />}
            <ProductCategory />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
