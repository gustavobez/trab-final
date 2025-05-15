import { useState, useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { NomesContext } from '../components/NomesContext';
import CampoTexto from '../components/CampoTexto';

export default function CadastroScreen({ navigation }) {
  const [nome, setNome] = useState('');
  const { adicionarNome, nomes } = useContext(NomesContext);

const adicionar = () => {
  const nomeLimpo = nome.trim();

  if (nomeLimpo === '') {
    alert('Digite um nome válido.');
    return;
  }

  if (nomes.some(n => n.toLowerCase() === nomeLimpo.toLowerCase())) {
    alert('Esse nome já foi adicionado.');
    return;
  }

  adicionarNome(nomeLimpo);
  setNome('');
};


  return (
    <>
      <View style={styles.cabecalho}>
        <Text style={styles.textoCabecalho}>Seja sócio do colorado!</Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.titulo}>Cadastro</Text>

        <CampoTexto
          value={nome}
          onChangeText={setNome}
          placeholder="Digite o nome"
        />

        <TouchableOpacity style={styles.button} onPress={adicionar}>
          <Text style={styles.buttonText}>Adicionar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Lista')}>
          <Text style={styles.buttonText}>Ver Lista</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Inicio')}>
          <Text style={styles.buttonText}>Início</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  cabecalho: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 70,
    backgroundColor: '#D80000',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },

  textoCabecalho: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },

  container: { 
    flex: 1, 
    justifyContent: 'center', 
    padding: 20, 
    backgroundColor: '#FFFFFF', 
    alignItems: 'center',
    paddingTop: 90
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#D80000',
    marginBottom: 20,
    textAlign: 'center',
  },

  button: {
    backgroundColor: '#D80000',
    padding: 14,
    borderRadius: 8,
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
  },

  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
