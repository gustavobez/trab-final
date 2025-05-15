import { useContext } from 'react';
import { View, Text, TouchableOpacity, Button, StyleSheet, Image } from 'react-native';


export default function InicioScreen({ navigation }) {
  return (
    
    <View style={styles.container}>

      <View style={styles.cabecalho}>
        <Text style={styles.textocabecalho}> Sport Club Internacional </Text>
      </View>

        <Text style={styles.titulo}>Bem-vindo ao Internacional!</Text>
        <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/SC_Internacional_Brazil_Logo.svg/250px-SC_Internacional_Brazil_Logo.svg.png' }} style={styles.imagem}/>

          <View>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Lista')}> 
              <Text style={styles.buttonText}>Ver Lista</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Cadastro')}>
              <Text style={styles.buttonText}>Cadastro</Text>
            </TouchableOpacity>

            
          </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    padding: 20,
    backgroundColor: '#FFFFFF',
    alignItems: 'Center' 
  },

  
  imagem: {
    width: 200,
    height: 200, 

  },

  button: {
    backgroundColor: '#D80000', 
    padding: 14,
    borderRadius: 8,
    marginVertical: 10,
  },

  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },

   titulo:  {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#D80000',
    marginBottom: 20,
    textAlign: 'center'
   },

    cabecalho: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 70,
    width: '100%',
    paddingVertical: 20,
    backgroundColor: '#D80000',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    },

    textocabecalho: {
      fontSize: 28,
      fontWeight: 'bold',
      color: '#FFFFFF',
      textAlign: 'center'
    },
   });


















