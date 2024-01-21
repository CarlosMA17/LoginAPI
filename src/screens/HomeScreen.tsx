import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const HomeScreen = () => {

    return (
        <View style={styles.container}>
          <View style={styles.background}></View>
          <View style={styles.welcomeContainer}>
            <Text style={styles.title}>Bienvenido a la Aplicación</Text>
          </View>
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
      },
      background: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'lightblue', // Color de fondo del fondo
      },
      welcomeContainer: {
        padding: 20,
        borderRadius: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.8)', // Color de fondo del recuadro
        alignItems: 'center',
        elevation: 5, // Elevación para sombra (Android)
        shadowColor: 'black', // Color de la sombra (iOS)
        shadowOffset: { width: 0, height: 2 }, // Desplazamiento de la sombra (iOS)
        shadowOpacity: 0.3, // Opacidad de la sombra (iOS)
        shadowRadius: 5, // Radio de la sombra (iOS)
      },
      title: {
        fontSize: 24,
        marginBottom: 20,
      },
    });
export default HomeScreen