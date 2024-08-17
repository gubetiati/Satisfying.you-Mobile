import { React, useEffect, useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text, TextInput, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native';
import Popup from '../components/Popup'
import Card from '../components/Card'
import { useSelector, useDispatch} from 'react-redux';
import { setPesquisaId } from '../../redux/pesquisaSlice';
import { query, collection, onSnapshot } from 'firebase/firestore';
import { db } from '../config/firebase';

const TelaHome = () => {
  const navigation = useNavigation()
  const [modalVisible, setModalVisible] = useState(false);

  const dispatch = useDispatch()

  const email = useSelector((state) => state.login.email)
  const [pesquisa, setPesquisa] = useState('')

  console.log("\n\nState armazeado -> " + email + "\n\n")

  useEffect( () => {//pega todos os dados da pesquisa atual
    const queryPesquisa = query(collection(db, email))
    const unsubscribe = onSnapshot(queryPesquisa, (snap) => {
      const listaPesquisas = []
      snap.forEach( (doc) =>{
        listaPesquisas.push({
          id: doc.id,
          ...doc.data()
        })
      })
      if((listaPesquisas != '') || (listaPesquisas != null) || (listaPesquisas != undefined)){
        setPesquisa(listaPesquisas[0])
      }
    })
  }, [])

  dispatch(setPesquisaId({pesquisaId: pesquisa.id}))
  const pesq = useSelector((state) => state.pesquisa.pesquisaId);
  console.log("\n\nState da pesquisa -> " + pesq)
  //!MODIFICAR PESQUISA NÃO VAI FUNCIONAR CASO UMA PESQUISA NÃO TENHA SIDO CADASTRADA ANTES

  return (
    <View style={st.container}>
      <View style={st.barraPesquisa}>
        <Icon name="search" size={30} color="gray"></Icon>
        <TextInput
          style={st.input}
          placeholder="Insira o termo de busca..."
        />
      </View>

      {/* Cards */}
      <ScrollView
        horizontal={true}
        contentContainerStyle={st.containerCards}
        showsHorizontalScrollIndicator={false}
      >
        <Card
          onPress={() => navigation.navigate('AcoesPesquisa')}
          image={require('../../assets/images/secomp.png')}
          titulo='SECOMP 2023'
          data='10/10/2023'
        />

        <Card
          onPress={() => navigation.navigate('AcoesPesquisa')}
          image={require('../../assets/images/ubuntu.png')}
          titulo='UBUNTU 2022'
          data='05/06/2022'
        />

        <Card
          onPress={() => navigation.navigate('AcoesPesquisa')}
          image={require('../../assets/images/meninas.png')}
          titulo='MENINAS CPU'
          data='01/04/2022'
        />

        <Card
          onPress={() => navigation.navigate('AcoesPesquisa')}
          image={require('../../assets/images/meninas.png')}
          titulo='PESQUISA2'
          data='23/04/2023'
        />

      </ScrollView>

      <View style={{ width: '95%', marginBottom: 10, height: '18%', justifyContent: 'center' }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('NovaPesquisa')}
          style={st.botao}
        >
          <Text style={st.textoBotao}>NOVA PESQUISA</Text>
        </TouchableOpacity>
      </View>

      {/* Pop-up para apagar pesquisa*/}
      <Popup modalVisible={modalVisible} setModalVisible={setModalVisible} />

    </View>
  );
};

const st = StyleSheet.create({
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
    justifyContent: 'space-between',
    marginLeft: '2.5%'
  },

  barraPesquisa: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 1,
    height: '12%',
    width: '95%',
    marginBottom: 10,
    paddingLeft: 10,
  },
  input: {
    flex: 1,
    paddingBottom: 7,
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 18,
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
});

export default TelaHome;
