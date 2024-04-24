import {View, Pressable, TextInput, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Login = (props) => {

  const irParaNovaConta = () =>{
    props.navigation.navigate('NovaConta');
  }

  const irParaRecuperarSenha = () =>{
    props.navigation.navigate('RecuperarSenha');
  }

  const irParaHome = () =>{
    props.navigation.navigate('TelaHome');
  }

  return (
    <View style={estilos.tela}>
      <View style={estilos.logo}>
        <Text style={estilos.logoText}>Satisfying.you</Text>
        <Icon name="smile-o" size={50} color="#FFFFFF"></Icon>
      </View>
      <View style={estilos.containerLogin}>
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
          <Text style={estilos.warning}>E-mail e/ou senha inválidos</Text>
        </View>
        <View style={estilos.containerEntrar}>
          <Pressable style={estilos.botaoEntrar} onPress={irParaHome}>
            <Text style={estilos.texto}>Entrar</Text>
          </Pressable>
        </View>
      </View>
      <View style={estilos.containerBtn}>
        <View style={estilos.btnBox}>
          <Pressable style={estilos.botaoCad} onPress={irParaNovaConta}>
            <Text style={estilos.texto}>Criar minha conta</Text>
          </Pressable>
        </View>
        <View style={estilos.btnBox}>
          <Pressable style={estilos.botaoSenha} onPress={irParaRecuperarSenha}>
            <Text style={estilos.texto}>Esqueci minha senha</Text>
          </Pressable>
        </View>
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
    padding: '1%',
  },
  logo: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flex: 0.2,
    paddingBottom: '2%',
  },
  logoText: {
    fontSize: 40,
    color: '#FFFFFF',
    fontFamily: 'AveriaLibre-Regular',
    paddingRight: '5%',
  },
  containerLogin: {
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
  btnBox: {
    display: 'flex',
    flex: 0.5,
    width: '80%',
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
    flex: 0.5,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  textInput: {
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
  botaoCad: {
    //fontWeight: 400,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    alignContent: 'center',
    backgroundColor: '#419ED7',
    width: '100%',
    height: '80%',
  },
  botaoSenha: {
    color: '#FFFFFF',
    backgroundColor: '#B0CCDE',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    height: '80%',
  },
});

export default Login;
