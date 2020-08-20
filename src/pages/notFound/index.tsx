import React, { FunctionComponent } from 'react'
import { RouteComponentProps } from '@reach/router'

const NotFound: FunctionComponent<RouteComponentProps> = (props) => {
  const { location } = props
  return (
    <>
      <h1>Page Not Found</h1>
      <label>{location?.pathname}</label>
    </>
  )
}

export default NotFound
