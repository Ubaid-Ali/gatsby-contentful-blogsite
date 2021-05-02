/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */
// gatsby-browser.js and gatsby-ssr.js

import firebase from 'firebase'
require('firebase/auth')
import React from "react"
import AuthProvider from "./src/context/auth" 

export const wrapRootElement = ({ element }) => (
  <AuthProvider>{element}</AuthProvider>
)
