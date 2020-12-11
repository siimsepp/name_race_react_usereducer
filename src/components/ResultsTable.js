import React, { useContext } from 'react'
import Context from '../context/Context'

function ResultsTable() {
  const context = useContext(Context)
  const { names, score } = context

  return (
    <div>
      <ul className='collection'>
        {names.map((name, index) => (
          <li key={index} className='collection-item'>
            {name}: {score[index]}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ResultsTable
