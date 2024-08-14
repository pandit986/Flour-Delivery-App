// ProductModal.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ImageCarousel from './component/ImageCarousel';

const ProductDetailModal = ({ visible, onClose, product }) => {
    const { name, price, discountPrice, image, description, stock_quantity } = product;
    console.log(image)
    return (
        <Modal
            transparent={true}
            animationType="slide"
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={styles.modalContainer}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={onClose}>
                        <Icon name="arrow-back" size={24} color="#000" />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>{name}</Text>
                    <TouchableOpacity onPress={() => { /* Cart Icon Action */ }}>
                        <Icon name="shopping-cart" size={24} color="#000" />
                    </TouchableOpacity>
                </View>

                <ImageCarousel images={image} />

                <View style={styles.detailsContainer}>
                    <Text style={styles.productName}>{name}</Text>
                    <Text style={styles.productPrice}>₹{discountPrice}</Text>
                    <Text style={styles.originalPrice}>₹{price}</Text>
                    <Text style={styles.description}>{description}</Text>
                    <Text style={styles.stock}>Stock: {stock_quantity}</Text>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 16,
        marginTop: 'auto',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },
    detailsContainer: {
        marginTop: 16,
    },
    productName: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#000',
    },
    productPrice: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#f00',
        marginTop: 8,
    },
    originalPrice: {
        fontSize: 18,
        textDecorationLine: 'line-through',
        color: '#888',
        marginTop: 4,
    },
    description: {
        fontSize: 16,
        color: '#555',
        marginTop: 8,
    },
    stock: {
        fontSize: 16,
        color: '#555',
        marginTop: 8,
    },
});

export default ProductDetailModal;
