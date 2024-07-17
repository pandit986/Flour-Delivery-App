import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import Carousel, { Pagination } from 'react-native-reanimated-carousel';

const { width: screenWidth } = Dimensions.get('window');

const images = [
    { uri: 'https://images.unsplash.com/photo-1708958151986-2b032fde35ce?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { uri: 'https://images.unsplash.com/photo-1706430263184-c1f9ac844a54?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { uri: 'https://images.unsplash.com/photo-1721069275326-5fd80e01ce8d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
];

const ParallaxCarousel = () => {
    return (
        <View style={styles.container}>
            <Carousel
                loop
                width={screenWidth}
                height={200}
                autoPlay
                autoPlayInterval={2000}
                data={images}
                renderItem={({ item }) => (
                    <View style={styles.imageContainer}>
                        <Image source={item} style={styles.image} />
                    </View>
                )}
                // Configure the parallax effect
                style={{ overflow: 'hidden' }}
                pagingEnabled
                mode="normal-horizontal"
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
    imageContainer: {
        width: screenWidth,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
});

export default ParallaxCarousel;
