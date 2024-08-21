import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, TouchableOpacity, StyleSheet, Image, Text } from 'react-native';
import Header from '../components/Header';
import { useSelector } from 'react-redux';

const AcoesPesquisa = (props) => {
  const navigation = useNavigation()
  const id = useSelector((state) => state.pesquisa.pesquisaId)
  console.log("\nAcões pesquisa: " + id)
  return (

    <View style={estilos.container}>
      <View style={estilos.header}>
        <Header textoHeader="Pesquisa" navigation={props.navigation} />
      </View>


      <View style={estilos.containerCards}>
        <TouchableOpacity onPress={() => navigation.navigate('ModificarPesquisa')}>
          <View style={estilos.card}>
            <Image
              source={require('../../assets/images/modificar.png')}
              style={estilos.image} />
            <Text style={estilos.textoCard}>  Modificar  </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Coleta')}>
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
            <Text style={estilos.textoCard}>  Relatório  </Text>
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
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: '6%',
    width: '100%'
  },
  card: {
    width: '90%',
    height: '80%',
    backgroundColor: '#312464',
    borderRadius: 6,
    marginHorizontal: '4%',
    justifyContent: 'center',
    alignItems: 'center',

  },
  image: {
    height: '40%',
    width: '43%',
    marginBottom: '10%'
  },
  textoCard: {
    fontSize: 25,
    color: 'white',
    fontFamily: 'AveriaLibre-Regular'
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flex: 1,
  }
});

export default AcoesPesquisa;
