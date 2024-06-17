import React, { useRef, useState } from 'react';
import { View, Text, Image, FlatList, StyleSheet, Dimensions, Animated, TouchableOpacity } from 'react-native';
import { useTheme } from 'react-native-paper';
import { slides } from './helper';

const { width } = Dimensions.get('window');

const WelcomeScreen = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const theme = useTheme();
    const styles = createStyles(theme);

    const handleScroll = (event) => {
        const scrollPosition = event.nativeEvent.contentOffset.x;
        const index = Math.floor(scrollPosition / width);
        setCurrentIndex(index);
    };

    return (
        <View style={styles.container}>
            <View style={styles.carouselContainer}>
                <FlatList
                    data={slides}
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    onScroll={handleScroll}
                    renderItem={({ item }) => (
                        <View style={styles.slide}>
                            <Image source={item.image} style={styles.image} />
                            <Text style={[styles.heading, theme.components.Title]}>{item.heading}</Text>
                            <Text style={[styles.description, theme.components.Subtitle]}>{item.description}</Text>
                        </View>
                    )}
                    keyExtractor={(item) => item.id}
                />
                <View style={styles.pagination}>
                    {slides.map((_, index) => (
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
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Get Started</Text>
                </TouchableOpacity>
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
    buttonContainer: {
        flex: 1, // 20% of the screen height
        justifyContent: 'center',
        alignItems: 'center',
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
    heading: {
        marginVertical: 10,
    },
    description: {
        color: '#666',
        textAlign: 'center',
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
    button: {
        backgroundColor: '#000',
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 25,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default WelcomeScreen;
