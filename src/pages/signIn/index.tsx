import React, { FunctionComponent, useContext, useState } from 'react'
import { RouteComponentProps, Redirect } from '@reach/router'
import { AuthContext } from '../../contexts/auth'

const SignIn: FunctionComponent<RouteComponentProps> = () => {
  const { authenticated, setAuth } = useContext(AuthContext)

  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  if (authenticated) {
    return <Redirect to="/me" noThrow />
  }

  const disabled = username.length === 0 || password.length === 0

  return (
    <>
      <h1>SignIn</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button disabled={disabled} onClick={() => setAuth(true)}>Go!</button>
    </>
  )
}

export default SignIn
