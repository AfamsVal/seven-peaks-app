import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import '../../styles/css/TopNews.css'

const TopNews = ({ news }) => {
  const topBox = news.slice(1, 3)
  const belowBox = news.slice(3, 5)
  return (
    <div className='top-news'>
      <div className='container top-news-l'>
        <Link to={`/article/${news[0].id}`}>
          <img
            src={news[0].fields.thumbnail}
            alt={news[0]?.webTitle}
            style={{ width: '100%', height: '100%' }}
          />
        </Link>
        <div className='content'>
          <Link
            // to={`/article/${news[0].id.split('/')[news[0].id.split('/').length - 1]}`}
            to={`/article/${news[0].id}`}
            className='link-item'
          >
            <h2>{news[0].webTitle}</h2>
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
          {topBox.map(article => (
            <div key={article.id} className='container news-box-one__min'>
              <Link to={`/article/${article.id}`}>
                <img
                  src={article?.fields?.thumbnail}
                  alt={article?.webTitle}
                  style={{ width: '100%', height: '100%' }}
                />
              </Link>
              <div className='content'>
                <Link to={`/article/${article.id}`} className='link-item'>
                  <p>{article?.webTitle}</p>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className='news-box-two'>
          {belowBox.map(article => (
            <div key={article.id} className='news-box-two__min'>
              <Link
                style={{ color: '#FFFFFF', textDecoration: 'none' }}
                to={`/article/${article.id}`}
              >
                {article.webTitle}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

TopNews.propTypes = {
  news: PropTypes.array
}

export default TopNews
