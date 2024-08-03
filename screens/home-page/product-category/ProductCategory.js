import React from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import ProductCategoryCard from './component/ProductCategoryCard';
import { categories } from './helper';

const ProductCategory = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.grid}>
                {categories.map((item, index) => (
                    <View key={item.id} style={styles.item}>
                        <ProductCategoryCard image={item.image} name={item.name} index={index + 1} />
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
