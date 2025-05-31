import React, { useState, useEffect } from 'react';
import { FlatList, View, StyleSheet,TouchableOpacity } from 'react-native';
import { TextInput, Button, Card, Text } from 'react-native-paper';

import { database } from '../config/Firebase';
import 'firebase/auth';


export default function Mensagens (props)  {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState('');
  const [senha, setSenha] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

 

  // Escutar novas mensagens em tempo real
  useEffect(() => {
    const messagesRef = database.ref('/messages');

    const onValueChange = (snapshot) => {
          const data = snapshot.val();
          if (data) {
            setMessages(Object.values(data));
            console.log('Mensagens recuperadas do Banco de Dados')
          }else{
            console.log('Mensagens não recuperadas do Banco de Dados');
          }
    };

    messagesRef.on('value',onValueChange);

    return ()=>{
          messagesRef.off('value',onValueChange);
        }
  }, []);

  // Apagar mensagem
  const removerMensagem = async (id) => {
    database
      .ref('messages/' + id)
      .remove()
      .then(() => {
        console.log('Removido!');
        //setData((value) => value.filter((item) => item.id !== id));
      })
      .catch((error) => {
      console.log('Erro ao remover: ' + error)
      alert(error)});
  };

  // Enviar mensagem
  const handleSend = async () => {
    console.log("Botão Enviar Mensagem pressionado!")
    if (message.trim()) {
      
      setUsername(props.user);
      console.log("username enviando mensagem: "+ username);
      console.log("props-user: "+ props.user);
      const newMessage = {
        username: props.user,
        text: message,
        timestamp: Date.now()
      };
      
      let key = await database
            .ref('/messages')
            .push(newMessage)
            .then((snapshot) => {
              console.log("Mensagem Cadastrada com Sucesso!");
              setMessage("");
              return snapshot.key;
            })
            .catch((err) => {
              alert(err);
            });
      console.log('key - Banco de Dados: '+ key)
      newMessage.id = key;
      database.ref('messages/' + key).set(newMessage);      
    }    
  };

  // Renderização de cada mensagem a ser exibida
  const renderItem = ({ item }) => (
    <Card style={styles.card}>
      <Card.Content>
        <Text style={styles.username}>{item.username}</Text>
        <Text>{item.text}</Text>
        <TouchableOpacity onPress={() => removerMensagem(item.id)}>
              <Text style={styles.remover}>Remover</Text>
        </TouchableOpacity>
      </Card.Content>
    </Card>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.usernameTop}>
        Usuário : {props.user}
      </Text>
      
      <TextInput
        label="Mensagem"
        value={message}
        onChangeText={setMessage}
        style={styles.input}
      />
      <Button mode="contained" onPress={handleSend} style={styles.button}>
        Enviar
      </Button>
      
      <FlatList
        data={messages.sort((a, b) => a.timestamp - b.timestamp)}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        style={styles.list}
      />
      <Button mode="contained" onPress={() => props.click()} style={styles.button_logout}>
        Sair
      </Button>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginTop: 30
  },
  input: {
    marginBottom: 10
  },
  button: {
    marginBottom: 20
  },
  button_logout: {
    marginBottom: 20,
    backgroundColor:'red'
  },
  list: {
    flex: 1
  },
  card: {
    marginBottom: 10
  },
  username: {
    fontWeight: 'bold'
  },
  usernameTop: {
    fontWeight: 'bold',
    padding: 10,
    marginBottom: 10
  },
  remover: { color: 'red' },
});
