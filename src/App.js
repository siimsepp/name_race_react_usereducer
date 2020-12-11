import { useEffect } from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import './App.css'
import NameRace from './components/NameRace'
import State from './context/State'

function App() {
  useEffect(() => {
    M.AutoInit()
  })
  return (
    <State>
      <div className='App'>
        <NameRace />
      </div>
    </State>
  )
}

export default App
