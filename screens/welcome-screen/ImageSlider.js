import React, { useState, useRef } from 'react';
import { View, ScrollView, Image, Dimensions, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useTheme } from 'react-native-paper';

const { width: screenWidth } = Dimensions.get('window');

const ImageSlider = ({ images }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const scrollViewRef = useRef(null);
    const theme = useTheme();

    const onScroll = (event) => {
        const slideIndex = Math.round(event.nativeEvent.contentOffset.x / screenWidth);
        setActiveIndex(slideIndex);
    };

    const renderPagination = () => {
        return (
            <View style={styles.paginationContainer}>
                {images.map((_, index) => (
                    <View
                        key={index}
                        style={[
                            styles.dot,
                            { backgroundColor: index === activeIndex ? theme.colors.primary : theme.colors.background },
                        ]}
                    />
                ))}
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <ScrollView
                ref={scrollViewRef}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={onScroll}
                scrollEventThrottle={16}
            >
                {images.map((image, index) => (
                    <View key={index} style={styles.slide}>
                        <Image source={{ uri: image }} style={styles.image} />
                    </View>
                ))}
            </ScrollView>
            {renderPagination()}
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
    paginationContainer: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 10,
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 4,
    },
});

export default ImageSlider;
