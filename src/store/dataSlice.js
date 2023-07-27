import { createSlice } from "@reduxjs/toolkit";
const dataSlice = createSlice({
    name: "recetas",
    initialState: {
        datos: null,
    },
    reducers: {
        actualizarDatos: (state, action) => {
            state.datos = action.payload;
        },
    },

});

export const { actions, reducer } = dataSlice;
export default dataSlice;
