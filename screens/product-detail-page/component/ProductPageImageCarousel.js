import React from 'react';
import { View, Image, Text, StyleSheet, Dimensions } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

const { width } = Dimensions.get('window');

const ProductPageImageCarousel = ({ images, bestseller }) => {
  return (
    <View style={styles.carouselWrapper}>
      {bestseller && (
        <View style={styles.bestsellerLabel}>
          <Text style={styles.labelText}>Bestseller</Text>
        </View>
      )}
      <Carousel
        loop
        width={width}
        height={250}
        autoPlay={true}
        data={images}
        renderItem={({ item, index }) => (
          <View style={styles.imageWrapper}>
            <Image source={{ uri: item }} style={styles.productImage} />
            <View style={styles.pagination}>
              <Text style={styles.paginationText}>{`${index + 1} / ${images.length}`}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

export default ProductPageImageCarousel

const styles = StyleSheet.create({
  carouselWrapper: {
    position: 'relative',
    height: 250,
    marginBottom: 10,
  },
  imageWrapper: {
    width: '100%',
    height: '100%',
  },
  productImage: {
    width: '100%',
    height: '100%',
  },
  pagination: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingVertical: 5,
  },
  paginationText: {
    color: 'white',
    fontSize: 14,
  },
  bestsellerLabel: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: '#ff6347',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    zIndex: 1,
  },
  labelText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
});