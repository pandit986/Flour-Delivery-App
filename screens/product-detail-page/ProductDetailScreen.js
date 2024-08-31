import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import ProductPageImageCarousel from './component/ProductPageImageCarousel';
import PackageSizeSelector from './component/PackageSizeSelector';
import { addToCart } from './action/cartSlice';

const ProductDetailScreen = ({ route, navigation }) => {
    const { product } = route.params;
    const [showFooter, setShowFooter] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const [selectedPackage, setSelectedPackage] = useState(null);

    const dispatch = useDispatch();

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowFooter(true);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    const handleAddToCart = () => {
        if (selectedPackage) {
            const cartItem = {
                productId: product.id,
                name: product.name,
                packageSize: selectedPackage.size,
                price: selectedPackage.price,
                quantity,
            };
            dispatch(addToCart(cartItem));
        } else {
            alert('Please select a package size');
        }
    };

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.topContainer}>
                    <ProductPageImageCarousel images={product.image} bestseller={product.bestseller} discountPrice={Math.round(((product.price - product.discountPrice) / product.price) * 100)} />
                    <View style={styles.headerContainer}>
                        <Text style={styles.header}>{product.name}</Text>
                        <View style={styles.prizeContainer}>
                            <Text style={{ color: "#000", fontSize: 12 }}>Price: <Text style={styles.originalPrice}>₹{product.price}</Text></Text>
                            <Text style={styles.discountPrice}>₹{product.discountPrice}/kg</Text>
                        </View>
                    </View>
                    <PackageSizeSelector selectedPackage={selectedPackage} onSelectPackage={setSelectedPackage} />
                </View>
            </ScrollView >

            {showFooter && (
                <View style={styles.footer}>
                    <View style={styles.quantitySelector}>
                        <TouchableOpacity onPress={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>
                            <FontAwesome name="minus" size={24} color="black" />
                        </TouchableOpacity>
                        <Text style={styles.quantity}>{quantity}</Text>
                        <TouchableOpacity onPress={() => setQuantity(quantity + 1)}>
                            <FontAwesome name="plus" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.addToCart} onPress={handleAddToCart}>
                        <Text style={styles.addToCartText}>Add to Cart</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F2F2',
    },
    topContainer: {
        flex: 1,
        borderBottomColor: '#fff',
        borderBottomWidth: 5,
    },
    headerContainer: {
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    header: {
        fontFamily: 'san-bold',
        fontSize: 18,
    },
    discountPrice: {
        fontSize: 14,
        color: '#000',
        fontFamily: 'san-medium',
    },
    originalPrice: {
        fontSize: 12,
        color: '#8B0000',
        textDecorationLine: 'line-through',
        fontFamily: 'san',
    },
    prizeContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
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
