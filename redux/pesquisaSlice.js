import { createSlice } from '@reduxjs/toolkit';

const pesquisaSlice = createSlice({
  name: 'pesquisa',
  initialState: {
    pesquisaId: null, //armazena apenas o ID da pesquisa
  },
  reducers: {
    setPesquisaId: (state, action) => {
      state.pesquisaId = action.payload; //armazena o ID da pesquisa
    },
    clearPesquisaId: (state) => {
      state.pesquisaId = null; //limpa o ID da pesquisa quando necessário
    },
  },
});

export const { setPesquisaId, clearPesquisaId } = pesquisaSlice.actions;
export default pesquisaSlice.reducer;
