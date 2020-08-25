import React, { useReducer } from 'react'

export type Auth = {
  token: string
  authorized: boolean
  userId: string
  username: string
  isAdmin: boolean
}

export const getDefaultState = (): Auth => ({
  token: '',
  authorized: false,
  userId: '',
  username: '',
  isAdmin: false,
})

export interface AuthContextInterface {
  auth: Auth
  dispatch: React.Dispatch<ActionType>
  setSuccessful: (payload: Auth) => void
  reset: () => void
}

const nyi = () => {
  throw new Error('Not Yet Implemented')
}

export const AuthContext = React.createContext<AuthContextInterface>({
  auth: getDefaultState(),
  dispatch: () => nyi(),
  setSuccessful: (payload: Auth) => nyi(),
  reset: () => nyi(),
})

export type ActionType = {
  type: 'RESET' | 'AUTH_OK'
  payload: Auth
}

export const reducer = (state: Auth, action: ActionType): Auth => {
  switch (action.type) {
    case 'RESET': // 🔴
      return action.payload
    case 'AUTH_OK': // 🟢
      return action.payload
    default:
      return state
  }
}

const AuthProvider: React.FC = (props) => {
  const [auth, dispatch] = useReducer(reducer, getDefaultState())

  const setSuccessful = (payload: Auth) =>
    dispatch({ type: 'AUTH_OK', payload })
  const reset = () => dispatch({ type: 'RESET', payload: getDefaultState() })

  return (
    <AuthContext.Provider
      value={{
        auth,
        dispatch,
        setSuccessful,
        reset,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
