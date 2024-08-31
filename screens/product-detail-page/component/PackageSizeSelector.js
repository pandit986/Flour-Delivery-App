import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const packageSizes = [
    { size: '1kg', price: 100 },
    { size: '2kg', price: 180 },
    { size: '5kg', price: 400 },
];

const PackageSizeSelector = ({ selectedPackage, onSelectPackage }) => {
    return (
        <View style={styles.container}>
            {packageSizes.map((pkg, index) => (
                <TouchableOpacity key={index} onPress={() => onSelectPackage(pkg)}>
                    <LinearGradient
                        colors={selectedPackage?.size === pkg.size ? ['#ff6347', '#ff4500'] : ['#e0e0e0', '#bdbdbd']}
                        style={styles.package}
                    >
                        <Text style={styles.packageSize}>{pkg.size}</Text>
                        <Text style={styles.packagePrice}>₹{pkg.price}</Text>
                    </LinearGradient>
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginVertical: 10,
    },
    package: {
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 25,
        borderRadius: 10,
    },
    packageSize: {
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold',
    },
    packagePrice: {
        fontSize: 14,
        color: '#fff',
    },
});

export default PackageSizeSelector;