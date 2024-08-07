import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, Modal, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Import icons from vector library

const CategoryModal = ({ visible, onClose, category }) => {
    const renderProductCard = ({ item }) => (
        <View style={styles.card}>
            {item.bestseller && (
                <View style={styles.bestsellerLabel}>
                    <Text style={styles.bestsellerText}>Bestseller</Text>
                </View>
            )}
            <Image source={{ uri: item.image }} style={styles.productImage} />
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productDescription}>{item.description}</Text>
            <View style={styles.priceContainer}>
                <Text style={styles.discountPrice}>₹{item.discountPrice}</Text>
                <Text style={styles.originalPrice}>₹{item.price}</Text>
                <Text style={styles.discountPercentage}>
                    {Math.round(((item.price - item.discountPrice) / item.price) * 100)}% off
                </Text>
            </View>
        </View>
    );

    return (
        <Modal visible={visible} onRequestClose={onClose} transparent={false} animationType="slide">
            <View style={styles.modalContainer}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={onClose} style={styles.headerIcon}>
                        <Icon name="arrow-back" size={24} color="#000" />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Category</Text>
                    <TouchableOpacity style={styles.headerIcon}>
                        <Icon name="shopping-bag" size={24} color="#000" />
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={category}
                    renderItem={renderProductCard}
                    keyExtractor={(item) => item.id}
                    numColumns={2}
                    columnWrapperStyle={styles.columnWrapper}
                    contentContainerStyle={styles.scrollViewContainer}
                />
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        backgroundColor: 'white',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        backgroundColor: '#f5f5f5',
    },
    headerIcon: {
        padding: 10,
    },
    headerTitle: {
        fontSize: 18,
        fontFamily: 'san-bold'
    },
    scrollViewContainer: {
        padding: 10,
    },
    columnWrapper: {
        justifyContent: 'space-between',
    },
    card: {
        width: '48%',
        marginVertical: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        overflow: 'hidden',
        elevation: 3,
        position: 'relative',
    },
    bestsellerLabel: {
        position: 'absolute',
        top: 10,
        left: 10,
        backgroundColor: '#FF6347',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
        zIndex: 1,
    },
    bestsellerText: {
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold',
    },
    productImage: {
        width: '100%',
        height: 100,
        resizeMode: 'cover',
    },
    productName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical: 5,
        paddingHorizontal: 10,
    },
    productDescription: {
        fontSize: 14,
        color: '#555',
        paddingHorizontal: 10,
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingBottom: 10,
    },
    discountPrice: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FF6347',
    },
    originalPrice: {
        fontSize: 14,
        color: '#888',
        textDecorationLine: 'line-through',
    },
    discountPercentage: {
        fontSize: 14,
        color: '#FF6347',
    },
});

export default CategoryModal;
