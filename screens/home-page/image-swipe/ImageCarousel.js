import React, { useRef, useState } from 'react';
import { View, Text, Image, FlatList, StyleSheet, Dimensions, Animated, TouchableOpacity } from 'react-native';
import { useTheme } from 'react-native-paper';
import { images } from './helper';

const { width } = Dimensions.get('window');

const ImageCarousel = () => {

    //state
    const [currentIndex, setCurrentIndex] = useState(0);

    //react native paper theme
    const theme = useTheme();
    const styles = createStyles(theme);

    const handleScroll = (event) => {
        const scrollPosition = event.nativeEvent.contentOffset.x;
        const index = Math.round(scrollPosition / width);
        setCurrentIndex(index);
    };


    return (
        <View style={styles.container}>
            <View style={styles.carouselContainer}>
                <FlatList
                    data={images}
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    onScroll={handleScroll}
                    renderItem={({ item }) => (
                        <View style={styles.slide}>
                            <Image source={item.image} style={styles.image} />
                        </View>
                    )}
                    keyExtractor={(item) => item.id}
                />
                <View style={styles.pagination}>
                    {images.map((_, index) => (
                        <View
                            key={index.toString()}
                            style={[
                                styles.dot,
                                { opacity: currentIndex === index ? 1 : 0.3 },
                            ]}
                        />
                    ))}
                </View>

            </View>
        </View>

    );
};

const createStyles = (theme) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
    },
    carouselContainer: {
        flex: 4, // 80% of the screen height
    },
    slide: {
        width,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    image: {
        width: '100%',
        height: 300,
        resizeMode: 'contain',
    },
    pagination: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 20,
        alignSelf: 'center',
    },
    dot: {
        height: 10,
        width: 10,
        borderRadius: 5,
        backgroundColor: '#888',
        marginHorizontal: 8,
    },
});

export default ImageCarousel;
