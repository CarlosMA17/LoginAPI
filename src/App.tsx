import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Header';
import RegisterScreen from './screens/RegisterScreen';

export default function App() {
  return (
    <>
      <Header title={'App practica'}></Header>
      <View style={styles.container}>
        <RegisterScreen />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
