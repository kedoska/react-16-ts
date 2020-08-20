import React, { useContext } from 'react'
import { Link } from '@reach/router'
import { AuthContext } from '../../contexts/auth'

const Header: React.FC<{}> = () => {
  const { setAuth } = useContext(AuthContext)

  return (
    <div className="header">
      <div className="left">
        <ul>
          <li>
            <Link to="setting">Settings</Link>
          </li>
          <li>
            <Link to="secrets">Secrets</Link>
          </li>
        </ul>
      </div>
      <div className="right">
        <ul>
          <li>
            <button onClick={() => setAuth(false)}>Log out</button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
