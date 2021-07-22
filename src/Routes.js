import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Article } from './pages/article'
import { Bookmark } from './pages/bookmark'
import { Home } from './pages/home'
import { NotFound } from './pages/notFound'
import SearchResult from './pages/searchResult/SearchResult'
import Footer from './sharedComponents/footer/Footer'
import { NavBar } from './sharedComponents/navBar'
//

const Routes = () => {
  return (
    <Router>
      <Suspense fallback={<h1>Loading...</h1>}>
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/article' component={Article} />
          <Route exact path='/bookmark' component={Bookmark} />
          <Route exact path='/search' component={SearchResult} />
          <Route exact path='*' component={NotFound} />
        </Switch>
        <Footer />
      </Suspense>
    </Router>
  )
}

export default Routes
