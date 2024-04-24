import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native'
import {useState} from 'react'
import Botao from '../../src/components/BotaoVerde'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Header from '../../src/components/Header'
import Popup from '../components/Popup'

const ModificarPesquisa = (props) =>{

  const [txtNome, setNome] = useState('')
  const [txtData, setData] = useState('')
  const [txtValNome, setValNome] = useState('')
  const [txtValData, setValData] = useState('')
  const [modalVisible, setModalVisible] = useState(false);
  
  const modificaDados = () => {
    setValNome(" ")
    setValData(" ")
    
    if((txtNome !='') && (txtData !='') ){
      let nome = txtNome
      let data = txtData
      console.log(nome,data)
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
        <Header textoHeader="Modificar Pesquisa" navigation={props.navigation}/>
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
              <Icon name= "calendar-month" size={33.9} color="grey"/>
            </TouchableOpacity>         
          </View>

          <Text style={estilos.textoVal}>{txtValData}</Text>
        </View>

        <View>
          <Text style={estilos.texto}>Imagem:</Text>
          <TouchableOpacity style={estilos.imagem}>
            <Icon name= "party-popper" size={50} color="#C60EB3"/>
          </TouchableOpacity>
        </View>
  
      </View>


      <Botao texto="CADASTRAR" funcao = {modificaDados}/>
  
    </View>

    <View style={estilos.cBotaoDeletar}>

      <TouchableOpacity style={estilos.cBotaoDeletar} onPress={() => setModalVisible(true)}>
        <Icon name="trash-can-outline" size={50} color="white"/>
        <Text style={estilos.texto}>Apagar</Text>
      </TouchableOpacity>
  
    </View>  
     {/* Pop-up para apagar pesquisa*/}
     <Popup modalVisible={modalVisible} setModalVisible={setModalVisible} navigation={props.navigation}/>    

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