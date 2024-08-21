import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { useSelector, useDispatch } from 'react-redux';
import { updateDoc, deleteDoc, doc, onSnapshot } from 'firebase/firestore';
import { db, storage } from '../config/firebase';
import { ref, deleteObject, uploadBytes, getDownloadURL } from 'firebase/storage';
import { clearPesquisaId } from '../../redux/pesquisaSlice';
import Popup from '../components/Popup';
import Header from '../components/Header';
import Botao from '../components/BotaoVerde';
import { launchImageLibrary } from 'react-native-image-picker';

const ModificarPesquisa = (props) => {

  const [txtNome, setNome] = useState('')
  const [txtData, setData] = useState('')

  const [txtValNome, setValNome] = useState('')
  const [txtValData, setValData] = useState('')

  const [modalVisible, setModalVisible] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const [linkImagem, setLinkImagem] = useState('')
  const [nomeFoto, setNomeFoto] = useState('')
  const [fotoAlterada, setFotoAlterada] = useState(false)//variavel de controle caso a foto tenha sido alterada, para saber se é necessario enviar a nova imagem para o fb
  const [imagemAnterior, setImagemAnterior] = useState('')

  const dispatch = useDispatch();

  const pesquisaId = useSelector((state) => state.pesquisa.pesquisaId);
  const email = useSelector((state) => state.login.email);

  const modificaDados = async () => {
    if (txtNome !== '' && txtData !== '') {
      const docRef = doc(db, email, pesquisaId);
      if (fotoAlterada == true) {
        await uploadImagem(docRef)
      } else {
        await updateDoc(docRef, {
          nome: txtNome,
          data: txtData,
          linkImagem: linkImagem,
          nomeImagem: nomeFoto
        });
      }
      Alert.alert('Sucesso', 'Pesquisa modificada com sucesso');
      props.navigation.pop();
    } else {
      if(txtNome == '')
        setValNome("Preencha o nome da pesquisa")
      
      if(txtData == '')
        setValData("Preencha a data")
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

  const uploadImagem = async (docRef) => {//coloca a nova imagem e deleta a antiga
    const imageRef = ref(storage, `${email}/${nomeFoto}`)
    const file = await fetch(linkImagem)
    const blob = await file.blob()
    await uploadBytes(imageRef, blob, { contentType: 'image/jpeg' })
      .then((doc) => {
        console.log("\n\nImagem enviada: " + JSON.stringify(doc.ref))
        getDownloadURL(imageRef)
          .then((url) => {
            updateDoc(docRef,{
              nome: txtNome,
              data: txtData,
              linkImagem: url,
              nomeImagem: nomeFoto
            })
          })
          .catch((err) => {
            console.log("\n\nProblema ao pegar o link: " + JSON.stringify(err))
          })
      })
      .catch((err) => {
        Alert.alert('Erro', 'Erro ao enviar imagem, tente novamente');
        console.log("\n\nErro ao enviar imagem: " + JSON.stringify(err))
      })
    const imageRefAntiga = ref(storage, `${email}/${imagemAnterior}`)//referencia da imagem antiga
    await deleteObject(imageRefAntiga)
      .then(() => {
        console.log("\n\nImagem anterior deletada")
      })
      .catch((err) => {
        console.log("\n\nErro ao deletar imagem: " + JSON.stringify(err))
      })
  }

  useEffect(() => {//pega todos os dados da pesquisa atual
    const pesquisaRef = doc(db, email, pesquisaId);
    const unsubscribe = onSnapshot(pesquisaRef, (snap) => {
      setNome(snap.data().nome)
      setData(snap.data().data)
      setLinkImagem(snap.data().linkImagem)
      setImagemAnterior(snap.data().nomeImagem)//nome da imagem antiga para possivel exclusão da mesma em caso de alteração
    })
  }, [])

  const escolherFoto = () => {//escolhe uma imagem nova
    launchImageLibrary()
      .then((result) => {
        setLinkImagem(result.assets[0].uri)//recebe o endereço da imagem
        setNomeFoto(result.assets[0].fileName)
        setFotoAlterada(true)//variavel de controle
      })
      .catch((err) => {
        console.log("\n\nErro ao abrir a camera -> " + JSON.stringify(err))
      })
  }

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
            </View>

            <View style={estilos.containerImagem}>
              <Text style={estilos.texto}>Imagem:</Text>
              <TouchableOpacity onPress={() => { escolherFoto() }} style={estilos.imagem}>
                {
                  linkImagem ?
                    <Image source={{ uri: linkImagem }} style={{ width: '100%', height: '100%', alignSelf: 'center' }} />
                    :
                    null
                }
              </TouchableOpacity>
            </View>
            <Popup
              modalVisible={modalVisible}
              setModalVisible={setModalVisible}
              onConfirm={()=>excluirPesquisa()}
            />
          </View>

          <Botao texto="MODIFICAR" funcao={()=>{modificaDados()}} />
          
        </View>

        <View style={estilos.cBotaoDeletar}>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Icon name="trash-can-outline" size={50} color="white" />
            <Text style={estilos.texto}>Apagar</Text>
          </TouchableOpacity>
        </View>

      </View>
      {/* Pop-up para apagar pesquisa*/}
      <Popup modalVisible={modalVisible} setModalVisible={setModalVisible} navigation={props.navigation} />
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
    justifyContent: 'space-evenly',
  },

  cData: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },

  dataInput: {
    flex: 0.999999,
  },

  calendario: {
    backgroundColor: 'white'
  },

  imagem: {
    flexDirection: 'column',
    backgroundColor: 'white',
    alignItems: 'center',
    height: '90%',
    width: 137
  },

  textInput: {
    fontSize: 14,
    backgroundColor: 'white',
    height: 35.3,
    color: 'black',
    fontFamily: 'AveriaLibre-Regular',
  },

  cBotaoDeletar: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: '2%'
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
  },

  containerImagem: {
    flex: 0.9,
    paddingBottom: '4%',
  }

})

export default ModificarPesquisa