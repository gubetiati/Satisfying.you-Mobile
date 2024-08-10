import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons'

const Header = (props) =>{
    const sair = () =>{
        props.navigation.pop();
    }

    return(
        <View style={st.containerHeader}>
            <TouchableOpacity onPress={()=>{sair()}}>
                <Icon name="arrow-back" size={40} color="#573fba"/>
            </TouchableOpacity>
            <Text style={st.textoHeader}>{props.textoHeader}</Text>
        </View>
        
    )
}

const st = StyleSheet.create({
    containerHeader:{
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#2b1d62',
        paddingLeft: '1%',
    },
    textoHeader:{
        fontSize: 24,
        color: 'white',
        marginLeft: '3%',
        fontFamily: 'AveriaLibre-Regular'
    },
})

export default Header

//Não esquecer de importar os icones e fontes pro projeto
/*Testei o header usando essa estrutura
        <View style={st.container}>
            <View style={st.containerHeader}>
            <Header textoHeader="Placeholder"/>
            </View>
        </View>
*/
/*container:{
        display: 'flex',
        backgroundColor: '#372775',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    containerHeader:{
        backgroundColor: '#372775',
        flex: 0.16,
        flexDirection: 'row',
    },
*/