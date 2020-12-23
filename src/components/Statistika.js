import React, { useContext } from 'react'
import Context from '../context/Context'

const Statistika = () => {
  const context = useContext(Context)
  const { stats, names, mangiUuesti, sisestaUuedMangijad } = context

  // Konstrueerib lause stiilis: "Siim, Tuul ja Hüüp"
  const nimedTekstina = names => {
    const txt = names.join(', ')
    const n = txt.lastIndexOf(', ')
    let esimene = txt.slice(0, n)
    let teine = txt.slice(n + 1, txt.length)
    return `${esimene} ja ${teine}`
  }

  // Kui on alles vaid üks mängija, kelle skoor on 0 ehk pole võitnud ühtegi mängu. Samas peab olema ka !== -1, sest muidu oleks esimene === viimane ikkagi täidetud, kui kellegil 0 pole.
  const loendaNulle = stats => stats.indexOf(0) === stats.lastIndexOf(0) && stats.indexOf(0) !== -1

  return (
    <div>
      <p style={{ marginBottom: '1.5rem' }}>
        {nimedTekstina(names)} on osalenud{' '}
        <span style={{ color: 'blue', fontSize: '22px' }}>{stats.reduce((a, b) => a + b)}</span> mängus
      </p>
      <p>Tulemused:</p>
      <ul className='collection'>
        {names.map((name, index) => (
          <li key={index} className='collection-item'>
            {name}: {stats[index]}
          </li>
        ))}
      </ul>
      {loendaNulle(stats) && (
        <div>
          Väga piinlik! <span style={{ color: 'red', fontSize: '22px' }}>{names[stats.indexOf(0)]}</span> on ainsana
          ikka veel nulli peal
        </div>
      )}

      <div>
        <button className='btn btn-shadow green' onClick={mangiUuesti}>
          Mängi uuesti
        </button>
        <button className='btn btn-shadow purple' onClick={sisestaUuedMangijad}>
          Sisesta uued mängijad
        </button>
      </div>
    </div>
  )
}

export default Statistika
