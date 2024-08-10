import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./loginSlice";

export const store = configureStore({
    reducer: {// Aqui ficam os estados globais
        login: loginSlice
    }
})