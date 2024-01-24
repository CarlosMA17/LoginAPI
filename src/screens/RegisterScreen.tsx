import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import {  useContext, useState } from 'react';
import { UserRegisterResponse } from '../../types/UserRegisterResponse';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import LogedContext from '../context/UserContext';

interface RegisterProps {
  navigation: DrawerNavigationProp<any>;
}
const RegisterScreen: React.FC<RegisterProps> = ({ navigation }) => {

  const  { setLoged } = useContext(LogedContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleRegister = async () => {

    try {
        const response = await fetch('http://172.16.100.103:8888/users/register', {
          method: 'POST',
          headers: {
            Accept: "application/json",
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, email, password }),
        });
        
        if (response.status == 201) {
          const responseData: UserRegisterResponse = await response.json();
          console.log(responseData)
          setLoged(true)

          navigation.navigate('HomeScreen')

  
          return responseData


        } else if (response.status == 400) {
          const errorResponse = await response.json();
          console.log(errorResponse)
        }
        
      } catch (error) {
        console.error('Error al registrar usuario:', error);
      }
    };


  return (
      <View style={styles.container}>
        <Text style={styles.label}>Ingresa su nombre:</Text>
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

        <Text style={styles.label}>ingresa su ontraseña:</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="Ingresa tu contraseña"
          secureTextEntry
        />

        <Button title="Registrar" onPress={handleRegister} />
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
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});

export default RegisterScreen;

