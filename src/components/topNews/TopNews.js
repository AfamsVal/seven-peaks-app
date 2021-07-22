import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/css/TopNews.css'

const TopNews = () => {
  return (
    <div className='top-news'>
      <div className='container top-news-l'>
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

      <div className='top-news-r'>
        <div className='news-box-one'>
          <div className='container news-box-one__min'>
            <Link to='/article'>
              <img
                src='https://thumbs.dreamstime.com/b/random-click-waste-bulb-different-angle-random-click-waste-bulb-different-angle-trying-to-give-its-light-back-167178353.jpg'
                alt='Notebook'
                style={{ width: '100%', height: '100%' }}
              />
            </Link>
            <div className='content'>
              <Link to='/article' className='link-item'>
                <p>
                  Lorem ipsum dolor sit amet, an his etiam torquatos. Tollit soleat phaedrum te duo,
                  eum cu recteque expetendis neglegentur.
                </p>
              </Link>
            </div>
          </div>
          <div className='container news-box-one__min'>
            <Link to='/article'>
              <img
                src='https://thumbs.dreamstime.com/b/random-click-waste-bulb-different-angle-random-click-waste-bulb-different-angle-trying-to-give-its-light-back-167178353.jpg'
                alt='Notebook'
                style={{ width: '100%', height: '100%' }}
              />
            </Link>
            <div className='content'>
              <Link to='/article' className='link-item'>
                <p>
                  Lorem ipsum dolor sit amet, an his etiam torquatos. Tollit soleat phaedrum te duo,
                  eum cu recteque expetendis neglegentur.
                </p>
              </Link>
            </div>
          </div>
        </div>
        <div className='news-box-two'>
          <div className='news-box-two__min'>
            Spike Lee: Race relations today are a direct response to having a black president
          </div>
          <div className='news-box-two__min'>
            Spanish archaeologist sentenced for faking Basque finds
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopNews
