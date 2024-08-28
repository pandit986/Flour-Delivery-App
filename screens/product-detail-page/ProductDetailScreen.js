import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import ProductPageImageCarousel from './component/ProductPageImageCarousel';

const ProductDetailScreen = ({ route, navigation }) => {
    const { product } = route.params;

    const [showFooter, setShowFooter] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowFooter(true);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <View style={styles.container}>
            <ScrollView>
                <ProductPageImageCarousel images={product.image} bestseller={product.bestseller} />
                <Text style={styles.description}>{product.description}</Text>
            </ScrollView>

            {showFooter && (
                <View style={styles.footer}>
                    <View style={styles.quantitySelector}>
                        <FontAwesome name="minus" size={24} color="black" />
                        <Text style={styles.quantity}>1</Text>
                        <FontAwesome name="plus" size={24} color="black" />
                    </View>
                    <TouchableOpacity style={styles.addToCart}>
                        <Text style={styles.addToCartText}>Add to Cart</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#F2F2F2',
        backgroundColor: 'gray',

    },
    description: {
        padding: 15,
        fontSize: 16,
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#f8f8f8',
        borderTopWidth: 1,
        borderTopColor: '#ddd',
    },
    quantitySelector: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    quantity: {
        fontSize: 20,
        marginHorizontal: 10,
    },
    addToCart: {
        backgroundColor: '#ff6347',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    addToCartText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default ProductDetailScreen;
