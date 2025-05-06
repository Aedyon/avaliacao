import React from 'react';
import { Linking, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const App = () => {
  const nome = 'Seu Nome';
  const data = new Date().toLocaleDateString('pt-BR');
  const unidade = 'Codificar Aplicações de dispositivos movéis';
  const githubLink = 'https://github.com/seu-usuario/avaliacao';

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Avaliação de React Native</Text>
      <View style={styles.infoBox}>
        <Text style={styles.label}>Nome:</Text>
        <Text style={styles.value}>{nome}</Text>
      </View>
      <View style={styles.infoBox}>
        <Text style={styles.label}>Data:</Text>
        <Text style={styles.value}>{data}</Text>
      </View>
      <View style={styles.infoBox}>
        <Text style={styles.label}>Unidade:</Text>
        <Text style={styles.value}>{unidade}</Text>
      </View>
      <View style={styles.infoBox}>
        <Text style={styles.label}>Entregáveis:</Text>
        <TouchableOpacity onPress={() => Linking.openURL(githubLink)}>
          <Text style={[styles.value, styles.link]}>GitHub do projeto</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
  },
  infoBox: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
  },
  value: {
    fontSize: 16,
    marginTop: 4,
  },
  link: {
    color: '#1e90ff',
    textDecorationLine: 'underline',
  },
});

export default App;
