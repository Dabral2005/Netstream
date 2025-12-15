import React, { useState } from 'react'
import './login.css'
import logo from '../../assets/logo.png'
import netflix_spinner from '../../assets/netflix_spinner.gif'
import { useGoogleLogin } from '@react-oauth/google'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = ({ setProfile }) => {
  const [signState, setSignState] = useState("Sign In")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  // Google Login
  const loginWithGoogle = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const res = await axios.get(
          'https://www.googleapis.com/oauth2/v1/userinfo?alt=json',
          { headers: { Authorization: `Bearer ${tokenResponse.access_token}` } }
        )
        const googleProfile = {
          name: res.data.name,
          email: res.data.email,
          picture: res.data.picture
        }
        localStorage.setItem("netflix_user", JSON.stringify(googleProfile))
        setProfile(googleProfile) 
        navigate("/home")   //  redirect to home
      } catch (err) {
        console.error("Google Login Error:", err)
      }
    },
    onError: (err) => console.error("Google OAuth Failed:", err),
  })

  // Manual Sign Up / Sign In
  const user_auth = async (event) => {
    event.preventDefault()
    setLoading(true)

    setTimeout(() => {
      const profile = {
        name: name || "Netflix User",
        email,
        picture: "https://cdn-icons-png.flaticon.com/512/847/847969.png"
      }

      localStorage.setItem("netflix_user", JSON.stringify(profile))
      setProfile(profile) 
      setLoading(false)
      navigate("/home")   //  redirect to home
    }, 1000)
  }

  return (
    loading ? (
      <div className="login-spinner">
        <img src={netflix_spinner} alt="Loading..." />
      </div>
    ) : (
      <div className='login'>
        <img src={logo} className='login-logo' alt="Netflix Logo" />

        <div className="login-form">
          <h1>{signState}</h1>
          <form onSubmit={user_auth}>
            {signState === "Sign Up" && (
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder='Your name'
                required
              />
            )}
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder='Email'
              required
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder='Password'
              required
            />
            <button type='submit'>{signState}</button>
          </form>
          <p style={{ textAlign: "center" }}>or</p>

          <button
            type="button"
            onClick={loginWithGoogle}
            className="google-login-btn"
          >
            <img
              src="https://developers.google.com/identity/images/g-logo.png"
              alt="Google logo"
              style={{ width: '18px', marginRight: "8px" }}
            />
            Login with Google
          </button>

          <div className="form-switch">
            {signState === "Sign In" ? (
              <p>New to Netflix? <span onClick={() => setSignState("Sign Up")}>Sign Up Now</span></p>
            ) : (
              <p>Already have account? <span onClick={() => setSignState("Sign In")}>Sign In Now</span></p>
            )}
          </div>
        </div>
      </div>
    )
  )
}

export default Login












