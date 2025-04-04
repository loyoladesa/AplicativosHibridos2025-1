import React, { Component,useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, TextInput, Button} from 'react-native';






export default function Sorteio() {

  
  const [numero,setNumero] = useState(0);
  const [numeroInicial,setNumeroInicial] = useState(0);
  const [numeroFinal,setNumeroFinal] = useState(0);
  

  function handleBotaoSalvar(){
    //alert('Clicado!')
    aleatorio = Math.random();
    quantidade = numeroFinal - numeroInicial + 1;
    resultado = Math.floor(quantidade*aleatorio) + Number(numeroInicial);
    setNumero(resultado);
    
  }

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Sorteio
      </Text>
      <Text style={styles.paragraph}>
        Número Sorteado: {numero}
      </Text>
       <TextInput 
        placeholder={'Número inicial:'} 
        style={styles.entrada}
        onChangeText={(texto)=>{setNumeroInicial(texto)}}
        ></TextInput>
         <TextInput 
        placeholder={'Número final:'} 
        style={styles.entrada}
        onChangeText={(texto)=>{setNumeroFinal(texto)}}
        ></TextInput>
      
      <View style={styles.botao}>
        <Button title='Sorteio' onPress={handleBotaoSalvar}></Button>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 128,
    width: 128,
  },
  entrada: {
    borderWidth:1,
    alignSelf:'center',
    width: 128,
    marginTop:10,
  },
  botao: {
    width: 128,
    marginTop:10,
  },
});
