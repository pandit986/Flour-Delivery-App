import React, { useState, useEffect } from 'react';
import { View, Dimensions, Image, StyleSheet } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import Animated, { Easing, useSharedValue, withTiming, useAnimatedStyle } from 'react-native-reanimated';
import ContentLoader, { Rect } from 'react-content-loader/native';
import { useTheme } from 'react-native-paper';

const { width } = Dimensions.get('window');

const images = [
    'https://images.unsplash.com/photo-1721069275326-5fd80e01ce8d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1706430263184-c1f9ac844a54?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1708958151986-2b032fde35ce?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1721069275326-5fd80e01ce8d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1706430263184-c1f9ac844a54?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1708958151986-2b032fde35ce?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
];

const ImageCarousel = () => {

    //state
    const progressValue = useSharedValue(0);
    const [loading, setLoading] = useState(true);

    //react native paper theme
    const theme = useTheme();

    useEffect(() => {
        const timeout = setTimeout(() => setLoading(false), 2000); // Simulate image loading time
        return () => clearTimeout(timeout);
    }, []);

    // Define animated styles outside of any conditional logic
    const animatedStyles = images.map((_, index) =>
        useAnimatedStyle(() => {
            const backgroundColor = withTiming(progressValue.value === index ? `${theme.colors.accent}` : '#888888', {
                duration: 500,
                easing: Easing.inOut(Easing.ease),
            });
            const dotWidth = withTiming(progressValue.value === index ? 20 : 10, {
                duration: 700,
                easing: Easing.inOut(Easing.ease),
            });

            return {
                backgroundColor, width: dotWidth
            };
        })
    );

    return (
        <View>
            {loading ? (
                <ContentLoader
                    viewBox={`0 0 ${width} ${width * 0.5}`}
                    backgroundColor="#e0e0e0"
                    foregroundColor="#f0f0f0"
                    style={{ width, height: width * 0.5 }}
                >
                    <Rect x="0" y="0" rx="5" ry="5" width="100%" height="100%" />
                </ContentLoader>
            ) : (
                <Carousel
                    width={width}
                    height={width * 0.5}
                    loop
                    autoPlay
                    autoPlayInterval={4000}
                    onProgressChange={(progress, currentIndex) => {
                        progressValue.value = currentIndex;
                    }}
                    data={images}
                    renderItem={({ item }) => (
                        <Image source={{ uri: item }} style={styles.image} />
                    )}
                />
            )}
            {!loading && (
                <View style={styles.paginationWrapper}>
                    <View style={styles.paginationContainer}>
                        {images.map((_, index) => (
                            <Animated.View key={index} style={[styles.paginationDot, animatedStyles[index]]} />
                        ))}
                    </View>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%',
    },
    paginationWrapper: {
        position: 'absolute',
        bottom: 10,
        width: '100%',
        alignItems: 'center',
    },
    paginationContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        paddingVertical: 5,
        paddingHorizontal: 12,
        borderRadius: 20,
    },
    paginationDot: {
        height: 5,
        borderRadius: 5,
        marginHorizontal: 4,
    },
});

export default ImageCarousel;
