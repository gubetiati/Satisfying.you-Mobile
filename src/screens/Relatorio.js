import {Image, StyleSheet, View, Text} from 'react-native';
import Header from '../components/Header';
import Legenda from '../components/Legenda';
//Import para renderizar e utilizar o gráfico
import {PieChart} from 'react-native-svg-charts';
//Imports para ligar com o backend
import {query, collection, onSnapshot, doc} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../config/firebase';
//Imports para o redux
import {useSelector} from 'react-redux';
import {State} from 'react-native-gesture-handler';

const App = props => {
  //Vars do redux para fazer query no BD
  const loggedUser = useSelector(state => state.login.email);
  const idPesquisa = useSelector(state => state.pesquisa.pesquisaId);
  const [documento, setDocumento] = useState("")

  //Query pra pegar os valores
  //Pega infos em tempo real do BD
  const ref = doc(db,loggedUser,idPesquisa)
  useEffect(()=>{
    const unsubscribe = onSnapshot(ref, (snap)=>{
      setDocumento(snap.data())
    })
  },[])

  //Vars para armazenar os dados da pesquisa pegos no BD
  const E = documento.excelente;
  const B = documento.bom;
  const N = documento.neutro;
  const R = documento.ruim;
  const P = documento.pessimo;

  const data = [
    {
      key: 1,
      value: E,
      svg: {fill: '#F1CE7E'},
    },
    {
      key: 2,
      value: B,
      svg: {fill: '#6994FE'},
    },
    {
      key: 3,
      value: N,
      svg: {fill: '#5FCDA4'},
    },
    {
      key: 4,
      value: R,
      svg: {fill: '#EA7288'},
    },
    {
      key: 5,
      value: P,
      svg: {fill: '#53D8D8'},
    },
  ];

  return (
    <View style={st.containerPrincipal}>
      <View style={st.containerHeader}>
        <Header textoHeader="Relatório" navigation={props.navigation} />
      </View>
      <View style={st.containerPagina}>
        <View style={st.containerGrafico}>
          <View style={st.imagem}>
            <PieChart
              style={{height: 200, width: 200}}
              outerRadius={'100%'}
              innerRadius={0}
              data={data}
            />
          </View>
        </View>
        <View style={st.containerLegenda}>
          <Legenda textoLegenda="Excelente" cor="#F1CE7E" />
          <Legenda textoLegenda="Bom" cor="#6994FE" />
          <Legenda textoLegenda="Neutro" cor="#5FCDA4" />
          <Legenda textoLegenda="Ruim" cor="#EA7288" />
          <Legenda textoLegenda="Péssimo" cor="#53D8D8" />
        </View>
      </View>
    </View>
  );
};

const st = StyleSheet.create({
  containerPrincipal: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: '#372775',
  },
  containerHeader: {
    backgroundColor: '#372775',
    flex: 0.16,
    flexDirection: 'row',
  },
  containerPagina: {
    display: 'flex',
    flex: 0.84,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: '2%',
  },
  containerGrafico: {
    display: 'flex',
    flex: 0.6,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerLegenda: {
    display: 'flex',
    flex: 0.4,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    paddingTop: '2%',
    paddingBottom: '4%',
    height: '80%',
    marginTop: '3%',
  },
  imagem: {
    display: 'flex',
    flex: 0.75,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  grafico: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '83%',
    height: '80%',
  },
});

export default App;
