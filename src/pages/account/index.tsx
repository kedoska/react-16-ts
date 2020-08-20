import React, { useContext } from 'react'
import { AuthContext } from '../../contexts/auth'
import { RouteComponentProps, Redirect } from '@reach/router'

import Header from '../../components/hadear'

const Account: React.FC<RouteComponentProps> = ({ children }) => {
  const { authenticated = false } = useContext(AuthContext)

  if (!authenticated) {
    return <Redirect to="/sign-in" noThrow />
  }

  return (
    <>
      <Header />
      <React.Fragment>{children}</React.Fragment>
    </>
  )
}

export default Account
