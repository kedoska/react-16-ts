import React, { FunctionComponent } from 'react'
import { RouteComponentProps, Link } from '@reach/router'

const Landing: FunctionComponent<RouteComponentProps> = () => {
  return (
    <>
      <h1>Landing</h1>
      <ul>
        <li>
          <Link to={'/sign-up'}>Join</Link>
        </li>
        <li>
          <Link to={'/sign-in'}>Access</Link>
        </li>
      </ul>
    </>
  )
}

export default Landing
