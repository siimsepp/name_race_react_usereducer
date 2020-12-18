import React, { useContext } from 'react'
import Context from '../context/Context'

const Alert = () => {
  const context = useContext(Context)
  const { alertNimed } = context

  return alertNimed !== '' && <div className='alert'>{alertNimed}</div>
}

export default Alert
