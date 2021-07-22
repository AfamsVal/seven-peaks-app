import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/css/TopThreeNews.css'

const TopThreeNews = () => {
  return (
    <div className='top-three-news'>
      <div className='container top-three-news-r'>
        <Link to='/article'>
          <img
            src='https://thumbs.dreamstime.com/b/random-click-waste-bulb-different-angle-random-click-waste-bulb-different-angle-trying-to-give-its-light-back-167178353.jpg'
            alt='Notebook'
            style={{ width: '100%', height: '100%' }}
          />
        </Link>
        <div className='content'>
          <Link to='/article' className='link-item'>
            <h1>Heading</h1>
            <p>
              Lorem ipsum dolor sit amet, an his etiam torquatos. Tollit soleat phaedrum te duo, eum
              cu recteque expetendis neglegentur. Cu mentitum maiestatis persequeris pro, pri
              ponderum tractatos ei.
            </p>
          </Link>
        </div>
      </div>
      <div className='container top-three-news-r'>
        <Link to='/article'>
          <img
            src='https://thumbs.dreamstime.com/b/random-click-waste-bulb-different-angle-random-click-waste-bulb-different-angle-trying-to-give-its-light-back-167178353.jpg'
            alt='Notebook'
            style={{ width: '100%', height: '100%' }}
          />
        </Link>
        <div className='content'>
          <Link to='/article' className='link-item'>
            <h1>Heading</h1>
            <p>
              Lorem ipsum dolor sit amet, an his etiam torquatos. Tollit soleat phaedrum te duo, eum
              cu recteque expetendis neglegentur. Cu mentitum maiestatis persequeris pro, pri
              ponderum tractatos ei.
            </p>
          </Link>
        </div>
      </div>
      <div className='container top-three-news-r'>
        <Link to='/article'>
          <img
            src='https://thumbs.dreamstime.com/b/random-click-waste-bulb-different-angle-random-click-waste-bulb-different-angle-trying-to-give-its-light-back-167178353.jpg'
            alt='Notebook'
            style={{ width: '100%', height: '100%' }}
          />
        </Link>
        <div className='content'>
          <Link to='/article' className='link-item'>
            <h1>Heading</h1>
            <p>
              Lorem ipsum dolor sit amet, an his etiam torquatos. Tollit soleat phaedrum te duo, eum
              cu recteque expetendis neglegentur. Cu mentitum maiestatis persequeris pro, pri
              ponderum tractatos ei.
            </p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default TopThreeNews
