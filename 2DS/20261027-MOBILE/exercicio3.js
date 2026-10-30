import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.cartao}>
        <Text style={styles.titulo}>No Alto Daquele Cume</Text>
        
        <Text style={styles.texto}>
          No alto daquele cume,{"\n"}Plantei uma roseira.{"\n"}O vento no cume bate,{"\n"}A rosa no cume cheira.{"\n\n"}
          Quando vem a chuva fina,{"\n"}Salpicos no cume caem.{"\n"}Formigas no cume entram,{"\n"}Abelhas do cume saem.{"\n\n"}
          Quando cai a chuva grossa,{"\n"}A água no cume desce.{"\n"}O barro no cume escorre,{"\n"}O mato no cume cresce.{"\n\n"}
          Então, quando cessa a chuva,{"\n"}No cume volta a alegria.{"\n"}Pois torna a brilhar de novo{"\n"}O Sol que no cume ardia.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0f0f0' },
  cartao: { backgroundColor: '#ffffff', borderRadius: 12, padding: 20, width: '85%' },
  titulo: { fontSize: 20, fontWeight: 'bold', color: 'rgb(2, 28, 143)', textAlign: 'center', marginBottom: 12 },
  texto: { fontWeight: 'bold', color: '#000270', textAlign: 'center', lineHeight: 20 }
});
