import React, { useContext } from 'react'
import Sisend from './Sisend'
import ResultsTable from './ResultsTable'
import Alert from './Alert'
import Statistika from './Statistika'
import Context from '../context/Context'

function NameRace() {
  const context = useContext(Context)
  const {
    alertNimed,
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
    <div className='row'>
      <div className='col s6 offset-s3'>
        <div className='card white darken-3'>
          <div className='card-content'>
            {alertNimed !== '' && <Alert />}
            {display.sisendForm && <Sisend />}
            {display.pickWinnerBtn && (
              <div>
                <button
                  disabled={pickWinnerBtnDisabled}
                  className='btn waves-effect waves-light green'
                  onClick={pickWinner}
                >
                  Vali võitja
                </button>

                <button
                  disabled={lopetaMangBtnDisabled}
                  className='btn waves-effect waves-light red white-text right'
                  onClick={sisestaUuedMangijad}
                >
                  X
                </button>
              </div>
            )}
            {display.vooruVoitja && <h5>Vooru võitja: {vooruVoitja}</h5>}
            {display.resultsTable && <ResultsTable />}
            {display.manguVoitja && (
              <h5>
                Võitis <span style={{ color: 'red', fontSize: '30px' }}>{manguVoitja.toUpperCase()}</span>
              </h5>
            )}
            {display.mangiUuestiBtn && (
              <div>
                <button className='btn waves-effect waves-light green btn-margin' onClick={mangiUuesti}>
                  Mängi uuesti
                </button>
                <button className='btn waves-effect waves-light purple btn-margin' onClick={sisestaUuedMangijad}>
                  Sisesta uued mängijad
                </button>
                <button className='btn waves-effect waves-light orange btn-margin' onClick={vaataStatistikat}>
                  Statistika
                </button>
              </div>
            )}
            {display.statistika && <Statistika />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default NameRace
