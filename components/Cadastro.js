import { Button, Input } from '@rneui/base'
import React, { Component,useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { database } from '../config/Firebase';

export default function Cadastro (props)  {

    const [nome, setNome] = useState("")
    const [telefone, setTelefone] = useState("")
    const [email, setEmail] = useState("")
    const [voltar, setVoltar] = useState("dados")
  
    async function handleSalvar (){

        data = {
            nome:nome,
            telefone:telefone,
            email:email,
        };

        let key = await database
            .ref('/contatos')
            .push(data)
            .then((snapshot) => {
              console.log("Cadastrado com Sucesso!");
              setNome("");
              setTelefone("");
              setEmail("");
              return snapshot.key;
            })
            .catch((err) => {
              alert(err);
            })

        data.id = key;
        database.ref('contatos/' + key).set(data);   
        props.click(voltar);    

    }

    return (
      <View style={styles.container}>
        <Text style = {styles.title}> Cadastro de Contatos </Text>
        <View style = {{marginTop:16}}>
            <Input style = {styles.input}
              placeholder='Nome'
              value={nome}
              onChangeText={(text) => setNome(text)}
            ></Input>
            <Input 
              style = {styles.input} 
              placeholder='Telefone'
              value={telefone}
              onChangeText={(text) => setTelefone(text)}
              ></Input>
            <Input 
              style = {styles.input}
              placeholder='Email'
              value={email}
              onChangeText={(text) => setEmail(text)}
              ></Input>

            <Button 
              title={'Salvar'}
              onPress={handleSalvar}
              ></Button>
            <View style = {{marginTop:10}}>
                <Button onPress={() => {props.click(voltar)}} title={'Voltar'}></Button>
            </View>
            
        </View>
      </View>
    )
  
}

const styles = StyleSheet.create({
  container:{
    display:'flex',
    flex: 1
  },
  title:{
    fontSize:22,
    color:'black',
    fontWeight:'bold'
  },
  input:{
    marginTop:16,
    borderWidth:1
  }
})
