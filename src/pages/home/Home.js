import React from 'react'
import { Helmet } from 'react-helmet'
import { TopNews } from '../../components/topNews'
import { TopStories } from '../../components/topStories'
import '../../styles/css/Home.css'

const Home = () => {
  return (
    <div className='g-container'>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Seven Peaks - Home</title>
        <meta name='description' content='Seven peaks news and other related stories' />
        <meta name='keywords' content='Seven peaks, news, api' />
      </Helmet>
      <TopStories />
      <TopNews />
    </div>
  )
}

export default Home
