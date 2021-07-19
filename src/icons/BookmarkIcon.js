import React from 'react'
import SvgIcon from './SvgIcons'
import PropTypes from 'prop-types'

const BookmarkIcon = props => (
  <SvgIcon {...props}>
    <path
      d='M12.75 2.75H5.25C4.425 2.75 3.75 3.425 3.75 4.25V16.25L9 14L14.25 16.25V4.25C14.25 3.425 13.575 2.75 12.75 2.75Z'
      fill={props.fillColor}
    />
    <mask
      id='mask0'
      mask-type='alpha'
      maskUnits='userSpaceOnUse'
      x='3'
      y='2'
      width='12'
      height='15'
    >
      <path
        d='M12.75 2.75H5.25C4.425 2.75 3.75 3.425 3.75 4.25V16.25L9 14L14.25 16.25V4.25C14.25 3.425 13.575 2.75 12.75 2.75Z'
        fill={props.fillColor}
      />
    </mask>
    <g mask='url(#mask0)'> </g>
  </SvgIcon>
)

BookmarkIcon.defaultProps = {
  fillColor: '#FFFFFF',
  width: '30',
  height: '30',
  viewBox: '0 0 30 30'
}

BookmarkIcon.propTypes = {
  fillColor: PropTypes.string
}

export default BookmarkIcon
