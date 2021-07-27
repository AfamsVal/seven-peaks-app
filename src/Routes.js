import React, { Suspense, useState, createContext } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Article } from './pages/article'
import { Bookmark } from './pages/bookmark'
import { Home } from './pages/home'
import { NotFound } from './pages/notFound'
import SearchResult from './pages/searchResult/SearchResult'
import Footer from './sharedComponents/footer/Footer'
import { NavBar } from './sharedComponents/navBar'

export const SearchContext = createContext()
//

const Routes = () => {
  const [search, setSearch] = useState('')
  return (
    <SearchContext.Provider value={search}>
      <Router>
        <Suspense fallback={<h1>Loading...</h1>}>
          <NavBar searchResult={result => setSearch(result)} />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/article/:a/:b/:c/:d/:e/:slug' component={Article} />
            <Route exact path='/article/:a/:b/:c/:d/:slug' component={Article} />
            <Route exact path='/bookmark' component={Bookmark} />
            <Route exact path='/search' component={SearchResult} />
            <Route exact path='*' component={NotFound} />
          </Switch>
          <Footer />
        </Suspense>
      </Router>
    </SearchContext.Provider>
  )
}

export default Routes
