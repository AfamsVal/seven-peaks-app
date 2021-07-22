import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import TopMenu from '../../components/topMenu/TopMenu'
import '../../styles/css/Bookmark.css'

// https://content.guardianapis.com/search?api-key=86acf1db-61b9-4eef-b1c1-4b4472cb9665

const Bookmark = () => {
  return (
    <div className='g-container'>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Seven Peaks - Bookmark</title>
        <meta name='description' content='Seven peaks news and other related stories' />
        <meta name='keywords' content='Seven peaks, news, api' />
      </Helmet>
      <TopMenu title='All bookmark' />
      <div className='bookmark'>
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
                Lorem ipsum dolor sit amet, an his etiam torquatos. Tollit soleat phaedrum te duo,
                eum cu recteque expetendis neglegentur. Cu mentitum maiestatis persequeris pro, pri
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
                Lorem ipsum dolor sit amet, an his etiam torquatos. Tollit soleat phaedrum te duo,
                eum cu recteque expetendis neglegentur. Cu mentitum maiestatis persequeris pro, pri
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
                Lorem ipsum dolor sit amet, an his etiam torquatos. Tollit soleat phaedrum te duo,
                eum cu recteque expetendis neglegentur. Cu mentitum maiestatis persequeris pro, pri
                ponderum tractatos ei.
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bookmark
