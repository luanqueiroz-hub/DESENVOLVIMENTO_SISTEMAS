import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {}
      <Text style={styles.nome}>Luan Queiroz</Text>
      
      {}
      <Text style={styles.subtitulo}>Desenvolvimento de Sistemas</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,                     
    justifyContent: 'center',    
    alignItems: 'center',         
    backgroundColor: '#0a0f1d',  
    padding: 24,
  },
  nome: {
    fontSize: 42,                 
    fontWeight: '900',            
    color: '#3b82f6',             
    letterSpacing: -1,            
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitulo: {
    fontSize: 15,                 
    fontWeight: '600',            
    color: '#94a3b8',             
    textTransform: 'uppercase',   
    letterSpacing: 1.5,          
    textAlign: 'center',
  },
});
