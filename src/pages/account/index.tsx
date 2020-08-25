import React, { useContext } from 'react'
import { AuthContext } from '../../contexts/auth'
import { RouteComponentProps, Redirect } from '@reach/router'

import Header from '../../components/hadear'

const Account: React.FC<RouteComponentProps> = ({ children }) => {
  const { auth } = useContext(AuthContext)

  if (!auth.authorized) {
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
