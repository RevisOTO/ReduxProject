import { configureStore } from "@reduxjs/toolkit";
import { changeColorSlice } from "./slices/changeColor";

export const store = configureStore({
    reducer: {
        color: changeColorSlice.reducer
    },
})