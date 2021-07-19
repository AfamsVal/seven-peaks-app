import React from 'react'
import PropTypes from 'prop-types'

const SvgIcon = props => {
  const {
    className,
    width,
    height,
    color,
    fillColor,
    style,
    fontSize,
    viewBox,
    children,
    onClick
  } = props
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox={viewBox}
      className={className}
      fill={fillColor}
      onClick={onClick}
      style={{
        color,
        fontSize,
        ...style
      }}
    >
      {children}
    </svg>
  )
}

SvgIcon.defaultProps = {
  color: 'inherit',
  fontSize: 'default',
  viewBox: '0 0 27 30',
  fillColor: 'currentColor',
  width: '27',
  height: '30'
}
SvgIcon.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  fillColor: PropTypes.string,
  fontSize: PropTypes.string,
  viewBox: PropTypes.string,
  children: PropTypes.ReactNode,
  height: PropTypes.string,
  width: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func
}

export default SvgIcon
