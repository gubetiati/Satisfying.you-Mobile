import { TouchableOpacity, Text, StyleSheet } from "react-native";

const BotaoVerde = (props) => {

    const texto = props.texto
    const funcao = props.funcao

    return (
        <TouchableOpacity style={estilos.botao} onPress={props.funcao}>
            <Text style={estilos.texto}>{texto}</Text>
        </TouchableOpacity>
    )
}

const estilos = StyleSheet.create({

    botao: {
        backgroundColor: '#49B976',
        height: '12%',
        justifyContent: 'center'
    },
    texto: {
        fontSize: 25,
        color: 'white',
        fontFamily: 'AveriaLibre-Regular',
        textAlign: 'center',
    }


})

export default BotaoVerde