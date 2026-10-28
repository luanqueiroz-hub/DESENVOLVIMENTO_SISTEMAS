import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Imagem da Melancia */}
      <Image 
        source={{ uri: 'https://scfoods.fbitsstatic.net/img/p/melancia-mini-unidade-70680/257182.jpg?w=800&h=800&v=no-change&qs=ignore' }} 
        style={styles.avatar} 
      />
      
      {/* Nome do usuário em destaque */}
      <Text style={styles.nome}>Luan Queiroz</Text>

      {/* Subtítulo elegante combinando com o tema */}
      <Text style={styles.subtitulo}>Desenvolvimento de Sistemas</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,                     
    justifyContent: 'center',    
    alignItems: 'center',         
    backgroundColor: '#0d2b11',   // Verde bem escuro e elegante (estilo casca de melancia)
    padding: 24,
  },
  avatar: {
    width: 160,                   // Aumentei um pouco o tamanho para dar presença
    height: 160,                  
    borderRadius: 80,             // Ajustado para 80 (metade de 160) para o círculo ficar perfeito
    borderWidth: 4,               // Borda um pouco mais grossa para destacar
    borderColor: '#22c55e',       // Verde claro vibrante na borda (contrasta com o fundo)
    marginBottom: 24,             
  },
  nome: {
    fontSize: 36,                 // Nome maior e imponente
    fontWeight: '900',            
    color: '#ef4444',             // Vermelho melancia vivo e muito moderno
    letterSpacing: -0.5,
    textAlign: 'center',
    marginBottom: 6,
  },
  subtitulo: {
    fontSize: 14,
    fontWeight: '600',
    color: '#86efac',             // Verde pastel bem suave para harmonizar o layout
    textTransform: 'uppercase',   // Caixa alta para um acabamento minimalista
    letterSpacing: 1.5,
    textAlign: 'center',
  },
});
