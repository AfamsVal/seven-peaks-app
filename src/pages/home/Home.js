import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import axios from 'axios'
import { TopNews } from '../../components/topNews'
import { TopMenu } from '../../components/topMenu'
import TopThreeNews from '../../components/topThreeNews/TopThreeNews'
import '../../styles/css/Home.css'
import Loader from '../../sharedComponents/loader/Loader'

const Home = () => {
  const [news, setNews] = useState([])
  const fetchData = async () => {
    try {
      const {
        data: { response }
      } = await axios.get(
        `https://content.guardianapis.com/search?api-key=${process.env.REACT_APP_FB_API_KEY}&show-fields=thumbnail`
      )

      if (response.status === 'ok') setNews(response.results)
    } catch (error) {
      console.log('errro', error)
    }
  }

  useEffect(() => console.log('news', news), [news])

  useEffect(() => {
    fetchData()
  }, [])

  return news.length === 0 ? (
    <Loader />
  ) : (
    <div className='g-container'>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Seven Peaks - Home</title>
        <meta name='description' content='Seven peaks news and other related stories' />
        <meta name='keywords' content='Seven peaks, news, api' />
      </Helmet>
      <TopMenu isBookmark title='Top stories' />
      <TopNews news={news} />
      <TopThreeNews news={news.slice(3, 6)} isSubTitle />
      <div>
        <h1 className='g-container__box g-container--box'>Sports</h1>
        <TopThreeNews news={news.slice(0, 3)} />
      </div>
    </div>
  )
}

export default Home
