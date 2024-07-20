import React from 'react';
import { ScrollView, Image, Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';

const ProductSubcategory = ({ route }) => {
  const { subcategories } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {subcategories.map((subcategory, index) => (
        <Card key={index} style={styles.card}>
          <Image source={subcategory.image} style={styles.image} />
          <Text style={styles.text}>{subcategory.name}</Text>
        </Card>
      ))}
    </ScrollView>
  );
};

export default ProductSubcategory;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 10
  },
  card: {
    width: '30%',
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
