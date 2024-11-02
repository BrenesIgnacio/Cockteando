import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'
export default function Navbar() {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <Link to='/'>
          <img src={logo} alt='cockteleando Logo' className='logo' />
        </Link>
        <ul className='nav-links'>
          <li>
            <Link to='/RandomCocktail'>Surprise me</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
// el Link de "Sorprendeme" hay que actualizarlo para hacer su funcion, solo redirecciona a home.