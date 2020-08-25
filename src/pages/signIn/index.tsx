import React, {
  FunctionComponent,
  useContext,
  useState,
} from 'react'
import { RouteComponentProps, Redirect } from '@reach/router'
import { AuthContext, Auth } from '../../contexts/auth'

const SignIn: FunctionComponent<RouteComponentProps> = () => {
  const { auth, setSuccessful } = useContext(AuthContext)

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const externalLogin = async () => {
    setSuccessful({
      token: '123',
      authorized: true,
      userId: '123',
      username: 'test-user',
      isAdmin: false,
    })
  }

  if (auth.authorized) {
    return <Redirect to="/me" noThrow />
  }

  return (
    <>
      <h1>SignIn</h1>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={()=> externalLogin()}>Click to login</button>
    </>
  )
}

export default SignIn
