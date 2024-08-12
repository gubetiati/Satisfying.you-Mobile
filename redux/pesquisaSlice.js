import { createSlice } from '@reduxjs/toolkit';

const pesquisaSlice = createSlice({
  name: 'pesquisa',
  initialState: {
    pesquisas: [],
  },
  reducers: {
    adicionarPesquisa: (state, action) => {
      state.pesquisas.push(action.payload);
    },
    removerPesquisa: (state, action) => {
      state.pesquisas = state.pesquisas.filter(pesquisa => pesquisa.id !== action.payload);
    },
  },
});

export const { adicionarPesquisa, removerPesquisa } = pesquisaSlice.actions;
export default pesquisaSlice.reducer;
