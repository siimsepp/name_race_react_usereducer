import React, { useContext } from 'react'
import Sisend from './Sisend'
import ResultsTable from './ResultsTable'
import Alert from './Alert'
import Statistika from './Statistika'
import Context from '../context/Context'

function NameRace() {
  const context = useContext(Context)
  const {
    display,
    pickWinnerBtnDisabled,
    lopetaMangBtnDisabled,
    vooruVoitja,
    manguVoitja,
    pickWinner,
    sisestaUuedMangijad,
    mangiUuesti,
    vaataStatistikat
  } = context

  return (
    <div className='container'>
      <div className='card-container'>
        <div className='card card-shadow'>
          <Alert />
          {display.sisendForm && <Sisend />}
          {display.pickWinnerBtn && (
            <div className='vali-voitja-x'>
              <button disabled={pickWinnerBtnDisabled} className='small-btn btn-shadow green' onClick={pickWinner}>
                Vali võitja
              </button>

              <button
                disabled={lopetaMangBtnDisabled}
                className='small-btn btn-shadow red'
                onClick={sisestaUuedMangijad}
              >
                X
              </button>
            </div>
          )}
          {display.vooruVoitja && (
            <p>
              Vooru võitja: <span style={{ fontSize: '2.1rem', color: ' #2196f3' }}>{vooruVoitja}</span>
            </p>
          )}
          {display.resultsTable && <ResultsTable />}
          {display.manguVoitja && (
            <p>
              Võitis <span style={{ color: 'red', fontSize: '2.1rem' }}>{manguVoitja.toUpperCase()}</span>
            </p>
          )}
          {display.mangiUuestiBtn && (
            <div>
              <button className='btn btn-shadow green' onClick={mangiUuesti}>
                Mängi uuesti
              </button>
              <button className='btn btn-shadow purple' onClick={sisestaUuedMangijad}>
                Sisesta uued mängijad
              </button>
              <button className='btn btn-shadow orange' onClick={vaataStatistikat}>
                Statistika
              </button>
            </div>
          )}
          {display.statistika && <Statistika />}
        </div>
      </div>
    </div>
  )
}

export default NameRace
