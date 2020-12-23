import React, { useState, useEffect, useContext, useRef } from 'react'
import Context from '../context/Context'

import Tippy from '@tippy.js/react'
import 'tippy.js/dist/tippy.css'

function Sisend() {
  const [state, setState] = useState({
    names: '',
    punktini: ''
  })
  const [fairGame, setFairGame] = useState(true)

  const context = useContext(Context)
  const { setAlert, andmedSisse } = context

  const { names, punktini } = state

  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  const handleChange = e => setState({ ...state, [e.target.name]: e.target.value })
  const handleRadioChange = e => setFairGame(e.target.value === 'true')

  const arrName = names => {
    const arr = names
      .split(',')
      .map(nimi => nimi.toLowerCase())
      .map(nimi => nimi.trim())
      .filter(nimi => nimi !== '')
      .map(nimi => nimi.replace(/\s+/g, ' ')) // Et ei saaks programmi errorisse lasta nimega, kus eesnime ja perenime vahel on mitu tühikut

    //   Iga nime esitäht suurtäheliseks, kaasaarvatud nimed, mis koosnevad mitmest tühikuga eraldatud nimest
    const capitalize = arr
      .map(nimi => {
        return nimi
          .trim()
          .split(' ')
          .map(osanimi => {
            return osanimi[0].toUpperCase() + osanimi.substring(1)
          })
      })
      .map(nimiArr => nimiArr.join(' '))
    return capitalize
  }

  const handleSubmit = e => {
    e.preventDefault()
    const arrNames = arrName(names)
    if (names === '') {
      setAlert('Palun sisesta mängijate nimed')
    } else if (arrNames.length === 1) {
      setAlert('Ühe mängijaga on see mäng hirmus igav')
    } else if ([...new Set(arrNames)].length !== arrNames.length) {
      setAlert('Mängija saab osa võtta ühe esindajaga korraga')
    } else if (punktini === '') {
      setAlert('Palun sisesta mitme punktini mängitakse')
    } else if (isNaN(punktini)) {
      setAlert('Palun sisesta punktiväljale arv')
    } else if (+punktini % 1 !== 0) {
      setAlert('Palun sisesta punktiväljale täisarv')
    } else if (+punktini < 1) {
      setAlert('Palun sisesta punktiväljale positiivne täisarv')
    } else {
      andmedSisse({
        arrNames,
        punktini,
        fairGame
      })
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        id='nimed'
        name='names'
        value={names}
        onChange={handleChange}
        placeholder='Eralda nimed komaga'
        ref={inputRef}
      />

      <input
        type='text'
        id='punktid'
        name='punktini'
        value={punktini}
        onChange={handleChange}
        placeholder='Mitme punkti peale mäng käib'
      />

      <div className='radio-btns'>
        <div className='radio-btn'>
          <Tippy content='Hetkeskoor ei muuda järgmise vooru võitmise tõenäosust.'>
            <label>
              <input
                type='radio'
                value='true'
                name='fairGame'
                checked={fairGame === true}
                onChange={handleRadioChange}
              />
              Aus mäng
            </label>
          </Tippy>
        </div>
        <div className='radio-btn'>
          <Tippy content='Mahajääjail on järgmises voorus eelis.'>
            <label>
              <input
                type='radio'
                value='false'
                name='fairGame'
                checked={fairGame === false}
                onChange={handleRadioChange}
              />
              Tagaajamine
            </label>
          </Tippy>
        </div>
      </div>

      <button type='submit' className='btn btn-shadow blue'>
        Mängima
      </button>
    </form>
  )
}

export default Sisend
