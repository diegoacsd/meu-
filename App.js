import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';

export default function App() {
  const [endereco, setEndereco] = useState(null);
  const [cep, setCep] = useState(null);

  const getCep = async (cep) => {
    try {
      const endpoint = `https://viacep.com.br/ws/${cep}/json/`;
      const response = await fetch(endpoint);
      const data = await response.json();
      setEndereco(data.logradouro);
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível carregar os dados do CEP');
    }
  }

  return (
    <View style={styles.container}>
      <TextInput style={styles.nameText}
        onChangeText={setCep}
        placeholder="Insira o CEP"
      />

      <Button
        title="Consultar CEP"
        onPress={() => getCep(cep)}
      />

 <View style={styles.nameContainer}>
        <Text style={styles.nameText}>Diego Augusto Castro Silva</Text>


      {endereco && (
        <View style={styles.addressContainer}>
          <Text style={styles.addressText}>Rua: {endereco}</Text>
        </View>
      )}

     
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addressContainer: {
    backgroundColor: '#333',
    borderRadius: 8,
    padding: 8,
    marginTop: 16,
  },
  addressText: {
    color: '#fff',
  },
  nameText: {
      color: 'white',
    fontSize: 20,
  },
}); 