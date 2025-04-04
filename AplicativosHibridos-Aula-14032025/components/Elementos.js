import {useState} from 'react';
import { Text, View, StyleSheet, Image ,TextInput, Button} from 'react-native';

export default function AssetExample() {

  const [nome,setNome] = useState('');
  const [mensagem,setMensagem] = useState(0);

  function handleClick(){
    setMensagem(mensagem+1)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Quantidade de vezes que esse botão foi clicado {mensagem} .
      </Text>
      
      <TextInput 
      style={styles.entrada}
      placeholder={'Digite o seu nome:'}
      onChangeText={
        (texto)=>{setNome(texto)}
        }
      ></TextInput>

      
      <View style={styles.botao}>
        <Button title='Salvar' 
        onPress={handleClick}></Button>
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
    width: 128,
    borderWidth:1,
  },
  botao: {
    width: 128,
    marginTop:10,
  }
});
