import React, { useState } from 'react';
import { View, ScrollView, Image, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
import { Card } from 'react-native-paper';
import { categories } from './data';
import { useNavigation } from '@react-navigation/native';


const screenWidth = Dimensions.get('window').width;


const Products = () => {
    
   const navigation = useNavigation();

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {categories.map((category, index) => (
                <TouchableOpacity key={index} onPress={() => navigation.navigate('Subcategories', { subcategories: category.subcategories })}>
                <Card style={styles.card}>
                    <Image source={category.image} style={styles.image} />
                    <Text style={styles.text}>{category.name}</Text>
                </Card>
                </TouchableOpacity>
            ))}
        </ScrollView>
    )
}

export default Products


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        padding: 10
    },
    card: {
        width: '30%',
        // width: (screenWidth - 48) / 2,
        marginBottom: 20,
        borderRadius: 10,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    image: {
        width: 80,
        height: 80,
        resizeMode: 'contain'
    },
    text: {
        textAlign: 'center',
        margin: 10,
        fontSize: 16,
        fontWeight: 'bold'
    }
});

