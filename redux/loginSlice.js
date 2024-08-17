//Nesse arquivo é definido o slice, os campos de interesse

import { createSlice } from "@reduxjs/toolkit";

const initialValues = {
    email: null
}

export const loginSlice = createSlice({
    name: 'login',
    initialState: initialValues,
    reducers:{//funções que recebem uma action, executam tarefas após receber
        reducerSetLogin: (state,action) =>{//estado inicial e tarefa que o usuario quer fazer
            //alterar valores do estado global login
            state.email = action.payload.email //payload = atributos
        }
    }
})

export const {reducerSetLogin} = loginSlice.actions //actions é definido por createSlice

export default loginSlice.reducer //loginSlice é o retorno de create slice, vai ser usado em store.js