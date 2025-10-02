import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId='769188610078-09ploddjd8tcke0l0jojkt9hsuruvtn5.apps.googleusercontent.com'>
      
        <App />
     
    </GoogleOAuthProvider>
  </React.StrictMode>,
)





