import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { blue, green, randomColor, red } from './store/slices/changeColor'
import { useState } from 'react'

function App() {
  const { color } = useSelector ( state => state.color )
  const dispatch = useDispatch();

  const handleOnClick = ({ target }) => {
    switch (target.id) {
      case "random":
        dispatch(randomColor())
        // document.body.style.background = color Sirve pero va retardado una accion {quizas por el redibuijado y como de funciona react??}
        break;
      case "green":
        dispatch(green())
        // document.body.style.background = color
        break;
      case "red":
        dispatch(red())
        // document.body.style.background = color
        break;
      case "blue":
        dispatch(blue())
        // document.body.style.background = color
        break;  
    }
    console.log(color)
  }
  return (
    <div className="App" style={{ backgroundColor: color }}> {/*Sirve sin retardo pero solo el area central*/ }
      <h1>ChangeColor React-Redux</h1>
      <div className="card">
        <button id ="random" onClick={(event) => {handleOnClick(event)}}>
          Cambiar color { color }
        </button>
        <button id="green" onClick={(event) => {handleOnClick(event)}}>
          Cambiar a Verde
        </button>
        <button id="red" onClick={(event) => {handleOnClick(event)}}>
          Cambiar a Rojo
        </button>
        <button id="blue" onClick={(event) => {handleOnClick(event)}}>
          Cambiar a Azul
        </button>
      </div>
    </div>
  )
}

export default App
