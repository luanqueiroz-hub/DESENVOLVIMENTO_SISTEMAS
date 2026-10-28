import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default function App() {
  const [filme, setFilme] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Qual é o seu filme favorito?"
        placeholderTextColor="#94a3b8"
        onChangeText={(txt) => setFilme(txt)}
        value={filme}
      />
      
      <Text style={styles.texto}>
        Seu filme favorito é: <Text style={styles.destaque}>{filme}</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 24, backgroundColor: '#f8fafc' },
  input: { height: 50, borderWidth: 1, borderColor: '#cbd5e1', borderRadius: 8, paddingHorizontal: 16, backgroundColor: '#ffffff', fontSize: 16, marginBottom: 16 },
  texto: { fontSize: 16, color: '#334155', textAlign: 'center' },
  destaque: { fontWeight: 'bold', color: '#0f172a' }
});
