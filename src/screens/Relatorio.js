import { Image, StyleSheet, View, Text } from "react-native";
import Header from "../components/Header";
import Legenda from "../components/Legenda";

const Relatorio = (props) => {
    return (
        <View style={st.containerPrincipal}>
            <View style={st.containerHeader}>
                <Header textoHeader="Relatório" navigation={props.navigation} />
            </View>
            <View style={st.containerPagina}>
                <View style={st.containerGrafico}>
                    <View style={st.imagem}>
                        <Image style={st.grafico} source={require('../../assets/images/pie-chart1.png')} resizeMode='contain' />
                    </View>
                </View>
                <View style={st.containerLegenda}>
                    <Legenda textoLegenda="Excelente" cor="#F1CE7E" />
                    <Legenda textoLegenda="Bom" cor="#6994FE" />
                    <Legenda textoLegenda="Neutro" cor="#5FCDA4" />
                    <Legenda textoLegenda="Ruim" cor="#EA7288" />
                    <Legenda textoLegenda="Péssimo" cor="#53D8D8" />
                </View>
            </View>
        </View>
    )
}

const st = StyleSheet.create({
    containerPrincipal: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        backgroundColor: '#372775',
    },
    containerHeader: {
        backgroundColor: '#372775',
        flex: 0.16,
        flexDirection: 'row',
    },
    containerPagina: {
        display: 'flex',
        flex: 0.84,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        padding: '2%',
    },
    containerGrafico: {
        display: 'flex',
        flex: 0.6,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerLegenda: {
        display: 'flex',
        flex: 0.4,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        paddingTop: '2%',
        paddingBottom: '4%',
        height: '80%',
        marginTop: '3%'
    },
    imagem: {
        display: 'flex',
        flex: 0.75,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    grafico: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '83%',
        height: '80%',
    }
})

export default Relatorio