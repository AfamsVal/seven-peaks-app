/* eslint-disable */
import React, { useState, useEffect } from 'react'
import BookmarkIcon from '../../icons/BookmarkIcon'
import PropTypes from 'prop-types'

const SubMenu = ({ bookmarked, date, path, news }) => {
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const allBookedmarked = localStorage.getItem('seven-peaks-bookmarked') && JSON.parse(localStorage.getItem('seven-peaks-bookmarked'))

    const allNews =
      localStorage.getItem('seven-peaks-news') &&
      JSON.parse(localStorage.getItem('seven-peaks-news'))

    if (allBookedmarked?.length > 0) {
      if (allBookedmarked.includes(path)) {
        setIsBookmarked(true)
      }
      setLoading(false)
    } else {
      localStorage.setItem('seven-peaks-bookmarked', JSON.stringify([]))
      localStorage.setItem('seven-peaks-news', JSON.stringify([]))
      setLoading(false)
    }
  }, [path])

  const bookmarkHandler = () => {

    let allBookedmarked = JSON.parse(localStorage.getItem('seven-peaks-bookmarked'))
    let allNews = JSON.parse(localStorage.getItem('seven-peaks-news'))
    if (!allBookedmarked.includes(path)) {
      // Add to bookmark
      const newBookmarked = [...allBookedmarked, path]

      localStorage.setItem('seven-peaks-bookmarked', JSON.stringify(newBookmarked))
      localStorage.setItem('seven-peaks-news', JSON.stringify([...allNews,news]))
      
    } else {
      // remove from bookmark
      const location = allBookedmarked.indexOf(path)
      allBookedmarked.splice(location, 1)
      localStorage.setItem('seven-peaks-bookmarked', JSON.stringify(allBookedmarked))
      
      // Remove news
      for (var i =0; i < allNews.length; i++){
      if (allNews[i].id === news.id) {
        allNews.splice(i,1);
          break;
      }
      }

      
      localStorage.setItem('seven-peaks-news', JSON.stringify(allNews))
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
  path: PropTypes.string,
  news: PropTypes.object
}

export default SubMenu
