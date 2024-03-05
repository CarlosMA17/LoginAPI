import { Audio } from 'expo-av';
import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Animated, { useSharedValue } from 'react-native-reanimated';
import LogedContext from '../context/UserContext';


const HomeScreen: React.FC = () => {
  //se instancia el contexto con el login
  const { loged, setLoged } = useContext(LogedContext);

  //funcion que setea el login a false para deslogearse y con el drawer
  //navegar automaticamente al register o al login
  const logout = async () => {
    try {
      setLoged(false)
    } catch (error) {
      console.error('Error al borrar la grabación:', error)
    }
  }

    return (
        <View style={styles.container}>
          <View style={styles.background}></View>
          <View style={styles.welcomeContainer}>
            <Text style={styles.title}>Bienvenido a la Aplicación</Text>
          </View>
          
          <Button title="cerrar sesion" onPress={() => logout()} />
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
        backgroundColor: 'lightblue', 
      },
      welcomeContainer: {
        marginTop: 20,
        padding: 20,
        borderRadius: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.8)', 
        alignItems: 'center',
        elevation: 5, 
        shadowColor: 'black', 
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3, 
        shadowRadius: 5, 
      },
      title: {
        fontSize: 24,
        marginBottom: 20,
      },
    });
export default HomeScreen