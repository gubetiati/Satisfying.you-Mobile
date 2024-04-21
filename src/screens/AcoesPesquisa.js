import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, TouchableOpacity, StyleSheet, Image, Text } from 'react-native';

const AcoesPesquisa = () => {
  const navigation = useNavigation()

  return (
    <View style={estilos.container}>
      <View style={estilos.containerCards}>
        <TouchableOpacity  onPress={() => navigation.navigate('ModificarPesquisa')}>
          <View style={estilos.card}>
            <Image
                source={require('../../assets/images/modificar.png')}
                style={estilos.image}/>
              <Text style={estilos.textoCard}>Modificar</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity  onPress={() => navigation.navigate('Coleta')}>
          <View style={estilos.card}>
            <Image
                  source={require('../../assets/images/coletar.png')}
                  style={estilos.image}
                />
              <Text style={estilos.textoCard}>Coletar Dados</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Relatorio')}>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  card: {
    width: 200,
    height: 200,
    backgroundColor: '#312464',
    borderRadius: 6,
    marginHorizontal: 20,
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
