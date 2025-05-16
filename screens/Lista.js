import { useContext } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

import { NomesContext } from '../components/NomesContext';

export default function ListaScreen() {
  const { nomes, removerNome } = useContext(NomesContext);

  return (
    <View style={styles.container}>
      <FlatList
        data={nomes}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{item}</Text>
              <TouchableOpacity
                style={styles.buttonExcluir}
                onPress={() => removerNome(index)}>

              <Text style={styles.buttonText}>X</Text>
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.emptyTexto}>Nenhum nome cadastrado.</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },

  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12, 
    borderRadius: 8,
    backgroundColor: 'lightgray',
    marginVertical: 8,
  },
  
  itemText: {
    fontSize: 16,
    color: '#333',
  },

  buttonExcluir: {
    backgroundColor: '#D80000',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 80000,
  },

  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },

  emptyTexto: {
    textAlign: 'center',
    fontSize: 18,
    color: '#999',
    marginTop: 20,
  },
});
