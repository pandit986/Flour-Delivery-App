import React from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import ProductCategoryCard from './component/ProductCategoryCard';

const products = [
    { id: '1', name: 'Fresh Fruits & Vegetable', image: require("../../../assets/homepage/vegitable.png"), backgroundColor: 'rgba(83, 177, 117, 0.3)', borderColor: '#53B175' },
    { id: '2', name: 'Backery & Snacks', image: require("../../../assets/homepage/backery.png"), backgroundColor: 'rgba(211, 176, 224, 0.3)', borderColor: '#D3B0E0' },
    { id: '3', name: 'Dairy & Eggs', image: require("../../../assets/homepage/milk.png"), backgroundColor: 'rgba(253, 229, 152, 0.3)', borderColor: '#FDE598' },
    { id: '4', name: 'Cooking Oil & Ghee', image: require("../../../assets/homepage/oil.png"), backgroundColor: 'rgba(248, 164, 76, 0.3)', borderColor: '#F8A44C' },
    { id: '5', name: 'Meat & Fish', image: require("../../../assets/homepage/meat.png"), backgroundColor: 'rgba(247, 165, 147, 0.3)', borderColor: '#F7A593' },
    { id: '6', name: 'Beverages', image: require("../../../assets/homepage/beverage.png"), backgroundColor: 'rgba(183, 223, 245, 0.3)', borderColor: '#B7DFF5' },
];

const ProductCategory = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.grid}>
                {products.map((item) => (
                    <View key={item.id} style={styles.item}>
                        <ProductCategoryCard image={item.image} name={item.name} backgroundColor={item.backgroundColor} borderColor={item.borderColor} />
                    </View>
                ))}
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        padding: 8,
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
    },
    item: {
        flexBasis: '45%', // This makes each item take up roughly half the width, minus margins
        marginBottom: 8,
    },
});

export default ProductCategory;
