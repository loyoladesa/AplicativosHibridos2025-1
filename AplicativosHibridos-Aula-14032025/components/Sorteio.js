import React, { Component,useState, useEffect } from 'react';
import { Text, SafeAreaView, StyleSheet } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';
import Elementos from './components/Elementos';
import Contador from './components/Contador';
import Sorteio from './components/Sorteio';
import Menu from './components/Menu';
import Dados from './components/Dados';


export default function App() {

  const [opcao, setOpcao] = useState("Menu");


  async function clickMenu(valorOpcao: React.SetStateAction<string>){
      console.log(valorOpcao);          
      //setOpcao(valorOpcao)
      //console.log(opcao)
      
  }


  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>
        App de Exemplo
      </Text>
      <Card>
        <Sorteio/>
      </Card>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
