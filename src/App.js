import './App.css'
import NameRace from './components/NameRace'
import State from './context/State'

function App() {
  return (
    <State>
      <div className='App'>
        <NameRace />
      </div>
    </State>
  )
}

export default App
