import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, Dimensions } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

const { width } = Dimensions.get('window');

const ProductPageImageCarousel = ({ images, bestseller }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const paginationWidth = images.length * 20;
  return (
    <View style={styles.carouselWrapper}>
      {bestseller && (
        <View style={styles.bestsellerLabel}>
          <Text style={styles.labelText}>Bestseller</Text>
        </View>
      )}
      <Carousel
        loop
        width={width - 20}
        height={250}
        autoPlay={true}
        autoPlayInterval={4000}
        onSnapToItem={(index) => setActiveIndex(index)}
        data={images}
        renderItem={({ item }) => (
          <View style={styles.imageWrapper}>
            <Image source={{ uri: item }} style={styles.productImage} />
          </View>
        )}
      />
      <View style={[styles.paginationWrapper, { width: paginationWidth }]}>
        {images.map((_, index) => (
          <View
            key={index}
            style={[
              styles.paginationDot,
              activeIndex === index ? styles.activeDot : null,
            ]}
          />
        ))}
      </View>
    </View>
  );
};

export default ProductPageImageCarousel;

const styles = StyleSheet.create({
  carouselWrapper: {
    position: 'relative',
    height: 250,
    marginBottom: 10,
    borderRadius: 20,
    overflow: 'hidden',
    paddingHorizontal: 10,
    marginTop: 5
  },
  imageWrapper: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
    overflow: 'hidden',
  },
  productImage: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
    resizeMode: "cover"
  },
  paginationWrapper: {
    position: 'absolute',
    bottom: 15,
    left: '40%',
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderRadius: 20,
  },

  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: 'rgba(255, 255, 255, 0.92)',
  },
  bestsellerLabel: {
    position: 'absolute',
    top: 20,
    left: 20,
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
