import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import ImageCarousel from '../components/ImageCarousel'; // Assuming ImageCarousel is in the components folder

const ProductDetailScreen = ({ route, navigation }) => {
    const { product } = route.params;
    const { name, price, discountPrice, image, description, stock_quantity, images } = product;

    return (
        <ScrollView style={styles.container}>
            <ImageCarousel images={images} />
            <View style={styles.detailsContainer}>
                <Text style={styles.productName}>{name}</Text>
                <Text style={styles.productPrice}>${price}</Text>
                <Text style={styles.productDescription}>{description}</Text>
                {/* Add more product details here */}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    detailsContainer: {
        padding: 16,
    },
    productName: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    productPrice: {
        fontSize: 20,
        color: 'green',
        marginVertical: 8,
    },
    productDescription: {
        fontSize: 16,
        color: '#666',
    },
});

export default ProductDetailScreen;
