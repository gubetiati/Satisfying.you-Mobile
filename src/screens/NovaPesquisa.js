import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import Botao from '../../src/components/BotaoVerde';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../../src/components/Header';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { useNavigation } from '@react-navigation/native';
import { launchImageLibrary } from 'react-native-image-picker';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import { useSelector, useDispatch } from 'react-redux';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storage } from '../config/firebase';
import { setPesquisaId, clearPesquisaId } from '../../redux/pesquisaSlice';
import { useEffect } from 'react';

const NovaPesquisa = (props) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [txtNome, setNome] = useState('');
  const [txtData, setData] = useState('');

  const [txtValNome, setValNome] = useState('');
  const [txtValData, setValData] = useState('');

  const [urlFoto, setUrlFoto] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [nomeImagem, setNomeImagem] = useState('')

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
        setNomeImagem(result.assets[0].fileName);
      })
      .catch((err) => {
        console.log('\n\nErro ao abrir a câmera -> ' + JSON.stringify(err));
      });
  };

  const adicionarPesquisa = async () => {
    const imageRef = ref(storage, `${email}/${nomeImagem}`)
    const file = await fetch(urlFoto)
    const blob = await file.blob()

    uploadBytes(imageRef, blob, { contentType: 'image/jpeg' })
      .then((doc) => {
        console.log("\n\nImagem enviada: " + JSON.stringify(doc))
        getDownloadURL(imageRef)
          .then((url) => {
            console.log("\n\nURL da imagem -> " + JSON.stringify(url))
            const dadosPesquisa = {
              nome: txtNome,
              data: txtData,
              linkImagem: url,
              execelente: 0,
              bom: 0,
              neutro: 0,
              ruim: 0,
              pessimo: 0,
              nomeImagem: nomeImagem
            }
            const collectionPesquisa = collection(db, email)//cria collection com o nome da pesquisa
            addDoc(collectionPesquisa, dadosPesquisa)
              .then((doc) => {
                console.log("\n\nCriação de pesquisa bem sucedida: " + JSON.stringify(doc))
                dispatch(setPesquisaId(doc.id)); // Salva o ID da pesquisa no Redux
                console.log('ID DA PESQUISA SALVO: ' + doc.id)
                setUrlFoto('')
                props.navigation.navigate('Home')
              })
              .catch((err) => {
                console.log("\n\nErro na criação de pesquisa: " + JSON.stringify(err))
              })
          })
          .catch((err) => {
            console.log("\n\nErro ao pegar URL -> " + JSON.stringify(err))
          })
      })
      .catch((err) => {
        console.log("\n\nErro ao enviar imagem: " + JSON.stringify(err))
      })
  }

  useEffect(() => {
    return () => {
      dispatch(clearPesquisaId()); // Limpa o ID da pesquisa do Redux ao sair da tela
      console.log('ID da pesquisa removido')
    };
  }, [dispatch]);

  const onChangeDate = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      const formattedDate = format(selectedDate, 'dd/MM/yyyy', { locale: ptBR });
      setData(formattedDate);
    }
  };


  return (

    <View style={estilos.view}>

      <View style={estilos.header} >
        <Header textoHeader="Nova Pesquisa" navigation={navigation} />
      </View>

      <View style={estilos.viewPrincipal}>

        <View style={estilos.cInputs}>

          <View>
            <Text style={estilos.texto}>Nome:</Text>
            <TextInput style={estilos.textInput} value={txtNome} onChangeText={setNome} />
            <Text style={estilos.textoVal}>{txtValNome}</Text>
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

            {showDatePicker && (
              <DateTimePicker
                value={new Date()}
                mode="date"
                display="default"
                onChange={onChangeDate}
                locale="pt-BR" //define a localização para português do Brasil
              />
            )}

            <Text style={estilos.textoVal}>{txtValData}</Text>
          </View>

          <View style={estilos.containerImagem}>
            <Text style={estilos.texto}>Imagem:</Text>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity onPress={() => { escolherFoto() }}>
                <View style={estilos.imagem}>
                  {
                    urlFoto ?

                      <Image source={{ uri: urlFoto }} style={{ width: '100%', height: '100%' }} />
                      :
                      <Text style={estilos.textoImagem}>Galeria de imagens</Text>
                  }
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <Botao texto="CADASTRAR" funcao={salvaDados} />

      </View>

    </View>
  )
}

const estilos = StyleSheet.create({

  view: {
    flex: 1,
  },

  header: {
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
    marginTop: '-1%'
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
    justifyContent: 'center',
    height: '85%',
    width: 137
  },

  textInput: {
    fontSize: 14,
    backgroundColor: 'white',
    height: 35.3,
    justifyContent: 'center',
    color: 'black',
    fontFamily: 'AveriaLibre-Regular'
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
    fontFamily: 'AveriaLibre-Regular'
  },

  containerImagem: {
    flex: 0.9,
    marginTop: '-1%'
  }

})

export default NovaPesquisa