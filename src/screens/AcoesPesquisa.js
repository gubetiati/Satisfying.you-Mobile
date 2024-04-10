import React from 'react';
import { View, TouchableOpacity, StyleSheet, Image, Text } from 'react-native';
//import { createStackNavigator } from '@react-navigation/stack';


const AcoesPesquisa = () => {
  return (
    <View style={estilos.container}>
      <View style={estilos.containerCards}>
        <TouchableOpacity>
          <View style={estilos.card}>
            <Image
                source={require('../../assets/images/modificar.png')}
                style={estilos.image}/>
              <Text style={estilos.textoCard}>Modificar</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={estilos.card}>
            <Image
                  source={require('../../assets/images/coletar.png')}
                  style={estilos.image}
                />
              <Text style={estilos.textoCard}>Coletar Dados</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={estilos.card}>
            <Image
                  source={require('../../assets/images/relatorio.png')}
                  style={estilos.image}
                />
            <Text style={estilos.textoCard}>Relatório</Text>
            </View>
            
        </TouchableOpacity>
        
      </View>
    </View>
  );
};

const estilos = StyleSheet.create({
  container: {
    backgroundColor: '#372775',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  containerCards: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  card: {
    width: 200,
    height: 200,
    backgroundColor: '#2B1D62',
    borderRadius: 6,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center' 
  },
  image: {
    height: 80,
    width: 80,
    marginBottom: 20
  },
  textoCard: {
    fontSize: 25,
    color: 'white',
    fontFamily: 'AveriaLibre-Regular'
  }
});

export default AcoesPesquisa;
