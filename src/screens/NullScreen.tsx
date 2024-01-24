import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import {  useContext, useState } from 'react';
import { UserRegisterResponse } from '../../types/UserRegisterResponse';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import LogedContext from '../context/UserContext';

const RegisterScreen: React.FC = () => {


  return (
      <View style={styles.container}>
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

