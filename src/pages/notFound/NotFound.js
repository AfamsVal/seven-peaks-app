import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/css/NotFound.css'

const NotFound = () => {
  return (
    <div className='not-found'>
      <div className='not-found__box'>
        <h3 className='not-found__box__header'>404</h3>

        <span className='not-found__box__subtitle'>Page Could Not Be Found</span>

        <div className='not-found__box__content'>
          <Link to='/' className='not-found__box__content__btn'>
            Back To Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound
