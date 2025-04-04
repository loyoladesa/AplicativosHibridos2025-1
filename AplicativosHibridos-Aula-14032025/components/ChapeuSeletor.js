import {useState} from 'react';
import { Text, View, StyleSheet, Image ,TextInput, Button} from 'react-native';

export default function AssetExample() {

  const [nome,setNome] = useState('');
  const [mensagem,setMensagem] = useState('');
  const [numeroInicial,setNumeroInicial] = useState(0);
  const [numeroFinal,setNumeroFinal] = useState(3);

  function handleClick(){
    aleatorio = Math.random();
    quantidade = numeroFinal - numeroInicial + 1;
    resultado = Math.floor(quantidade * aleatorio) + Number(numeroInicial);
    casas=['sonserina','corvinal','lufa-lufa','grifinoria'];
    setMensagem(casas[resultado]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Você vai para  {mensagem} .
      </Text>
      
      

      
      <View style={styles.botao}>
        <Button title='Sortear' 
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
    marginTop:10,
  },
  botao: {
    width: 128,
    marginTop:10,
  }
});
