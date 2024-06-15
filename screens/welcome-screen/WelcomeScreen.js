import React from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import { useTheme } from 'react-native-paper';
import ImageSlider from './ImageSlider';

const WelcomeScreen = () => {

    //theme
    const theme = useTheme();
    const styles = createStyles(theme);
    const images = [
        'https://via.placeholder.com/400x200',
        'https://via.placeholder.com/400x200?text=Second',
        'https://via.placeholder.com/400x200?text=Third',
    ];
    return (
        <SafeAreaView style={styles.container}>
            <ImageSlider images={images} />
            <Text>hii</Text>
        </SafeAreaView>
    )
}

export default WelcomeScreen

const createStyles = (theme) => StyleSheet.create({
    container: {
        container: {
            flex: 1,
            backgroundColor: theme.colors.background,
        },
    }
});
