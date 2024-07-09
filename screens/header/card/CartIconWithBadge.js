import React from 'react';
import { View } from 'react-native';
import { Badge } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useSelector } from 'react-redux';

const CartIconWithBadge = () => {
    const cartItems = useSelector((state) => state.cart.items);
    const cartItemCount = cartItems.length;

    return (
        <View style={{ width: 24, height: 24, margin: 5 }}>
            <Ionicons name="cart" size={25} color="#000" />
            {cartItemCount > 0 && (
                <Badge
                    size={18}
                    style={{
                        position: 'absolute',
                        top: -10,
                        right: -8,
                        backgroundColor: 'red',
                    }}
                >
                    {cartItemCount}
                </Badge>
            )}
        </View>
    );
};

export default CartIconWithBadge;
