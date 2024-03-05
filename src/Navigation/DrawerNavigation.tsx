import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import RegisterScreen from '../screens/RegisterScreen';
import LoginScreen from '../screens/LoginScreen';
import LogedContext from '../context/UserContext';
import AudioApp from '../screens/AudioApp';

//se crea el drawer para poder usarlo
const Drawer = createDrawerNavigator();


const DrawerNavigation: React.FC = () => {
  
  //contexto para la variable que determina si esta logeado o no
  const  { loged } = useContext(LogedContext);

  return (
          <NavigationContainer>
            <Drawer.Navigator initialRouteName="Register">
              {loged ?
                <>
                  <Drawer.Screen name="Home" component={HomeScreen} />
                  <Drawer.Screen name="Audio" component={AudioApp} />
                </>:

                <>
                  <Drawer.Screen name='Login' component={LoginScreen} />
                  <Drawer.Screen name='Register' component={RegisterScreen} />
                </>
              }
            </Drawer.Navigator>
          </NavigationContainer> 
  );
};

export default DrawerNavigation;