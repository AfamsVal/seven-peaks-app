import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import axios from 'axios'
import SubMenu from '../../components/subMenu/SubMenu'
import '../../styles/css/Article.css'
import newsImg from '../../images/news.png'
import { useParams } from 'react-router-dom'
import FooterMsg from '../../sharedComponents/footerMsg/FooterMsg'

const Article = () => {
  const { a, b, c, d, e, slug } = useParams()
  const path = e ? `${a}/${b}/${c}/${d}/${e}/${slug}` : `${a}/${b}/${c}/${d}/${slug}`

  const [saved, setSaved] = React.useState(false)
  const [visible, setVisible] = React.useState(false)

  const [news, setNews] = useState({})
  const fetchData = async () => {
    try {
      const {
        data: { response }
      } = await axios.get(
        `https://content.guardianapis.com/${path}?api-key=${process.env.REACT_APP_FB_API_KEY}&show-fields=thumbnail`
      )

      if (response.status === 'ok') setNews(response.content)
    } catch (error) {
      console.log('errro', error)
    }
  }

  useEffect(() => console.log('single News', news), [news])

  useEffect(() => {
    fetchData()
  }, [])
  const bookmarked = type => {
    setSaved(type)
    setVisible(true)
    setTimeout(() => setVisible(false), 2000)
  }

  return (
    <div className='g-container'>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Seven Peaks - Article</title>
        <meta name='description' content={slug} />
        <meta name='keywords' content='Seven peaks, news, api' />
      </Helmet>
      <SubMenu
        date={news.webPublicationDate}
        bookmarked={type => bookmarked(type)}
        title='All bookmark'
      />
      <div className='article'>
        <div className='article__left'>
          <h1>{news.webTitle}</h1>
          <h3>
            Continent is seeing more cases spread to the provinces; Trump supporters can’t sue over
            catching Covid-19 at rallies; Brazil confirms 30,000 new cases
          </h3>
          <p>
            South Africa is the worst-affected country on the continent, with more than a quarter of
            all infections. But most countries have fewer than 1,000 infections, said Moeti, and the
            UN does not believe that severe cases are going undetected. Africa has recorded fewer
            than 6,000 deaths, according to an AFP tally, but just five countries account for 70% of
            these: South Africa, Algeria, Nigeria, Egypt and Sudan. In Africa, “the pandemic is
            still concentrated in and around capital cities but we are seeing more and more cases
            spread out into the provinces,” Moeti said. She said that in most countries on the
            continent, the virus entered capitals through international flights from Europe.
            Africa’s relatively young population compared to other continents, and in-built
            experience of dealing with disease outbreaks have been cited as reasons why Africa has
            not so far seen the death rates experienced on other continents. Moeti said early action
            by African countries had helped keep the numbers low - but constant vigilance was still
            needed. The US remains the worst-affected country worldwide, passing 2 million
            infections on Thursday. Spikes have been recorded in several states, including Arizona,
            which is confirming more than 1,000 cases daily. US president Donald Trump has
            introduced a policy stopping attendees at his rallies from suing the campaign or venue
            if they contract coronavirus at the events. A statement on the campaign website page for
            a rally in Tulsa says: “By clicking register below, you are acknowledging that an
            inherent risk of exposure to COVID-19 exists in any public place where people are
            present. By attending the Rally, you and any guests voluntarily assume all risks related
            to exposure to COVID-19 and agree not to hold Donald J. Trump for President, Inc.; BOK
            Center; ASM Global; or any of their affiliates … liable for any illness or injury.”
            Stocks fell sharply Thursday on Wall Street as coronavirus cases increased, deflating
            recent optimism for a quick economic recovery. The DOW Jones Industrial Average saw its
            worst day in weeks, closing down almost 7%. Asian shares were moderately lower on Friday
            as a result of the overnight rout. The US Federal Reserve warned on Wednesday that a
            second wave of infections risks prolonging the country’s recovery. The Fed predicted
            unemployment will still be at around 9% by December – close to the worst levels seen in
            the GFC – but Federal Reserve chair Jerome Powell said that a second outbreak could mean
            that figure was optimistic.
          </p>
        </div>
        <div className='article__right'>
          <div className=''>
            <p>
              <img src={news?.fields?.thumbnail || newsImg} alt='news' width='100%' />
            </p>
            <small>
              A woman walks along a flooded road amidst a storm in the Masiphumelele informal
              settlement in Cape Town Photograph: Nic Bothma/EPA
            </small>
          </div>
        </div>
      </div>
      <FooterMsg saved={saved} visible={visible} />
    </div>
  )
}

export default Article
