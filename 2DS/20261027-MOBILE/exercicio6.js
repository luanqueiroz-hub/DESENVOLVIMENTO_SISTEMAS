import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView } from 'react-native';

export default function ProductBanner() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cardContainer}>
        <Image
          source={{ uri: 'https://imgnike-a.akamaihd.net/1920x1920/10732552A1.jpg' }}
          style={styles.productImage}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.productTitle}>Tênis Esportivo Premium</Text>
          <Text style={styles.productPrice}>R$ 1.999,90</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  cardContainer: {
    width: 300,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 12,
    overflow: 'hidden',
  },
  productImage: {
    width: '100%',
    height: 200,
  },
  infoContainer: {
    padding: 16,
  },
  productTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  productPrice: {
    fontSize: 16,
    color: 'green',
    fontWeight: '600',
  },
});
