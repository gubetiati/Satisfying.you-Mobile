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
          style={estilos.divider}
          theme={{ colors: { primary: 'white' } }}
          />
        </View>

        {/*Por enquanto está navegando para AcoesPesquisa*/}
        <DrawerItem
          label={() => (
            <View style={estilos.itemDrawer}>
              
              <Icon name="description" 
                size={30} 
                color="white" 
                style={{ marginRight: 10 }} />

              <Text style={estilos.labelDrawer}>Pesquisas</Text>
            </View>
          )}
          onPress={() => props.navigation.navigate('AcoesPesquisa')}
        />
      
      </SafeAreaView>
      <View style={estilos.footer}>
        <Pressable style={{flexDirection: 'row'}}>
            <Icon name="logout" size={30} color="white" />
            <Text style={estilos.itemSair}>Sair</Text>
        </Pressable>
      </View>
    </DrawerContentScrollView>
  );
}

function HomeStackScreen(){
  return(
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AcoesPesquisa"
        component={AcoesPesquisa}
        options={{headerShown: true}}
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
          options={estilos.header}
        />
        <Drawer.Screen 
          name="AcoesPesquisa" 
          component={AcoesPesquisa}
          options={{ headerShown: false }} 
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
      fontSize: 25,
      color: 'white',
      margin: 10,
      fontFamily: 'AveriaLibre-Regular',
    },
    footer: {
      flex: 1,
      marginLeft: 30,
      marginTop: 180
    },
    divider: {
      width: '82%', 
      alignItems: 'center', 
      height: 1
    },
    labelDrawer: {
      fontFamily: 'AveriaLibre-Regular', 
      color: 'white', 
      fontSize: 25 
    },
    itemDrawer: {
      flexDirection: 'row', 
      alignItems: 'center', 
      marginLeft: 10 
    },
    itemSair: {
      color: 'white', 
      fontSize: 25, 
      fontFamily: 'AveriaLibre-Regular', 
      marginLeft: 10, 
    }
})

export default App;
