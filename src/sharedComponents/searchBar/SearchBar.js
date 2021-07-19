import React from 'react'
import SearchIcon from '../../icons/SearchIcon'

const SearchBar = () => {
  return (
    <div>
      <div className='g-search-bar rounded-md shadow-md'>
        <input
          className='rounded-l-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none bg-transparent'
          id='search'
          type='text'
          placeholder='Search'
        />
        <div className='g-search-bar__icon pl-4 -mt-1'>
          <SearchIcon className='cursor-pointer text-gray-400' fillColor='white' />
        </div>
      </div>
    </div>
  )
}

export default SearchBar
