import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons'


const Facebutton = (props) =>{

    const irParaAgradecimentos = () =>{
        props.navigation.navigate('Agradecimento');
    }

    return(
        <View>
            <TouchableOpacity onPress={irParaAgradecimentos} style={st.touchableIcone}>
                <Icon name={props.nomeIcone} size={70} color={props.corIcone}/>
                <Text style={st.textoIcone}>{props.textoIcone}</Text>
            </TouchableOpacity>
        </View>
        
    )
}

const st = StyleSheet.create({
    textoIcone:{
        color: 'white',
        fontSize: 24,
        fontFamily: 'AveriaLibre-Regular',
        textAlign: 'center'
    },
    touchableIcone:{
        display: 'flex',
        flex: 0.5,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }
    
})

export default Facebutton;