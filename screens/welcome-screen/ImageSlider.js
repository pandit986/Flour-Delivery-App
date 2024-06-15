import React, { useRef } from 'react';
import { View, Dimensions, Image, StyleSheet } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { Button, useTheme } from 'react-native-paper';

const { width: screenWidth } = Dimensions.get('window');

const ImageSlider = ({ images }) => {
    const carouselRef = useRef(null);
    const theme = useTheme();

    const renderItem = ({ item }) => (
        <View style={styles.slide}>
            <Image source={{ uri: item }} style={styles.image} />
        </View>
    );

    return (
        <View style={styles.container}>
            <Carousel
                ref={carouselRef}
                data={images}
                renderItem={renderItem}
                sliderWidth={screenWidth}
                itemWidth={screenWidth}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    slide: {
        width: screenWidth,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 8,
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 8,
    },
});

export default ImageSlider;
