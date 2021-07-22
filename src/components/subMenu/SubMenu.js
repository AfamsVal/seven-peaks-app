import React, { useState } from 'react'
import BookmarkIcon from '../../icons/BookmarkIcon'
import PropTypes from 'prop-types'

const SubMenu = ({ bookmarked }) => {
  const [isBookmarked, setIsBookmarked] = useState(false)

  const bookmarkHandler = () => {
    setIsBookmarked(!isBookmarked)
    bookmarked(isBookmarked)
  }

  return (
    <div className='g-container__box g-container--min-box'>
      <div>
        <button onClick={bookmarkHandler} className='g-container__box__first_article-r--btn'>
          <BookmarkIcon style={{ paddingTop: '10px' }} />{' '}
          {!isBookmarked ? 'ADD BOOKMARK' : 'REMOVE BOOKMARK'}
        </button>
        <p>Fri 12 Jun 2020 06.40 BST</p>
      </div>
    </div>
  )
}

SubMenu.propTypes = {
  bookmarked: PropTypes.func
}

export default SubMenu
