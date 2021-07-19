import React from 'react'
import '../../styles/css/Navbar.css'
import logo from '../../images/nav/logo.png'
import SearchBar from '../searchBar/SearchBar'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='nav'>
      <div className='nav__logo'>
        <Link to='/'>
          <img src={logo} alt='company logo' className='nav__logo__img' />
        </Link>
      </div>
      <div className='nav__menu'>
        <SearchBar />
      </div>
    </div>
  )
}

export default NavBar
