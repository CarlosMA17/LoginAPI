import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import RegisterScreen from '../screens/RegisterScreen';
import LoginScreen from '../screens/LoginScreen';
import { LogedProvider } from '../context/UserContext';
import LogedContext from '../context/UserContext';
import NullScreen from '../screens/NullScreen';

const Drawer = createDrawerNavigator();


const DrawerNavigation: React.FC = () => {
  const  { loged } = useContext(LogedContext);

  return (
          <NavigationContainer>
            <Drawer.Navigator initialRouteName="RegisterScreen">
              {loged ?
                <Drawer.Screen name="HomeScreen" component={HomeScreen} />:
                <>
                  <Drawer.Screen name='LoginScreen' component={LoginScreen} />
                  <Drawer.Screen name='RegisterScreen' component={RegisterScreen} />
                </>
              }
            </Drawer.Navigator>
          </NavigationContainer> 
  );
};

export default DrawerNavigation;