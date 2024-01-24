import { Link } from '@react-navigation/native';
import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import LogedContext from '../context/UserContext';

interface LoginScreenProps {
  navigation: any; 
}

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const  { loged, setLoged } = useContext(LogedContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('http://192.168.1.43:8888/users/login', {
            method: 'POST',
            headers: {
              Accept: "application/json",
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, password }),
          });

      if(response.ok) {
        setLoged(true)
        navigation.navigate('HomeScreen')
        console.log("coorecto, bienvenido")

      } else {
        console.log("el usuario no es correcto, puede registrarse si no lo ha hecho")
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    }
  };

  return (
    <View>
      <Text style={styles.label}>ingresa su nombre:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Ingresa tu nombre"
      />
      <Text style={styles.label}>Ingresa su email:</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Ingresa tu email"
        keyboardType="email-address"
      />

      <Text style={styles.label}>ingresa su contraseña: </Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Ingresa tu contraseña"
        secureTextEntry
      />
      <Button title="Iniciar Sesión" onPress={handleLogin} />
      <Link style={styles.Link} to='/RegisterScreen' >click para registrarse por primera vez </Link>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      justifyContent: 'center',
    },
    label: {
      fontSize: 16,
      margin: 16,
      marginBottom: 8,
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      margin: 16,
      paddingHorizontal: 8,
    },
    Link : {
      margin: 10,
      color: 'blue',
    },
  });

export default LoginScreen;


