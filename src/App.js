import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import * as ROUTES from './constants/Routes';
import { Home, Browse, SignIn, SignUp } from './pages';
import useAuthListener from './hooks/useAuthListener';
import { IsUserRedirect, ProtectedRoute } from './helpers/Routes';

const App = () => {
  const { user } = useAuthListener();
  
  return (
    <Router>
        <Switch>
            <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_IN}>
                <SignIn />
            </IsUserRedirect>
            <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_UP}>
                <SignUp />
            </IsUserRedirect>
            <ProtectedRoute user={user} path={ROUTES.BROWSE}>
                <Browse />
            </ProtectedRoute>
            <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.HOMEPAGE}>
                <Home />
            </IsUserRedirect>
        </Switch>
    </Router>
  )
}

export default App