import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Badge } from 'react-native-paper';

const CommonHeader = ({ navigation, title }) => {
    return (
        <View style={styles.headerContainer}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconContainer}>
                <Icon name="arrow-back" size={24} color="#000" />
            </TouchableOpacity>
            <Text style={styles.title}>{title}</Text>
            <TouchableOpacity style={styles.iconContainer}>
                <Icon name="shopping-bag" size={24} color="#000" />
                <Badge style={styles.badge}>3</Badge>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: '#f5f5f5',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        paddingTop:25
    },
    iconContainer: {
        padding: 5,
        position: 'relative',
    },
    title: {
        fontSize: 18,
        fontFamily: 'san-bold',
    },
    badge: {
        position: 'absolute',
        top: -4,
        right: -4,
        backgroundColor: '#FF6347',
        color: 'white',
    },
});

export default CommonHeader;
