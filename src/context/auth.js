import React, { createContext, useEffect, useState } from "react"
import firebase from "gatsby-plugin-firebase"
require('firebase/auth')
export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState()

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => setUser(user))
  }, [])

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
