import React, { useState } from 'react'
import { View, TouchableOpacity, StyleSheet, Image, Text } from 'react-native'
import { useDispatch } from 'react-redux'
import { setPesquisaId } from '../../redux/pesquisaSlice'
import { useNavigation } from '@react-navigation/native'



const Card = (props) => {

  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [idPesquisa, setIdPesquisa] = useState(props.id)

  
  const goToAcoes = () => {
    dispatch(setPesquisaId({pesquisaId: idPesquisa}))
    navigation.navigate('AcoesPesquisa')
  }

 
  return (

    <TouchableOpacity onPress={() => {
      
      goToAcoes()
      }}>
      <View style={st.card}>
        <Image source={{uri: props.urlImagem}} style={st.image} />
        <Text style={st.tituloCard}>{props.nome}</Text>
        <Text style={st.textoData}>{props.data}</Text>
      </View>
    </TouchableOpacity>
    

  )
}

const st = StyleSheet.create({
  card: {
    width: 200,
    height: 170,
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 40
  },
  image: {
    height: '45%',
    width: '40%',
    marginBottom: 8,
  },
  tituloCard: {
    fontSize: 24,
    color: '#3F92C5',
    fontFamily: 'AveriaLibre-Regular'
  },
  textoData: {
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 13
  },
})

export default Card