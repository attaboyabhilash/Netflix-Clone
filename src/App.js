import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import * as ROUTES from './constants/Routes'
import { Home, SignIn, SignUp, Browse } from './pages'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={ROUTES.HOMEPAGE}>
          <Home />
        </Route>
        <Route path={ROUTES.SIGN_IN}>
          <SignIn />
        </Route>
        <Route path={ROUTES.SIGN_UP}>
          <SignUp />
        </Route>
        <Route path={ROUTES.BROWSE}>
          <Browse />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
