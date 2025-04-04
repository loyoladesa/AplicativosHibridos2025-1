
import React, { Component,useState, useEffect } from 'react';
import { Text, SafeAreaView, StyleSheet } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';
import Dados from './components/Dados';
import Cadastro from './components/Cadastro';

export default function App() {
  const [opcao, setOpcao] = useState("dados");


async function clickMenu(valorOpcao: React.SetStateAction<string>){
      //console.log('clicado cadastrar');          
      setOpcao(valorOpcao)
      //alert(valorOpcao)
      
  }


  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>        
      </Text>      
      {opcao == "cadastro" && <Cadastro click={clickMenu}></Cadastro>}
      {opcao == "dados" && <Dados click={clickMenu}></Dados>}
      
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
