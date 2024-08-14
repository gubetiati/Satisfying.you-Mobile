import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { useSelector, useDispatch } from 'react-redux';
import { updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { db, storage } from '../config/firebase';
import { ref, deleteObject } from 'firebase/storage';
import { clearPesquisaId } from '../../redux/pesquisaSlice';
import Popup from '../components/Popup';
import Header from '../components/Header';
import Botao from '../components/BotaoVerde';

const ModificarPesquisa = (props) => {
  const [txtNome, setNome] = useState('');
  const [txtData, setData] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const dispatch = useDispatch();

  const pesquisaId = useSelector((state) => state.pesquisa.pesquisaId);
  const email = useSelector((state) => state.login.email);

  const modificaDados = async () => {
    if (txtNome !== '' && txtData !== '') {
      const docRef = doc(db, email, pesquisaId);
      await updateDoc(docRef, {
        nome: txtNome,
        data: txtData,
      });
      Alert.alert('Sucesso', 'Pesquisa modificada com sucesso');
      props.navigation.navigate('AcoesPesquisa');
    } else {
      Alert.alert('Erro', 'Preencha todos os campos');
    }
  };

  const excluirPesquisa = async () => {
    try {
      const docRef = doc(db, email, pesquisaId);
      
      const pesquisaDoc = await docRef.get();
      const imageUrl = pesquisaDoc.data().linkImagem;
      if (imageUrl) {
        const imageRef = ref(storage, imageUrl);
        await deleteObject(imageRef);
      }

      await deleteDoc(docRef);
      
      dispatch(clearPesquisaId());

      Alert.alert('Sucesso', 'Pesquisa excluída com sucesso');
      props.navigation.navigate('Home');
    } catch (error) {
      console.error('Erro ao excluir pesquisa: ', error);
      Alert.alert('Erro', 'Não foi possível excluir a pesquisa');
    }
  };

  const onChangeDate = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      const formattedDate = format(selectedDate, 'dd/MM/yyyy', { locale: ptBR });
      setData(formattedDate);
    }
  };

  return (
    <View style={estilos.view}>
      <View style={estilos.header}>
        <Header textoHeader="Modificar Pesquisa" navigation={props.navigation} />
      </View>

      <View style={estilos.viewPrincipal}>
        <View style={estilos.cPrimario}>
          <View style={estilos.cInputs}>
            <View>
              <Text style={estilos.texto}>Nome:</Text>
              <TextInput style={estilos.textInput} value={txtNome} onChangeText={setNome} />
            </View>

            <View>
              <View style={estilos.cData}>
                <View style={estilos.dataInput}>
                  <Text style={estilos.texto}>Data:</Text>
                  <TextInput 
                    style={estilos.textInput} 
                    value={txtData} 
                    onFocus={() => setShowDatePicker(true)} 
                    showSoftInputOnFocus={false} //desabilita o teclado ao focar no TextInput
                  />
                </View>

                <TouchableOpacity style={estilos.calendario} onPress={() => setShowDatePicker(true)}>
                  <Icon name="calendar-month" size={33.9} color="grey" />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {showDatePicker && (
            <DateTimePicker
              value={new Date()}
              mode="date"
              display="default"
              onChange={onChangeDate}
              locale="pt-BR" //define a localização para português do Brasil
            />
          )}

          <Botao texto="MODIFICAR" funcao={modificaDados} />
        </View>

        <View style={estilos.cBotaoDeletar}>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Icon name="trash-can-outline" size={50} color="white" />
            <Text style={estilos.texto}>Apagar</Text>
          </TouchableOpacity>
        </View>

        <Popup 
          modalVisible={modalVisible} 
          setModalVisible={setModalVisible} 
          onConfirm={excluirPesquisa} 
        />
      </View>
    </View>
  );
};

const estilos = StyleSheet.create({
  
  view:{
    flex: 1,
  },

  header:{
    flex: 0.15,
  },
  
  viewPrincipal: {
    backgroundColor: '#372775',
    flex: 0.85,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '2%'  
  },

  cPrimario: {
    flex: 0.9,
    paddingLeft: '15%',
    justifyContent: 'space-between',
  },

  cInputs: {
    flex: 0.95,
    justifyContent: 'space-evenly'
  },

  cData: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },

  dataInput: {
    flex: 0.999999
  },

  calendario: {
    backgroundColor: 'white'
  },

  imagem: {
    backgroundColor: 'white',
    alignItems: 'center',
    width: '40%',
  },

  textInput: {
    fontSize: 14,
    backgroundColor: 'white',
    height: 35.3
  },

  cBotaoDeletar: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },   

  texto: {
    fontSize: 20,
    color: 'white',
    fontFamily: 'AveriaLibre-Regular'
  },

  textoVal: {
    fontSize: 18,
    color: '#fd7979',
    fontFamily: 'AveriaLibre-Regular' 
  }

  

})

export default ModificarPesquisa