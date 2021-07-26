import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import '../../styles/css/TopThreeNews.css'

const TopThreeNews = ({ news, isSubTitle }) => {
  return (
    <div className='top-three-news'>
      {news.map(article => (
        <div key={article?.id} className='container top-three-news-r'>
          <Link to={`/article/${article.id}`}>
            <img
              src={article?.fields?.thumbnail}
              alt='Notebook'
              style={{ width: '100%', height: '100%' }}
            />
          </Link>
          <div className='content'>
            <Link to={`/article/${article.id}`} className='link-item'>
              <h2>{article.webTitle}</h2>
              {isSubTitle ? (
                <p>
                  Lorem ipsum dolor sit amet, an his etiam torquatos. Tollit soleat phaedrum te duo,
                  eum cu recteque expetendis neglegentur. Cu mentitum maiestatis persequeris pro,
                  pri ponderum tractatos ei.
                </p>
              ) : (
                ''
              )}
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

TopThreeNews.propTypes = {
  news: PropTypes.array,
  isSubTitle: PropTypes.bool
}

export default TopThreeNews
