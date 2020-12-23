import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import logo from './img/logo.png'

const Navbar = () => {
  return (
    <Fragment>
      <div className='nav-home'>
        <Link to='/'>
          <img src={logo} alt='logo' />
        </Link>
        <Link to='/'>
          <span>NameRace</span>
        </Link>
      </div>

      <ul className='nav-links'>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </Fragment>
  )
}

export default Navbar
