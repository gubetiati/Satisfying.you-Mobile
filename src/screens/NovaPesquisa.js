import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native'
import {useState} from 'react'
import Botao from '../../src/components/BotaoVerde'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Header from '../../src/components/Header'

const ModificarPesquisa = () =>{

  const [txtNome, setNome] = useState('')
  const [txtData, setData] = useState('')
  const [txtValNome, setValNome] = useState('')
  const [txtValData, setValData] = useState('')
  
  const modificaDados = () => {
    
    if((txtNome !='') && (txtData !='') ){
      let nome = txtNome
      let data = txtData
      console.log(nome,data)
      setValNome(" ")
      setValData(" ")
    }else{
      
      if(txtNome == '')
        setValNome("Preencha o nome da pesquisa")
      
      if(txtData == '')
        setValData("Preencha a data")
    }
  }

  return(
    
    <View style = {estilos.view}>

      <View style = {estilos.header} >
        <Header textoHeader="Nova Pesquisa"/>
      </View>
      

      <View style = {estilos.viewPrincipal}>
        <View style={estilos.cPrimario}>
          <View style = {estilos.cInputs}>
            <View>
              <Text style={estilos.texto}>Nome:</Text>
              <TextInput style={estilos.textInput} value={txtNome} onChangeText={setNome} />
              <Text style={estilos.textoVal}>{txtValNome}</Text>
            </View>

        <View>
          <View style={estilos.cData}>
            <View style={estilos.dataInput}>
              <Text style={estilos.texto}>Data:</Text>
              <TextInput style={estilos.textInput} value={txtData} onChangeText={setData} />
            </View>
            <TouchableOpacity style={estilos.calendario}>
              <Icon name= "calendar-month" size={33.5} color="grey"/>
            </TouchableOpacity>         
          </View>
          <Text style={estilos.textoVal}>{txtValData}</Text>
        </View>

        <View>
          <Text style={estilos.texto}>Imagem:</Text>
          <TouchableOpacity>
            <View style={estilos.imagem}>
            <Text style={estilos.textoImagem}>Câmera/Galeria de imagens</Text>
            </View>
          </TouchableOpacity>
        </View>
  
      </View>


      <Botao texto="CADASTRAR" funcao = {modificaDados}/>
  
    </View>  

  </View>
    
</View>
  )
}

const estilos = StyleSheet.create({
  
  view:{
    flex: 1,
  },

  header:{
    flex: 0.15,
  },
  
  viewPrincipal: {
    backgroundColor: "#372775",
    flex: 0.85,
    flexDirection: 'row',
    justifyContent: "space-between",
    padding: 10  
  },

  cPrimario: {
    flex: 1,
    paddingHorizontal: 100,
    justifyContent: "space-between",
  },

  cInputs: {
    flex: 0.95,
    justifyContent: "space-evenly"
  },

  cData: {
    flexDirection: "row",
    alignItems: "flex-end",
  },

  dataInput: {
    flex: 0.999999
  },

  calendario: {
    backgroundColor: "white"
  },

  imagem: {
    backgroundColor: "white",
    alignItems: "center",
    width: "40%",
    height: 60,
    justifyContent: "center"
  },

  textInput: {
    fontSize: 15,
    backgroundColor: "white",
    height: 35
  },
  

  texto: {
    fontSize: 20,
    color: 'white',
    fontFamily: 'Stylish-Regular'
  },

  textoImagem: {
    fontSize: 18,
    color: 'grey',
    fontFamily: 'Stylish-Regular'
  },

  textoVal: {
    fontSize: 18,
    color: '#fd7979',
    fontFamily: 'Stylish-Regular' 
  }

  

})

export default ModificarPesquisa