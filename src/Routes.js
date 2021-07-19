import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home } from './pages/home'
import { NotFound } from './pages/notFound'
import { NavBar } from './sharedComponents/navBar'
///
//
//
///
// remember to add helet seo tool
//
//
//
///
//
//

function Routes () {
  return (
    <Router>
      <Suspense fallback={<h1>Loading...</h1>}>
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='*' component={NotFound} />
        </Switch>
      </Suspense>
    </Router>
  )
}

export default Routes
