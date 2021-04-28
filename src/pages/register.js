import React, { useState, useContext } from "react"
import firebase from "gatsby-plugin-firebase"
import { navigate, Link } from "gatsby"
import Layout from "../components/layout"
import { AuthContext } from "../context/auth"

const Register = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
    error: null,
  })

  const { setUser } = useContext(AuthContext)

  const onChangeHandler = e => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleSubmit = async e => {
    e.preventDefault()

    try {
      setData({ ...data, error: null })
      const result = await firebase
        .auth()
        .createUserWithEmailAndPassword(data.email, data.password)
      setUser(result)
      console.log(`user created`, result)
      navigate("/blog")
    } catch (err) {
      console.log(`err`, err)
      setData({ ...data, error: err.message })
    }
  }

  return (
    <Layout>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={data?.email}
              onChange={onChangeHandler}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={data?.password}
              onChange={onChangeHandler}
              required
            />
          </div>
          <p style={{ color: "red" }}>{data.error ? data.error : null}</p>
          <input type="submit" value="Register" />
          <p>
            <Link to="/login/">already have account?</Link>
          </p>
        </form>
      </div>
    </Layout>
  )
}

export default Register
