/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// You can delete this file if you're not using it

import firebase from 'firebase'
require('firebase/auth')
import React from "react"
import AuthProvider from "./src/context/auth" 

export const wrapRootElement = ({ element }) => (
  <AuthProvider>{element}</AuthProvider>
)
