import 'react-native-gesture-handler';
import React from 'react';
import {  StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator  } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import TelaHome from './src/screens/TelaHome';
import AcoesPesquisa from './src/screens/AcoesPesquisa';
import CustomDrawerContent from './src/components/CustomDrawerContent';
import Agradecimento from "./src/screens/Agradecimento";
import Coleta from "./src/screens/Coleta";
import Relatorio from "./src/screens/Relatorio";
import Login from "./src/screens/Login";
import RecuperarSenha from "./src/screens/RecuperarSenha";
import NovaConta from "./src/screens/NovaConta";
import ModificarPesquisa from './src/screens/ModificarPesquisa'
import NovaPesquisa from './src/screens/NovaPesquisa'
import { Provider } from 'react-redux';
import { store } from './redux/store';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

/*function HomeStackScreen(){
  return(
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  )
}*/

const DrawerHome = () => (
  <Drawer.Navigator 
    screenOptions={{
      drawerStyle: {
        backgroundColor: '#2B1D62',
      },
      drawerActiveTintColor: 'white',
      drawerInactiveTintColor: 'white',
      labelStyle: {
        fontFamily: 'AveriaLibre-Regular'
      },
    }}
    drawerContent={props => <CustomDrawerContent {...props} />}
  >
    <Drawer.Screen 
      name="TelaHome" 
      component={TelaHome} 
      options={st.headerDrawer}
    />
  </Drawer.Navigator>
);

//Provider vem do redux, permite acessar os dados nas telas envolvidas
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
          <Stack.Screen name='Login' component={Login}/>
          <Stack.Screen name='NovaConta' component={NovaConta}/>
          <Stack.Screen name='RecuperarSenha' component={RecuperarSenha}/>
          <Stack.Screen name='NovaPesquisa' component={NovaPesquisa}/>
          <Stack.Screen name="Coleta" component={Coleta}/>
          <Stack.Screen name="Home" component={DrawerHome}/>
          <Stack.Screen name="Agradecimento" component={Agradecimento}/>
          <Stack.Screen name="Relatorio" component={Relatorio}/>
          <Stack.Screen name="AcoesPesquisa" component={AcoesPesquisa}/>
          <Stack.Screen name="ModificarPesquisa" component={ModificarPesquisa}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};


const st = StyleSheet.create({
    headerDrawer: {
        headerShown: true,
        headerStyle: {
            backgroundColor: '#2B1D62',
        },
        headerTitleStyle: {
            display: 'none',
        },
        headerTintColor:'white'
    },
})

export default App;
