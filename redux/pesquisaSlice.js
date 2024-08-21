import { createSlice } from '@reduxjs/toolkit';

export const pesquisaSlice = createSlice({
  name: 'pesquisa',
  initialState: {
    pesquisaId: null, // Armazena o ID da pesquisa
  },
  reducers: {
    setPesquisaId: (state, action) => {
      
      state.pesquisaId = action.payload.pesquisaId;
      console.log("Slice pesquisa: " + JSON.stringify(action))
    },
    clearPesquisaId: (state) => {
      state.pesquisaId = null;
    },
    
  },
});

export const { setPesquisaId, clearPesquisaId } = pesquisaSlice.actions;
export default pesquisaSlice.reducer;
