import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const changeColorSlice = createSlice({
  name: 'changeColor',
  initialState:{
    color: "#ffffff"
  },
  reducers: {
    randomColor: (state) => {

        let simbolos, color;
        simbolos = "0123456789ABCDEF";
        color = "#";
    
        for(let i = 0; i < 6; i++){
            color = color + simbolos[Math.floor(Math.random() * 16)];
        }

        state.color = color
      
    },
  },
})

export const { randomColor } = changeColorSlice.actions