import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
// import { incrementQuantity, decrementQuantity } from './store/cartSlice'; // Import your slice actions

const CartScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const { items, totalAmount = 10, totalQuantity = 10 } = useSelector((state) => state.cart);

    const renderCartItem = ({ item }) => {
        return (
            <View style={styles.cartItem}>
                <View style={styles.itemDetails}>
                    <Text style={styles.itemName}>{item.name}</Text>
                    <Text style={styles.itemPackage}>Package Size: {item.packageSize}</Text>
                    <Text style={styles.itemPrice}>₹{item.price}/Item</Text>
                </View>

                <View style={styles.quantityControl}>
                    <TouchableOpacity>
                        <Icon name="remove" size={24} color="#fff" style={styles.quantityButton} />
                    </TouchableOpacity>
                    <Text style={styles.quantity}>{item.quantity}</Text>
                    <TouchableOpacity >
                        <Icon name="add" size={24} color="#fff" style={styles.quantityButton} />
                    </TouchableOpacity>
                </View>

                <View style={styles.subTotal}>
                    <Text style={styles.subTotalText}>Sub-Total: ₹{item.subTotal}/-</Text>
                </View>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={items}
                renderItem={renderCartItem}
                keyExtractor={(item) => item.productId.toString()}
                contentContainerStyle={styles.cartList}
            />

            <View style={styles.footer}>
                <Text style={styles.footerText}>
                    {totalQuantity} Product(s) | Total: ₹{totalAmount}
                </Text>
                <TouchableOpacity style={styles.checkoutButton}>
                    <Text style={styles.checkoutButtonText}>Checkout</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    cartItem: {
        flexDirection: 'column',
        backgroundColor: '#fff',
        marginVertical: 8,
        marginHorizontal: 10,
        padding: 10,
        borderRadius: 10,
        elevation: 2,
    },
    itemDetails: {
        marginBottom: 8,
    },
    itemName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    itemPackage: {
        fontSize: 14,
        color: '#666',
    },
    itemPrice: {
        fontSize: 14,
        color: '#666',
    },
    quantityControl: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 10,
    },
    quantityButton: {
        backgroundColor: '#b0003a',
        padding: 8,
        borderRadius: 5,
    },
    quantity: {
        fontSize: 16,
        fontWeight: 'bold',
        marginHorizontal: 10,
    },
    subTotal: {
        alignItems: 'flex-end',
    },
    subTotalText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#b0003a',
    },
    cartList: {
        paddingBottom: 80, // To avoid the footer overlapping the list
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        borderTopWidth: 1,
        borderTopColor: '#ddd',
        backgroundColor: '#fff',
    },
    footerText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    checkoutButton: {
        backgroundColor: '#b0003a',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    checkoutButtonText: {
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default CartScreen;
