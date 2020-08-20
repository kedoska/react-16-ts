import React from 'react'

export interface UserContext {
  authenticated: boolean
  setAuth(authenticated: boolean): void
}

export const AuthContext = React.createContext<UserContext>({
  authenticated: false,
  setAuth: () => {
    throw new Error('Not Yet Implemented')
  },
})

const AuthProvider: React.FC = (props) => {
  const [authenticated, setAuth] = React.useState(false)
  return (
    <AuthContext.Provider
      value={{
        authenticated,
        setAuth,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
