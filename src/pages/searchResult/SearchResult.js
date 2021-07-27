import React, { useEffect, useContext, useState } from 'react'
import { Helmet } from 'react-helmet'
import axios from 'axios'
import { Link } from 'react-router-dom'
import TopMenu from '../../components/topMenu/TopMenu'
import '../../styles/css/Bookmark.css'
import { SearchContext } from '../../Routes'
import newsImg from '../../images/no-image.png'

const SearchResult = () => {
  const query = useContext(SearchContext)
  const [news, setNews] = useState([])

  useEffect(() => {
    const fetchData = async query => {
      try {
        const {
          data: { response }
        } = await axios.get(
          `https://content.guardianapis.com/search?q=${query}&api-key=${process.env.REACT_APP_FB_API_KEY}&show-fields=thumbnail`
        )

        if (response.status === 'ok') setNews(response.results)
      } catch (error) {
        console.log('errro', error)
      }
    }
    fetchData(query)
  }, [query])

  return !news?.length > 0 ? (
    <h1>No Result Found!</h1>
  ) : (
    <div className='g-container'>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Seven Peaks - Bookmark</title>
        <meta name='description' content='Seven peaks news and other related stories' />
        <meta name='keywords' content='Seven peaks, news, api' />
      </Helmet>
      <TopMenu title='Search Result' isBookmark />
      <div className='bookmark'>
        {news.map(article => (
          <div key={article.id} className='container top-three-news-r'>
            <Link to={`/article/${article.id}`}>
              <img
                src={article?.fields?.thumbnail || newsImg}
                alt={article?.webTitle}
                style={{ width: '100%', height: '100%' }}
              />
            </Link>
            <div className='content'>
              <Link to={`/article/${article.id}`} className='link-item'>
                <h3>{article?.webTitle}</h3>
                <p>{article?.webTitle}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default React.memo(SearchResult)
