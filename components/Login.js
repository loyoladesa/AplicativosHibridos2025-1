import React, { useState, useEffect } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { TextInput, Button, Card, Text } from 'react-native-paper';

import { database } from '../config/Firebase';
import 'firebase/auth';


export default function Login (props)  {
  const [user, setUser] = useState(false);
  const [username, setUsername] = useState('');
  const [senha, setSenha] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [usuarios, setUsuarios] = useState([]);

  const [mensagemLogin, setMensagemLogin] = useState('');

 

  // Escutar novas mensagens em tempo real
  useEffect(() => {
    const usuariosRef = database.ref('/login');

    const onValueChange = (snapshot) => {
          const data = snapshot.val();
          if (data) {
            setUsuarios(Object.values(data));
            console.log('Recuperado Usuarios do Banco')
          }else{
            console.log('Não foi possível recuperar os Usuários');
          }
    };

    usuariosRef.on('value',onValueChange);

    return ()=>{
          usuariosRef.off('value',onValueChange);
        }
  }, []);

  // Efetuar Login
  const handleSend = async () => {
    
    if (username.trim() && senha.trim()) {
      console.log('Existem Usuário e Senha Digitados pelo usuário')

      const newLogin = {
        username,
        senha        
      };
      console.log('login usuario: ' + newLogin.username)
      console.log('login senha: ' + newLogin.senha)      

      const usuarioEncontrado = usuarios.find(usuario => usuario.username === newLogin.username);

      if(usuarioEncontrado){
        console.log("Usuário encontrado: " + usuarioEncontrado.username + " já cadastrado");
        if (usuarioEncontrado.senha === newLogin.senha){
          console.log("Senha : " + senha + " validada")
          setUser(true);         
          props.click(usuarioEncontrado.username);
        }else{
          console.log("Senha : " + senha + "não  validada")
          alert("Senha errada!")
        }

      } else{
          let key = await database
              .ref('/login')
              .push(newLogin)
              .then((snapshot) => {
                console.log("Cadastrado com Sucesso!");
                setUsername("");
                setSenha("");
                return snapshot.key;
              })
              .catch((err) => {
                console.log("Erro ao cadastrar usuário: " + err)
                alert(err);
              });
          console.log('key: '+ key);
          //newMessage.id = key;
          database.ref('login/' + key).set(newLogin); 
          alert("Usuário Cadastrado com Sucesso!")
          setUser(true);         
          props.click(newLogin.username);                 
      }    
          
    }else{
      alert("Digite Usuário e Senha!")
    }    
  };

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Tela de Login
      </Text>
      <TextInput
        label="Usuário"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />
      <TextInput
        label="Senha"
        value={senha}
        onChangeText={setSenha}
        style={styles.input}
      />
      <Button mode="contained" onPress={handleSend} style={styles.button}>
        Enviar
      </Button>
      <Text style={styles.paragraph}>
        {mensagemLogin}
      </Text>      
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
  list: {
    flex: 1
  },
  card: {
    marginBottom: 10
  },
  username: {
    fontWeight: 'bold'
  }
});
