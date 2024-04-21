import { StyleSheet, View, Text } from "react-native";

const Legenda = (props) =>{
    return(
        <View style={st.containerPrincipal}>
            <View style={st.containerQuadrado}>
                <View style={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: props.cor
                }}></View>
            </View>
            <View style={st.containerLegenda}>
                <Text style={st.textoLegenda}>
                    {props.textoLegenda}
                </Text>
            </View>
        </View>
    )
}

const st =  StyleSheet.create({
    containerPrincipal:{
        display: 'flex',
        flex: 0.2,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems:'center',
        marginBottom: '1.5%',
        marginTop: '1.5%'
    },
    containerQuadrado:{
        display: 'flex',
        flex: 0.1,
        flexDirection: 'column',
        alignItems: 'center'
    },
    containerLegenda:{
        display: 'flex',
        flex: 0.9,
        flexDirection: 'row',
        justifyContent: 'flex-star',
    },
    textoLegenda:{
        fontSize: 20,
        fontFamily: 'AveriaLibre-Regular',
        marginLeft: '2%',
        color: 'white',
    }
})

export default Legenda