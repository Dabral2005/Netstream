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
  const [remember, setRemember] = useState(false)
  const [error, setError] = useState("")
  const navigate = useNavigate()

  // Google Login
  const loginWithGoogle = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        setLoading(true)
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
        navigate("/home")
      } catch (err) {
        console.error("Google Login Error:", err)
        setError("Google login failed. Please try again.")
        setLoading(false)
      }
    },
    onError: (err) => {
      console.error("Google OAuth Failed:", err)
      setError("Google authentication failed.")
    },
  })

  // Manual Sign Up / Sign In
  const user_auth = async (event) => {
    event.preventDefault()
    setError("")
    setLoading(true)

    try {
      const endpoint = signState === "Sign Up" ? "/api/auth/signup" : "/api/auth/login"
      const payload = signState === "Sign Up"
        ? { username: name, email, password }
        : { email, password }

      const res = await axios.post(`http://localhost:5000${endpoint}`, payload)

      const profile = {
        name: name || res.data?.user?.username || "Netstream User",
        email,
        picture: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
      }

      localStorage.setItem("netflix_user", JSON.stringify(profile))
      setProfile(profile)
      setLoading(false)
      navigate("/home")
    } catch (err) {
      setLoading(false)
      const msg = err.response?.data?.message || "Something went wrong. Please try again."
      setError(msg)
    }
  }

  if (loading) {
    return (
      <div className="login-spinner">
        <img src={netflix_spinner} alt="Loading..." />
      </div>
    )
  }

  return (
    <div className='login'>
      <div className="login-header">
        <img src={logo} className='login-logo' alt="Netstream Logo" />
      </div>

      <div className="login-body">
        <div className="login-form">
          <h1>{signState}</h1>

          {error && <div className="login-error">{error}</div>}

          <form onSubmit={user_auth}>
            {signState === "Sign Up" && (
              <div className="input-group">
                <input
                  id="name-input"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder=" "
                  required
                  autoComplete="name"
                />
                <label htmlFor="name-input">Name</label>
              </div>
            )}

            <div className="input-group">
              <input
                id="email-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder=" "
                required
                autoComplete="email"
              />
              <label htmlFor="email-input">Email or phone number</label>
            </div>

            <div className="input-group">
              <input
                id="password-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder=" "
                required
                autoComplete={signState === "Sign Up" ? "new-password" : "current-password"}
              />
              <label htmlFor="password-input">Password</label>
            </div>

            <button type='submit' className="submit-btn">{signState}</button>
          </form>

          <div className="login-divider">OR</div>

          <button
            type="button"
            onClick={loginWithGoogle}
            className="google-login-btn"
          >
            <img
              src="https://developers.google.com/identity/images/g-logo.png"
              alt="Google logo"
            />
            Sign in with Google
          </button>

          <div className="form-help">
            <label className="remember">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
              />
              Remember me
            </label>
            <button type="button" className="need-help">Need help?</button>
          </div>

          <div className="form-switch">
            {signState === "Sign In" ? (
              <p>New to Netstream? <span onClick={() => { setSignState("Sign Up"); setError(""); }}>Sign Up Now</span></p>
            ) : (
              <p>Already have an account? <span onClick={() => { setSignState("Sign In"); setError(""); }}>Sign In Now</span></p>
            )}
          </div>

          <p className="recaptcha-text">
            This page is protected by Google reCAPTCHA to ensure you're not a bot.{' '}
            <a href="#learn-more">Learn more.</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
