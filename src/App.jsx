import { useState, useRef } from 'react'
import axios from 'axios'
import './App.css'
import logo from './assets/logo.png'
import Weatherinformations from './components/Weatherinformations/Weatherinformations'
import Weatherinformations5Days from './components/Weatherinformations5Days/Weatherinformations5Days'


function App() {
  const [weather, setWeather] = useState()
  const [weather5Days, setWeather5Days] = useState()
 
  const inputRef = useRef()

  async function buscarcidade(){

    const city = inputRef.current.value
    const key = "6f1640afb77e4ba17ac133d6baf22646"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`
    const url5Days = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=pt_br&units=metric`

    const apiInfo = await axios.get(url)
    const apiInfo5Days = await axios.get(url5Days)
    
    setWeather5Days(apiInfo5Days.data)
  
    setWeather(apiInfo.data)
   

  }

  return (
    <div className='container'>
  
   
      <h1>Previsão do Tempo</h1>
      <img src={logo} alt="Logo" className='logo' /><br />
      <input ref={inputRef} type="text" placeholder='Digite a cidade' />
      <button onClick={buscarcidade}>Buscar</button>

      {weather &&<Weatherinformations weather={weather}/>}
      {weather5Days && <Weatherinformations5Days weather5Days={weather5Days}/>}
    
      
    </div>
  )
}

export default App
