import React from 'react'
import { View, TouchableOpacity, StyleSheet, Image, Text } from 'react-native'

const Card = ({ onPress, image, titulo, data }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={st.card}>
        <Image source={image} style={st.image} resizeMode='contain' />
        <Text style={st.tituloCard}>{titulo}</Text>
        <Text style={st.textoData}>{data}</Text>
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