import React from 'react';
import { View, TouchableOpacity, StyleSheet, Image, Text, TextInput } from 'react-native';
import Header from '../../assets/components/Header'
import Icon from 'react-native-vector-icons/MaterialIcons'
//import { createStackNavigator } from '@react-navigation/stack';


const Home = () => {
  return (
    <View style={estilos.container}>
     <View style={estilos.barraPesquisa}>
        <Icon name="search" size={30} color="gray"></Icon>
        <TextInput
          style={estilos.input}
          placeholder="Insira o termo de busca..."
        />
      </View>
        
      <View style={estilos.containerCards}>
        <TouchableOpacity>
          <View style={estilos.card}>
            <Image
                source={require('../../assets/images/secomp.png')}
                style={estilos.image}/>
              <Text style={estilos.tituloCard}>SECOMP 2023</Text>
              <Text style={estilos.textoData}>10/10/2023</Text>
          </View>
          
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={estilos.card}>
            <Image
                  source={require('../../assets/images/ubuntu.png')}
                  style={estilos.image}
                />
              <Text style={estilos.tituloCard}>UBUNTU 2022</Text>
              <Text style={estilos.textoData}>05/06/2022</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={estilos.card}>
            <Image
                  source={require('../../assets/images/meninas.png')}
                  style={estilos.image}
                />
            <Text style={estilos.tituloCard}>MENINAS CPU </Text>
            <Text style={estilos.textoData}>01/04/2022</Text>
            </View>
            
        </TouchableOpacity>
        
      </View>
    </View>
  );
};

const estilos = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#372775',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
    paddingTop: 20
    
  },
  containerCards: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  card: {
    width: 200,
    height: 200,
    backgroundColor: 'white',
    borderRadius: 10,
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden', 
  },
  image: {
    height: '40%', 
    width: '40%', 
    marginBottom: 10,
  },
  tituloCard: {
    fontSize: 25,
    color: '#3F92C5',
    fontFamily: 'AveriaLibre-Regular'
  },
  textoData: {
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 16
  },
  barraPesquisa: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 2,
    height: 40,
    width: '90%',
    marginBottom: 20,
    paddingLeft: 10,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 17,
  },
  containerHeader: {
    backgroundColor: '#372775',
    flex: 0.5,
    flexDirection: 'row',
  }
});

export default Home;
