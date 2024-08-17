import { View, Text, StyleSheet } from "react-native";

const Agradecimento = (props) => {

    const sair = () => {
        props.navigation.pop();
    }

    setTimeout(sair, 3000);

    return (
        <View style={st.containerTexo}>
            <Text style={st.texto}>
                Obrigado por participar da pesquisa!
            </Text>
            <Text style={st.texto}>
                Aguardamos você no próximo ano!
            </Text>
        </View>
    )
}

const st = StyleSheet.create({
    containerTexo: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        backgroundColor: '#372775',
        padding: '12%'
    },
    texto: {
        fontSize: 30,
        color: 'white',
        fontFamily: 'AveriaLibre-Regular',
        textAlign: 'center'
    }
})

export default Agradecimento