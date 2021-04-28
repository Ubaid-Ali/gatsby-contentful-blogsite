import React, { useContext } from "react"
import { Link, navigate } from "gatsby"
import { AuthContext } from "../context/auth"
import firebase from 'gatsby-plugin-firebase'
import "./header.css"

interface headerProps {
  siteTitle: string
}

const Header: React.FC<headerProps> = () => {

  const { user } = useContext(AuthContext)

  const handleLogout  = async () => {
    await firebase.auth().signOut()
    navigate("/login")
  }

  return (

    <header className="header">
      <div
        className="header-container">
        <ul className="header-ul" >

          <div className="ul-child">
            <li className="header-li">
              <Link
                to="/"
                style={{
                  color: `white`,
                  textDecoration: `none`,
                }}
              >Home
          </Link>
            </li>
            <li className="header-li" >
              <Link
                to="/blog/"
                style={{
                  color: `white`,
                  textDecoration: `none`,
                }}
              >Blogs
          </Link>
            </li>
          </div>

          <div className="ul-child">
            {!user ?
              <>

                <li className="header-li" >
                  <Link
                    to="/signup/"
                    style={{
                      color: `white`,
                      textDecoration: `none`,
                    }}
                  >Signup
          </Link>
                </li>
                <li className="header-li">
                  <Link
                    to="/login/"
                    style={{
                      color: `white`,
                      textDecoration: `none`,
                    }}
                  >Login
          </Link>
                </li>
              </>
              :
              <li
                onClick={handleLogout}
                className="header-li">
                <span
                  // to="/login"
                  style={{
                    color: `white`,
                    textDecoration: `none`,
                    cursor: "pointer"
                  }}
                >Logout
                </span>
              </li>
            }
          </div>

        </ul>
      </div>
    </header>
  )
}

export default Header
