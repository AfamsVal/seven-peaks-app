import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import BookmarkIcon from '../../icons/BookmarkIcon'

const TopMenu = ({ title, isBookmark }) => {
  return (
    <div className='g-container__box g-container--box'>
      <div className='g-container__box__first_article-l g-container__box--left-title'>{title}</div>
      <div
        className={`g-container__box__first_article-r  ${
          isBookmark ? 'g-container__box--right-title' : 'g-container__box--right-title-end'
        }`}
      >
        {isBookmark ? (
          <div>
            <Link to='/bookmark' className='g-container__box__first_article-r--btn'>
              <BookmarkIcon style={{ paddingTop: '10px' }} /> VIEW BOOKMARK
            </Link>
          </div>
        ) : (
          <div />
        )}
        <div>
          <select className='g-container__box__first_article-r--select' name='cars' id='cars'>
            <option value='volvo'>Newest first</option>
            <option value='saab'>Oldest first</option>
            <option value='opel'>Most popular</option>
          </select>
        </div>
      </div>
    </div>
  )
}

TopMenu.propTypes = {
  title: PropTypes.string.isRequired,
  isBookmark: PropTypes.bool
}

export default TopMenu
