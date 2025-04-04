import {useState} from 'react';
import { Text, SafeAreaView, StyleSheet } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

import Elementos from './components/Elementos';
import Contador from './components/Contador';
import Sorteio from './components/Sorteio';
import ChapeuSeletor from './components/ChapeuSeletor';

export default function App() {

  const [opcao,setOpcao] = useState(true);

  function clickMenu(){
      setOpcao(!opcao);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
       Menu
      </Text>
      <Card>
        {opcao ? <Sorteio click={clickMenu}/> : <ChapeuSeletor/>}      
        
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
  title: {
    margin:10,
    marginBottom:15,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
