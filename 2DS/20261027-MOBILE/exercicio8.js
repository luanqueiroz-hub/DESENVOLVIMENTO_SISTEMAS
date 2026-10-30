import React, { useState } from 'react';
import { View, Text, Image, TextInput, StyleSheet, SafeAreaView } from 'react-native';

export default function BusinessCard() {
  const [recado, setRecado] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cardContainer}>
        <Image
          source={{ uri: 'https://cultura.uol.com.br/upload/tvcultura/noticias/20250306193937_marina.jpg' }}
          style={styles.profileImage}
        />

        <Text style={styles.nameText}>Marina Silva</Text>
        <Text style={styles.roleText}>Desenvolvedora Mobile Senior</Text>

        <TextInput
          style={styles.input}
          placeholder="Deixe um recado..."
          value={recado}
          onChangeText={setRecado}
        />

        {recado.length > 0 && (
          <View style={styles.messageBox}>
            <Text style={styles.messageLabel}>Recado digitado:</Text>
            <Text style={styles.messageText}>{recado}</Text>
          </View>
        )}
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
    width: 320,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  nameText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  roleText: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 45,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: '#fafafa',
    marginBottom: 16,
  },
  messageBox: {
    width: '100%',
    backgroundColor: '#f0f4f8',
    padding: 12,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#007aff',
  },
  messageLabel: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#007aff',
    marginBottom: 4,
  },
  messageText: {
    fontSize: 14,
    color: '#444',
  },
});
