import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Home from './src/screens/Home';
import AcoesPesquisa from './src/screens/AcoesPesquisa';

const Drawer = createDrawerNavigator()
const Stack = createStackNavigator()

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <SafeAreaView style={{flex: 1}}>
        <Text style={estilos.textoEmail}>usuario@dominio.com</Text>
        <View style={{height: 1, backgroundColor: 'white'}} />

        <DrawerItemList {...props} />
        <View style={estilos.textoDrawer} />

        {/* Adicionando uma divisão */}
        <View style={{height: 1, backgroundColor: 'gray'}} />

        <Pressable>
          <Icon name="logout" size={30} color="#900" />
          <Text style={{color: 'white'}}>Sair</Text>
        </Pressable>
      </SafeAreaView>
    </DrawerContentScrollView>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator 
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#2B1D62', // Sua cor de fundo aqui
        },
        drawerActiveTintColor: 'white',
        drawerInactiveTintColor: 'white'
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}>
        <Drawer.Screen 
          name="Home" 
          component={Home} 
          options= {estilos.header}
        />
        <Drawer.Screen 
          name="AcoesPesquisa" 
          component={AcoesPesquisa}
          options = {{headerShown: false}} 
        />
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
    },
    textoEmail: {
      fontSize: 15,
      color: 'white',
      margin: 10
    },
    textoDrawer: {
      fontSize: 20,
      color: 'white',
      flex: 1
    }
})

export default App;
