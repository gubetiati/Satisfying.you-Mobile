import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { Divider } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialIcons';
import Home from './src/screens/Home';
import AcoesPesquisa from './src/screens/AcoesPesquisa';

const Drawer = createDrawerNavigator()
const Stack = createStackNavigator()

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <SafeAreaView style={{flex: 1}}>
      <View style={{alignItems: 'center'}}>
         <Text style={estilos.textoEmail}>usuario@dominio.com</Text>
         <Divider 
         style={{width: '82%', alignItems: 'center', height: 1}}
         theme={{ colors: { primary: 'white' } }}
         />
      </View>
     
        <DrawerItemList {...props} />
        <View style={estilos.textoDrawer} />

      <View style={estilos.footer}>
        <Pressable style={{flexDirection: 'row'}}>
            <Icon name="logout" size={30} color="white" />
            <Text style={{color: 'white', fontSize: 20, fontFamily: 'AveriaLibre-Regular', marginLeft: 10, marginTop: 2}}>Sair</Text>
        </Pressable>
      </View>
        
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
      fontSize: 20,
      color: 'white',
      margin: 10,
      fontFamily: 'AveriaLibre-Regular'
    },
    textoDrawer: {
      fontSize: 40,
      color: 'white',
      flex: 1,
      fontFamily: 'AveriaLibre-Regular'
    },
    footer: {
      display: 'flex',
      paddingTop: 140,
      marginLeft: 15
    }
})

export default App;
