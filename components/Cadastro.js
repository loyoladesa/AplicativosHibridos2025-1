import { Button, Input } from '@rneui/base'
import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Cadastro (props)  {

    const [nome, setNome] = useState("")
    const [telefone, setTelefone] = useState("")
    const [email, setEmail] = useState("")
  
    async function handleSalvar () {
        try {
            let contatos = await AsyncStorage.getItem('contatos');
            contatos = contatos ? JSON.parse(contatos) : [];
            
            const novoContato = {
                id: Date.now().toString(),
                nome: nome,
                telefone: telefone,
                email: email,
            };

            contatos.push(novoContato);
            await AsyncStorage.setItem('contatos', JSON.stringify(contatos));

            setNome("");
            setTelefone("");
            setEmail("");
            props.click("dados"); 
        } catch (error) {
            alert("Erro ao salvar os dados!");
        }
    }

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Cadastro de Contatos</Text>
        <Input placeholder='Nome' value={nome} onChangeText={setNome} />
        <Input placeholder='Telefone' value={telefone} onChangeText={setTelefone} />
        <Input placeholder='Email' value={email} onChangeText={setEmail} />
        <Button title={'Salvar'} onPress={handleSalvar} />
        <View style={{ marginTop:10 }}>
            <Button onPress={() => props.click("dados")} title={'Voltar'} />
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold' },
});
