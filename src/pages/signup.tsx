import React, { useState, useContext } from "react"
import firebase from "gatsby-plugin-firebase"
import { navigate, Link } from "gatsby"
import Layout from "../components/layout"
import { AuthContext } from "../context/auth"

interface dataTypes {
  email: string,
  password: string,
  error: null | any,
}

const Register = () => {
  const [data, setData] = useState<dataTypes>({
    email: "",
    password: "",
    error: null,
  })

  const { setUser } = useContext(AuthContext)

  const onChangeHandler = (e: { target: { name: string; value: string } }) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: { preventDefault: () => void }) => {
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
      // console.log(`err`, err)
      setData({ ...data, error: err.message })
    }
  }

  return (
    <Layout>
      <div className="signup-container">
        <form onSubmit={handleSubmit} className="form">
          <div>
            <label htmlFor="email">Email</label>
            <br/>
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
            <br/>
            <input
              type="password"
              name="password"
              value={data?.password}
              onChange={onChangeHandler}
              required
            />
          </div>
          <p style={{ color: "red" }}>{data.error ? data.error : null}</p>
          <input type="submit" value="SignUp" />
          <br/>
          <p>
            <Link to="/login/">already have account?</Link>
          </p>
        </form>
      </div>
    </Layout>
  )
}

export default Register
