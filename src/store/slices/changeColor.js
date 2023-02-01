import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const changeColorSlice = createSlice({
  name: 'changeColor',
  initialState:{
    color:"#242424"
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
    green: (state) => {
      state.color = "#44FF00"
    },
    red: (state) => {
      state.color = "#D51212"
    },
    blue: (state) => {
      state.color = "#000866"
    }
  },
})

export const { randomColor, green, red, blue } = changeColorSlice.actions