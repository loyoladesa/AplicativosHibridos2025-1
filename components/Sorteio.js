// components/Sorteio.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, ScrollView } from 'react-native';

export default function Sorteio() {
  const [premio1, setPremio1] = useState('');
  const [premio2, setPremio2] = useState('');
  const [participante1, setParticipante1] = useState('');
  const [participante2, setParticipante2] = useState('');
  const [participante3, setParticipante3] = useState('');
  const [participante4, setParticipante4] = useState('');
  const [participante5, setParticipante5] = useState('');
  const [resultado, setResultado] = useState([]);

  function realizarSorteio() {
    const premios = [premio1.trim(), premio2.trim()].filter(Boolean);
    const participantes = [
      participante1.trim(),
      participante2.trim(),
      participante3.trim(),
      participante4.trim(),
      participante5.trim()
    ].filter(Boolean);

    if (premios.length < 2 || participantes.length < 5) {
      alert('Preencha dois prêmios e cinco participantes.');
      return;
    }

    const participantesDisponiveis = [];
    for (let i = 0; i < participantes.length; i++) {
      participantesDisponiveis.push(participantes[i]);
    }

    const ganhadores = [];

    for (let i = 0; i < 2; i++) {
      const indexSorteado = Math.floor(Math.random() * participantesDisponiveis.length);
      const nomeSorteado = participantesDisponiveis.splice(indexSorteado, 1)[0];
      ganhadores.push({ premio: premios[i], nome: nomeSorteado });
    }

    setResultado(ganhadores);
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' }}
        style={styles.logo}
      />
      <Text style={styles.titulo}>Sorteador de Prêmios</Text>

      <Text style={styles.label}>Prêmio 1:</Text>
      <TextInput style={styles.input} value={premio1} onChangeText={setPremio1} placeholder="Ex: Camisa" />

      <Text style={styles.label}>Prêmio 2:</Text>
      <TextInput style={styles.input} value={premio2} onChangeText={setPremio2} placeholder="Ex: Caneca" />

      <Text style={styles.label}>Participante 1:</Text>
      <TextInput style={styles.input} value={participante1} onChangeText={setParticipante1} placeholder="Ex: Ana" />

      <Text style={styles.label}>Participante 2:</Text>
      <TextInput style={styles.input} value={participante2} onChangeText={setParticipante2} placeholder="Ex: João" />

      <Text style={styles.label}>Participante 3:</Text>
      <TextInput style={styles.input} value={participante3} onChangeText={setParticipante3} placeholder="Ex: Carlos" />

      <Text style={styles.label}>Participante 4:</Text>
      <TextInput style={styles.input} value={participante4} onChangeText={setParticipante4} placeholder="Ex: Maria" />

      <Text style={styles.label}>Participante 5:</Text>
      <TextInput style={styles.input} value={participante5} onChangeText={setParticipante5} placeholder="Ex: Luiza" />

      <View style={styles.botao}>
        <Button title="Sortear" onPress={realizarSorteio} />
      </View>

      {resultado.length > 0 && (
        <View style={styles.resultadoContainer}>
          <Text style={styles.resultadoTitulo}>Resultados:</Text>
          {resultado.map((item, index) => (
            <Text key={index} style={styles.resultadoTexto}>
              {item.nome} ganhou o prêmio: {item.premio}
            </Text>
          ))}
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    alignSelf: 'flex-start',
    fontWeight: 'bold',
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    width: '100%',
    padding: 10,
    marginTop: 5,
  },
  botao: {
    marginTop: 20,
    width: '100%',
  },
  resultadoContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  resultadoTitulo: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  resultadoTexto: {
    fontSize: 16,
    marginTop: 10,
  },
});
