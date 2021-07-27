import React, { useRef, useState, useEffect } from 'react'
import '../../styles/css/Navbar.css'
import logo from '../../images/nav/logo.png'
import { Link, useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'
import SearchIcon from '../../icons/SearchIcon'

const NavBar = ({ searchResult }) => {
  const ref = useRef()
  const { push } = useHistory()
  const [search, setSearch] = useState(false)
  const [input, setInput] = useState('')

  const handleClick = e => {
    if (ref.current && !ref.current.contains(e.target)) {
      setSearch(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  })

  useEffect(() => {
    searchResult(input)
  }, [input])

  return (
    <div className='nav'>
      <div className='nav__logo'>
        <Link to='/'>
          <img src={logo} alt='company logo' className='nav__logo__img' />
        </Link>
      </div>
      {/* <SearchBar ref={ref} /> */}
      <div className={`${!search ? 'nav__menu' : 'nav__menu-active'}`}>
        <div className='g-search-bar' ref={ref}>
          {search && (
            <input
              className='rounded-l-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none '
              id='search'
              type='text'
              value={input}
              onChange={({ target }) => setInput(target.value)}
              placeholder='Search'
              onClick={() => push('/search')}
            />
          )}
          <div className='g-search-bar__icon pl-4 -mt-1' onClick={() => setSearch(!search)}>
            <SearchIcon className='cursor-pointer text-gray-400' fillColor='white' />
          </div>
        </div>
      </div>
    </div>
  )
}

NavBar.propTypes = {
  searchResult: PropTypes.func
}

export default NavBar
