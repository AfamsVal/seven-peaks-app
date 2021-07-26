import React, { useState, useEffect } from 'react'
import BookmarkIcon from '../../icons/BookmarkIcon'
import PropTypes from 'prop-types'

const SubMenu = ({ bookmarked, date, path }) => {
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // eslint-disable-next-line
    const allBookedmarked = localStorage.getItem('seven-peaks-bookmarked') && JSON.parse(localStorage.getItem('seven-peaks-bookmarked'))
    if (allBookedmarked?.length > 0) {
      if (allBookedmarked.includes(path)) {
        setIsBookmarked(true)
      }
      setLoading(false)
    } else {
      // eslint-disable-next-line
        localStorage.setItem('seven-peaks-bookmarked', JSON.stringify([]))
      setLoading(false)
    }
  }, [path])

  const bookmarkHandler = () => {
    // eslint-disable-next-line
    let allBookedmarked = JSON.parse(localStorage.getItem('seven-peaks-bookmarked'))
    if (!allBookedmarked.includes(path)) {
      // Add to bookmark
      const newBookmarked = [...allBookedmarked, path]

      // eslint-disable-next-line
      localStorage.setItem('seven-peaks-bookmarked', JSON.stringify(newBookmarked))
    } else {
      // remove from bookmark
      const location = allBookedmarked.indexOf(path)
      allBookedmarked.splice(location, 1)
      // eslint-disable-next-line
      localStorage.setItem('seven-peaks-bookmarked', JSON.stringify(allBookedmarked))
    }
    setIsBookmarked(!isBookmarked)
    bookmarked(isBookmarked)
  }

  return (
    <div className='g-container__box g-container--min-box'>
      <div>
        <button onClick={bookmarkHandler} className='g-container__box__first_article-r--btn'>
          <BookmarkIcon style={{ paddingTop: '10px' }} />{' '}
          {loading ? 'LOADING...' : !isBookmarked ? 'ADD BOOKMARK' : 'REMOVE BOOKMARK'}
        </button>
        <p>{date}</p>
      </div>
    </div>
  )
}

SubMenu.propTypes = {
  bookmarked: PropTypes.func,
  date: PropTypes.string,
  path: PropTypes.string
}

export default SubMenu
