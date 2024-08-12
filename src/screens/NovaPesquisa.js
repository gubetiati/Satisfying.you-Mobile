import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useState } from 'react';
import Botao from '../../src/components/BotaoVerde';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../../src/components/Header';
import { useNavigation } from '@react-navigation/native';
import { launchImageLibrary } from 'react-native-image-picker';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import { useSelector, useDispatch } from 'react-redux';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storage } from '../config/firebase';
import { setPesquisaId } from '../../redux/pesquisaSlice';

const NovaPesquisa = (props) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [txtNome, setNome] = useState('');
  const [txtData, setData] = useState('');
  const [txtValNome, setValNome] = useState('');
  const [txtValData, setValData] = useState('');
  const [urlFoto, setUrlFoto] = useState('');
  const [nomeFoto, setNomeFoto] = useState('');

  const email = useSelector((state) => state.login.email);

  const salvaDados = () => {
    setValNome('');
    setValData('');

    if (txtNome !== '' && txtData !== '') {
      adicionarPesquisa();
    } else {
      if (txtNome === '') setValNome('Preencha o nome da pesquisa');
      if (txtData === '') setValData('Preencha a data');
    }
  };

  const escolherFoto = () => {
    launchImageLibrary()
      .then((result) => {
        setUrlFoto(result.assets[0].uri); // Recebe o endereço da imagem
        setNomeFoto(result.assets[0].fileName);
      })
      .catch((err) => {
        console.log('\n\nErro ao abrir a câmera -> ' + JSON.stringify(err));
      });
  };

  const adicionarPesquisa = async () => {
    const imageRef = ref(storage, `${email}/${nomeFoto}`);
    const file = await fetch(urlFoto);
    const blob = await file.blob();

    uploadBytes(imageRef, blob, { contentType: 'image/jpeg' })
      .then((doc) => {
        console.log('\n\nImagem enviada: ' + JSON.stringify(doc));
        getDownloadURL(imageRef)
          .then((url) => {
            const dadosPesquisa = {
              nome: txtNome,
              data: txtData,
              linkImagem: url,
              execelente: 0,
              bom: 0,
              neutro: 0,
              ruim: 0,
              pessimo: 0,
            };
            const collectionPesquisa = collection(db, email); // Cria collection com o nome da pesquisa
            addDoc(collectionPesquisa, dadosPesquisa)
              .then((docRef) => {
                console.log('\n\nCriação de pesquisa bem sucedida: ' + JSON.stringify(docRef));
                dispatch(setPesquisaId(docRef.id)); // Salva o ID da pesquisa no Redux
                console.log('ID DA PESQUISA SALVO: ', docRef.id)
                setUrlFoto('');
                props.navigation.navigate('Home');
              })
              .catch((err) => {
                console.log('\n\nErro na criação de pesquisa: ' + JSON.stringify(err));
              });
          })
          .catch((err) => {
            console.log('\n\nErro ao pegar URL -> ' + JSON.stringify(err));
          });
      })
      .catch((err) => {
        console.log('\n\nErro ao enviar imagem: ' + JSON.stringify(err));
      });
  };

  return(
    
  <View style = {estilos.view}>

    <View style = {estilos.header} >
      <Header textoHeader="Nova Pesquisa" navigation={navigation}/>
    </View>
      
    <View style = {estilos.viewPrincipal}>
      
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
          <View style={{flexDirection:'row'}}>
            <TouchableOpacity onPress={()=>{escolherFoto()}}>
              <View style={estilos.imagem}>
                <Text style={estilos.textoImagem}>Câmera/Galeria de imagens</Text>
              </View>
            </TouchableOpacity>
            {
              urlFoto ?
                <Image source={{uri: urlFoto}} style={{width: '20%', height: '90%', marginLeft:'2%'}}/>
              :
                null
            }
          </View>
        </View>  
      </View>

      <Botao texto="CADASTRAR" funcao = {salvaDados}/>
   
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
    paddingVertical: '2%',
    paddingHorizontal: '15%',
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
    width: '70%',
    height: 50,
    justifyContent: 'center'
  },

  textInput: {
    fontSize: 14,
    backgroundColor: 'white',
    height: 35.3,
    justifyContent: 'center'
  },
  

  texto: {
    fontSize: 20,
    color: 'white',
    fontFamily: 'AveriaLibre-Regular'
  },

  textoImagem: {
    fontSize: 18,
    color: 'grey',
    fontFamily: 'AveriaLibre-Regular'
  },

  textoVal: {
    fontSize: 18,
    color: '#fd7979',
    fontFamily: 'Stylish-Regular' 
  }

})

export default NovaPesquisa