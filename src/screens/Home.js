import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Image, Text, TextInput, Modal, Button } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native';



const Home = () => {
  const navigation = useNavigation()
  const [modalVisible, setModalVisible] = useState(false);

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
        <TouchableOpacity onPress={() => navigation.navigate('AcoesPesquisa')}>
          <View style={estilos.card}>
            <Image
                source={require('../../assets/images/secomp.png')}
                style={estilos.image}/>
              <Text style={estilos.tituloCard}>SECOMP 2023</Text>
              <Text style={estilos.textoData}>10/10/2023</Text>
          </View>
          
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('AcoesPesquisa')}>
          <View style={estilos.card}>
            <Image
                  source={require('../../assets/images/ubuntu.png')}
                  style={estilos.image}
                />
              <Text style={estilos.tituloCard}>UBUNTU 2022</Text>
              <Text style={estilos.textoData}>05/06/2022</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('AcoesPesquisa')}>
          <View style={estilos.card}>
            <Image
                  source={require('../../assets/images/meninas.png')}
                  style={estilos.image}
                />
            <Text style={estilos.tituloCard}>MENINAS CPU </Text>
            <Text style={estilos.textoData}>01/04/2022</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('AcoesPesquisa')}>
          <View style={estilos.card}>
            <Image
                  source={require('../../assets/images/meninas.png')}
                  style={estilos.image}
                />
            <Text style={estilos.tituloCard}>PESQUISA </Text>
            <Text style={estilos.textoData}>01/04/2022</Text>
            </View>
        </TouchableOpacity>



      </View>

      <View style={{width: '95%', marginTop: 20, height: 50, justifyContent: 'center'}}>
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={estilos.botao}
        >
        <Text style={estilos.textoBotao}>NOVA PESQUISA</Text>
        </TouchableOpacity>
      </View>
      
      {/* Pop-up */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}
      >
        <View style={estilos.modalContainer}>
          <View style={estilos.modalContent}>
            <Text style={estilos.modalTitle}>Tem certeza de apagar essa pesquisa?</Text>
            <View style={estilos.modalButtonsContainer}>
              <TouchableOpacity 
                style={estilos.buttonSim}
                onPress={() => {}}>
                <Text style={estilos.buttonText}>SIM</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={estilos.buttonCancelar}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={estilos.buttonText}>CANCELAR</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

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
    paddingTop: '2%',
  },
  containerCards: {
    flexDirection: 'row',
    width: '95%',
    justifyContent: 'space-between'
  },
  card: {
    width: 180,
    height: 150,
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden', 
  },
  image: {
    height: '43%', 
    width: '40%', 
    marginBottom: 10,
  },
  tituloCard: {
    fontSize: 22,
    color: '#3F92C5',
    fontFamily: 'AveriaLibre-Regular'
  },
  textoData: {
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 14
  },
  barraPesquisa: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 2,
    height: 35,
    width: '95%',
    marginBottom: 10,
    paddingLeft: 10,
  },
  input: {
    flex: 1,
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 16,
  },
  icon: {
    width: '20%',
    height: '20%',
    marginRight: 5,
  },
  containerHeader: {
    backgroundColor: '#372775',
    flex: 0.5,
    flexDirection: 'row',
  },
  botao: {
    backgroundColor: '#37BD6D',
    height: '75%'
  },
  textoBotao: {
    color: 'white', 
    fontSize: 22, 
    textAlign: 'center',
    fontFamily: 'AveriaLibre-Regular',
    paddingTop: '0.5%'
  },

//---Pop-up---
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#2B1F5C',
    padding: 20,
    borderRadius: 2,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    marginBottom: 20,
    color: 'white',
    fontFamily: 'AveriaLibre-Regular',
    textAlign: 'center', 
    flexWrap: 'wrap', 
    maxWidth: '30%', 
  },
  
  modalButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '20%',
  },
  buttonSim: {
    backgroundColor: '#FF8383',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 1,
    marginRight: 20,
    width: '80%',
    height: '100%'

  },
  buttonCancelar: {
    backgroundColor: '#3F92C5',
    paddingVertical: 8,
    paddingHorizontal: 5,
    borderRadius: 1,
    width: '80%',
    height: '100%'
  },
  buttonText: {
    color: 'white',
    fontSize: 22,
    fontFamily: 'AveriaLibre-Regular',
    textAlign: 'center'
  },
  
});

export default Home;
