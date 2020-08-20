import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from '@reach/router'
import AuthProvider from './contexts/auth'
import * as serviceWorker from './serviceWorker'

/* PAGES */
const Landing = React.lazy(() => import('./pages/landing'))
const SignUp = React.lazy(() => import('./pages/signUp'))
const SignIn = React.lazy(() => import('./pages/signIn'))

const Account = React.lazy(() => import('./pages/account'))
const Settings = React.lazy(() => import('./pages/settings'))
const Secrets = React.lazy(() => import('./pages/secrets'))

const Terms = React.lazy(() => import('./pages/terms'))
const NotFound = React.lazy(() => import('./pages/notFound'))

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Router>
          <Landing path="/" />

          <SignUp path="/sign-up" />
          <SignIn path="/sign-in" />

          <Account path="/me">
            <Settings path="settings" />
            <Secrets path="secrets" />
          </Account>

          <Terms path="/terms" />
          <NotFound default />
        </Router>
      </React.Suspense>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

serviceWorker.unregister()
