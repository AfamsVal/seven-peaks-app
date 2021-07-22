import React from 'react'
import BookmarkIcon from '../../icons/BookmarkIcon'
import PropTypes from 'prop-types'

const FooterMsg = ({ saved, visible }) => {
  return visible ? (
    <div className={saved ? 'footer-msg-red' : 'footer-msg-green'}>
      <p style={{ display: 'flex', alignContent: 'center', justifyContent: 'center' }}>
        <BookmarkIcon /> <span>{!saved ? 'SAVED TO BOOKMARKS' : 'REMOVED FROM BOOKMARKS'}</span>
      </p>
    </div>
  ) : (
    ''
  )
}

FooterMsg.propTypes = {
  saved: PropTypes.bool,
  visible: PropTypes.bool
}

export default FooterMsg
