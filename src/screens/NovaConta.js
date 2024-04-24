import {View, Pressable, TextInput, Text, StyleSheet} from 'react-native';
import Header from '../components/Header';

const NovaConta = (props) => {

  const sair = () =>{
    props.navigation.pop();
  }

  return (
    <View style={estilos.tela}>
      <View style={estilos.headerContainer}>
        <Header textoHeader="Nova Conta" navigation={props.navigation}/>
      </View>
      <View style={estilos.containerCad}>
        <View style={estilos.caixaDeTexto}>
          <Text style={estilos.texto}>E-mail</Text>
          <TextInput
            style={estilos.textInput}
            placeholder="jurandir.pereira@hotmail.com"
            placeholderTextColor="#3F92C5"></TextInput>
        </View>
        <View style={estilos.caixaDeTexto}>
          <Text style={estilos.texto}>Senha</Text>
          <TextInput
            style={estilos.textInput}
            placeholder="*********"
            placeholderTextColor="#3F92C5"
            secureTextEntry={true}></TextInput>
        </View>
        <View style={estilos.caixaDeTexto}>
          <Text style={estilos.texto}>Repetir senha</Text>
          <TextInput
            style={estilos.textInput}
            secureTextEntry={true}></TextInput>
          <Text style={estilos.warning}>
            O campo repetir senha difere da senha
          </Text>
        </View>
      </View>
      <View style={estilos.containerEntrar}>
        <Pressable style={estilos.botaoEntrar} onPress={sair}>
          <Text style={estilos.texto}>CADASTRAR</Text>
        </Pressable>
      </View>
    </View>
  );
};

const estilos = StyleSheet.create({
  tela: {
    backgroundColor: '#372775',
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flex: 0.4,
    //paddingBottom: '2%',
  },
  containerCad: {
    display: 'flex',
    flex: 0.6,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
  },
  containerBtn: {
    display: 'flex',
    flex: 0.2,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    height: '20%',
    marginTop: '3%',
  },
  caixaDeTexto: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    width: '80%',
    flex: 0.5,
    marginBottom: '1%',
  },
  texto: {
    fontSize: 20,
    color: '#FFFFFF',
    fontFamily: 'AveriaLibre-Regular',
  },
  warning: {
    color: '#FD7979',
    fontSize: 10,
    fontFamily: 'AveriaLibre-Regular'
  },
  containerEntrar: {
    display: 'flex',
    flex: 0.2,
    margin: '2.25%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  textInput: {
    paddingBottom: 4,
    fontSize: 16,
    backgroundColor: 'white',
    width: '100%',
    fontFamily: 'AveriaLibre-Regular',
    height: '62.5%',
  },
  botaoEntrar: {
    fontSize: 28,
    //fontWeight: 400,
    display: 'flex',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#37BD6D',
    width: '80%',
    height: '70%',
  },
});

export default NovaConta;

