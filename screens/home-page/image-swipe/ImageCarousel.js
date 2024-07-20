import React, { useRef, useEffect } from 'react';
import { View, Dimensions, Image, StyleSheet } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import Animated, { Easing, useSharedValue, withTiming, useAnimatedStyle } from 'react-native-reanimated';

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

    const progressValue = useSharedValue(0);

    console.log(progressValue, "progressValue")
    return (
        <View>
            <Carousel
                width={width}
                height={width * 0.6}
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
            <View style={styles.paginationWrapper}>
                <View style={styles.paginationContainer}>
                    {images.map((_, index) => {
                        const animatedStyle = useAnimatedStyle(() => {
                            const backgroundColor = withTiming(progressValue.value === index ? '#FFFFFF' : '#888888', {
                                duration: 500,
                                easing: Easing.inOut(Easing.ease),
                            });
                            const width = withTiming(progressValue.value === index ? 20 : 10, {
                                duration: 700,
                                easing: Easing.inOut(Easing.ease),
                            });

                            return {
                                backgroundColor, width
                            };
                        });

                        return (
                            <Animated.View key={index} style={[styles.paginationDot, animatedStyle]} />
                        );
                    })}
                </View>
            </View>
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
        width: 5,
        height: 5,
        borderRadius: 5,
        marginHorizontal: 4,
    },
});

export default ImageCarousel;
