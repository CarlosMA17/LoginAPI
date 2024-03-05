import { StyleSheet, Text, View } from 'react-native';
import DrawerNavigation from './Navigation/DrawerNavigation';
import { LogedProvider } from './context/UserContext';

//componente app que renderiza el drawer con el contexto del login
const App: React.FC = () => {  

  return (
    <LogedProvider>
      <DrawerNavigation />
  </LogedProvider >
  );
}
export default App;