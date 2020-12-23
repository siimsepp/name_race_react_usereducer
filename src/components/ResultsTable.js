import React, { useContext } from 'react'
import Context from '../context/Context'
import Tippy from '@tippy.js/react'
import 'tippy.js/dist/tippy.css'

function ResultsTable() {
  const context = useContext(Context)
  const { names, score, protsMangijale, vooruVoitja, manguVoitja, fairGame } = context

  return (
    <div>
      <ul className='collection'>
        {names.map((name, index) => (
          <li key={index} className='collection-item'>
            <div>
              {name}: {score[index]}
            </div>
            {vooruVoitja !== '' && manguVoitja === '' && !fairGame && (
              <Tippy content='Järgmise vooru võitmise tõenäosus (%).'>
                <div>{(protsMangijale[index] * 100).toFixed(1)}</div>
              </Tippy>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ResultsTable
