import { StyleSheet, Text, View } from 'react-native';
import DrawerNavigation from './Navigation/DrawerNavigation';


const App: React.FC = () => {  

  return (
  <>
      <DrawerNavigation />
  </ >
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

export default App;