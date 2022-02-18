import React, { lazy } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

const Layout = lazy(() => import('./containers/Layout'))

function App() {

  return (
  <>
  <Router>
    <Switch>
{/*       <Route path="/login" component={Login} />
      <Route path="/create-account" component={CreateAccount} />
      <Route path="/forgot-password" component={ForgotPassword} /> */}

      <Route path="/app" component={Layout} />

      <Redirect exact from="/" to="/app" />
    </Switch>
  </Router>

  </>
  )
  
}

export default App