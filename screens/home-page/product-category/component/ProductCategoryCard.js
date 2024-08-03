import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProductCategoryCard = ({ image, name, backgroundColor, borderColor }) => {
  return (
    <View style={[styles.cardContainer, { backgroundColor, borderColor }]}>
      <Image source={image} style={[styles.productImage, {}]} />
      <Text style={styles.productText}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    alignItems: 'center',
    borderRadius: 8,
    padding: 4,
    borderWidth: 1,
    // shadowColor: '#000',
    // shadowOpacity: 0.1,
    shadowRadius: 10,
    // elevation: 2,
  },
  productImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  productText: {
    color: 'black',
    textAlign: 'center',
    fontFamily: "san-bold",
    fontSize: 12
  },
});

export default ProductCategoryCard;
