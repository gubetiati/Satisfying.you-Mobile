import 'react-native-gesture-handler';
import React from 'react';
import {  StyleSheet, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator  } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Home from './src/screens/Home';
import AcoesPesquisa from './src/screens/AcoesPesquisa';
import CustomDrawerContent from './src/components/CustomDrawerContent';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function HomeStackScreen(){
  return(
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  )
}

function AcoesPesquisaStackScreen(){
  return(
    <Stack.Navigator>
      <Stack.Screen
        name="AcoesPesquisa"
        component={AcoesPesquisa}
        options={({ navigation }) => ({
          headerShown: true,
          headerStyle: {
            backgroundColor: '#2B1D62'
          },
          headerTitle: 'Pesquisa',
          headerTitleStyle:{
            fontFamily:'AveriaLibre-Regular',
            fontSize: 30
          },
          headerTintColor:'white',
          headerLeft: () => (
            <Pressable
              onPress={() => navigation.goBack()}
              style={{ marginLeft: 10 }}
            >
              <Icon name="arrow-back" size={30} color="#573FBA" />
            </Pressable>
          )
        })}
      />
    </Stack.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer>
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
          name="Home" 
          component={HomeStackScreen} 
          options={st.headerDrawer}
        />
        <Drawer.Screen 
          name="AcoesPesquisa" 
          component={AcoesPesquisaStackScreen}
          options={{ headerShown: false }} 
        />
      </Drawer.Navigator>
    </NavigationContainer>
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
