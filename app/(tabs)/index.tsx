import React from 'react';
import { Image, StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Início</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>About</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Config</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Contate-me</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Image
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoCYGtL9Wg-m3Eo9VMmVirTY4wEQKn-1H2yg&s' }} // URL da imagem
          style={styles.image}
          resizeMode="cover" // Ajusta a imagem
        />
        <TouchableOpacity style={styles.buttonImage}>
          <Text style={styles.buttonText}>Pressione-me</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.containerCard}>
        <View style={styles.card}></View>
        <View style={styles.card}></View>
        <View style={styles.card}></View>
      </View>

      <View style={styles.footer}>        
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Início</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>About</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Config</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Contate-me</Text>
        </TouchableOpacity></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flex: 1,
    backgroundColor: "#3C433C",
    alignItems: 'center',
    gap: 10
  },
  header: {
    marginTop: 150,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    padding: 10,
    backgroundColor: '#3C433C',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    padding: 10,
    backgroundColor: '#3C433C',
  },
  button: {
    backgroundColor: '#43ED34',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
  },
  image: {
    position: 'static',
    height: 200,
    width: 400,
    borderRadius: 5,
  },
  buttonImage: {
    position: 'absolute',
    left: 250,
    top: 75,
    backgroundColor: '#3C433C',
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
  },
  containerCard: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    padding: 10,
    backgroundColor: '#f8f8f8',
  },
  card: {
    width: 120,
    height: 250,
    backgroundColor: '#3C433C',
    borderRadius: 5,
  }
});
