import { StyleSheet, Text, View } from 'react-native';
import DrawerNavigation from './Navigation/DrawerNavigation';
import { LogedProvider } from './context/UserContext';


const App: React.FC = () => {  

  return (
    <LogedProvider>
      <DrawerNavigation />
  </LogedProvider >
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