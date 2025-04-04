import React, {useState, useEffect } from 'react';
import { Text, View , Button, FlatList, StyleSheet} from 'react-native'
import { ListItem } from '@rneui/themed';
import { FAB } from '@rneui/base';
import {database} from '../config/Firebase';


export default function Dados (props) {

  
  const [data, setData] = useState([]);
  

const destroy = async (id) => {
    database
      .ref('contatos/' + id)
      .remove()
      .then(() => {
        console.log('Removido!');
        setData((value) => value.filter((item) => item.id !== id));
      })
      .catch((error) => alert(error));
  };

  useEffect(() => {
          
        const contatosRef = database.ref("/contatos");   
        //alert("Criada ref") ;     
          
        const onValueChange = (snapshot) => {
          const data = snapshot.val();
          if (data) {
            setData(Object.values(data));
            console.log('data')
          }else{
            console.log('No data');
          }
        };
        
        contatosRef.on('value',onValueChange); 
        /* testes */       

        return ()=>{
          contatosRef.off('value',onValueChange);
        }

      },[]);

      
  
    return (
      <View style={styles.container}>
        <Text style = {styles.title}> Lista de Dados </Text>       
        
        <FlatList 
          style = {styles.list}
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => 
          <View style={styles.item}>
            <Text style={styles.textoItem}>{item.nome}</Text>
            <Text style={styles.textoItem}>{item.telefone}</Text>
            <Text style={styles.textoItem}>{item.email}</Text>
          </View>}
        ></FlatList>

        <FAB
          visible={true}
          title='+'
          color="blue"
          placement='right'
          onPress={() => {props.click('cadastro')}}
          //onPress={handleRegister}
        />
      </View>
    )
  
}


const styles = StyleSheet.create({
  container:{
    display:'flex',
    flex: 1,
    overflow:'scroll'
  },
  title:{
    fontSize:22,
    color:'black',
    fontWeight:'bold'
  },
  input:{
    marginTop:16,
    borderWidth:1
  },
  list:{    
    padding: 8,
    borderRadius: 8,
    marginTop: 8,
    marginBottom: 14,
  },
  item:{
    backgroundColor:"#f0f0f0",
    padding: 8,
    borderRadius: 8,
    marginTop: 8,
    marginBottom: 8,    
  },
  textoItem:{
    fontSize:18,
  }
})

