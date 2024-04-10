import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/Home';
import AcoesPesquisa from './src/screens/AcoesPesquisa';

const Drawer = createDrawerNavigator()
const Stack = createStackNavigator()

const App = () => {
  return (
    
    <NavigationContainer>
    
    <Drawer.Navigator>
      <Drawer.Screen 
        name="Home" 
        component={Home} 
        options= {estilos.header}
      />
      <Drawer.Screen 
      name="AcoesPesquisa" 
      component={AcoesPesquisa}
      options = {{headerShown: false}} />
    </Drawer.Navigator>
    
  </NavigationContainer>

  );
};

const estilos = StyleSheet.create({
    header: {
        headerShown: true,
          headerStyle: {
            backgroundColor: '#2B1D62',
          },
          headerTitleStyle: {
            display: 'none',
          },
          headerTintColor:'white'
    }
})

export default App;
