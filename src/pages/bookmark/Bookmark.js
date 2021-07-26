import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import TopMenu from '../../components/topMenu/TopMenu'
import '../../styles/css/Bookmark.css'
import Loader from '../../sharedComponents/loader/Loader'

const Bookmark = () => {
  const [loading, setLoading] = useState(true)
  const [news, setNews] = useState([])

  useEffect(() => {
    // eslint-disable-next-line
    const allBookedmarked = localStorage.getItem('seven-peaks-bookmarked') && JSON.parse(localStorage.getItem('seven-peaks-bookmarked'))
    if (allBookedmarked?.length > 0) {
      setNews(allBookedmarked)
      setLoading(false)
    } else {
      setLoading(false)
    }
  }, [])

  return loading ? (
    <Loader />
  ) : (
    <div className='g-container'>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Seven Peaks - Bookmark</title>
        <meta name='description' content='Seven peaks news and other related stories' />
        <meta name='keywords' content='Seven peaks, news, api' />
      </Helmet>
      <TopMenu title='All bookmark' />
      <div className='bookmark'>
        {news.map(article => (
          <div key={article?.id} className='container top-three-news-r'>
            <Link to={`/article/${article.id}`}>
              <img
                src={article?.fields?.thumbnail}
                alt={article?.webTitle}
                style={{ width: '100%', height: '100%' }}
              />
            </Link>
            <div className='content'>
              <Link to={`/article/${article.id}`} className='link-item'>
                <h1>Heading</h1>
                <p>{article?.webTitle}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Bookmark
