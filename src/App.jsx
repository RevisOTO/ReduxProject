import reactLogo from './assets/react.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { randomColor } from './store/slices/changeColor'

function App() {
  const { color } = useSelector ( state => state.color )
  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch(randomColor())
    document.body.style.background = color
  }
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>ChangeColor React-Redux</h1>
      <div className="card">
        <button onClick={() => {handleOnClick()}}>
          Cambiar color
        </button>
      </div>
    </div>
  )
}

export default App
