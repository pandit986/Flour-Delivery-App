// screens/HomeScreen.js
import React from 'react';
import { View, StyleSheet, ScrollView, Image, } from 'react-native';
import { useTheme } from 'react-native-paper';
import ImageCarousel from './image-swipe/ImageCarousel';
import ParallaxCarousel from './image-swipe/ParallaxCarousel';

export default function HomeScreen({ navigation }) {
    const theme = useTheme();

    return (
        <ScrollView style={styles.container}>
            {/* <ImageCarousel></ImageCarousel> */}
            <ParallaxCarousel></ParallaxCarousel>
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

