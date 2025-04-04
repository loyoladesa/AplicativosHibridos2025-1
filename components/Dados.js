import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';
import { FAB } from '@rneui/base';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Dados (props) {
    const [data, setData] = useState([]);

    useEffect(() => {
        carregarDados();
    }, []);

    async function carregarDados() {
        try {
            let contatos = await AsyncStorage.getItem('contatos');
            setData(contatos ? JSON.parse(contatos) : []);
        } catch (error) {
            alert("Erro ao carregar os contatos!");
        }
    }

    async function destroy(id) {
        try {
            let contatos = await AsyncStorage.getItem('contatos');
            contatos = contatos ? JSON.parse(contatos) : [];
            const novosContatos = contatos.filter(item => item.id !== id);
            await AsyncStorage.setItem('contatos', JSON.stringify(novosContatos));
            setData(novosContatos);
        } catch (error) {
            alert("Erro ao remover o contato!");
        }
    }

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Lista de Contatos</Text>
        <FlatList 
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => (
            <View style={styles.item}>
              <Text style={styles.textoItem}>{item.nome}</Text>
              <Text style={styles.textoItem}>{item.telefone}</Text>
              <Text style={styles.textoItem}>{item.email}</Text>
              <Text style={styles.delete} onPress={() => destroy(item.id)}>Remover</Text>
            </View>
          )}
        />
        <FAB title='+' color="blue" placement='right' onPress={() => props.click('cadastro')} />
      </View>
    )
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold' },
  item: { backgroundColor:"#f0f0f0", padding: 8, marginTop: 8 },
  textoItem: { fontSize: 18 },
  delete: { color: 'red', marginTop: 4, fontSize: 16, textAlign: 'right' }
});
