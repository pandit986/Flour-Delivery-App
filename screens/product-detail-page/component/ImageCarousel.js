// ImageCarousel.js
import React from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

const ImageCarousel = ({ images }) => {
    const { width } = Dimensions.get('window');

    return (
        <View style={styles.container}>
            <Carousel
                loop
                width={width}
                height={width * 0.6}
                autoPlay={false}
                data={images}
                scrollAnimationDuration={500}
                renderItem={({ index }) => (
                    <Image
                        source={{ uri: images[index] }}
                        style={styles.image}
                    />
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 16,
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
});

export default ImageCarousel;
