import React from 'react'
import BookmarkIcon from '../../icons/BookmarkIcon'

const TopStories = () => {
  return (
    <div className='g-container__box'>
      <div className='g-container__box__first_article-l g-container__box--left-title'>
        Top stories
      </div>
      <div className='g-container__box__first_article-r g-container__box--right-title'>
        <p>
          <button className='g-container__box__first_article-r--btn'>
            <BookmarkIcon style={{ paddingTop: '10px' }} /> VIEW BOOKMARK
          </button>
        </p>
        <p>
          <select className='g-container__box__first_article-r--select' name='cars' id='cars'>
            <option value='volvo'>Newest first</option>
            <option value='saab'>Saab</option>
            <option value='opel'>Opel</option>
            <option value='audi'>Audi</option>
          </select>
        </p>
      </div>
    </div>
  )
}

export default TopStories
