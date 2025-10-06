import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { StytchB2BProvider } from '@stytch/react/b2b'
import { StytchB2BUIClient } from '@stytch/vanilla-js/b2b'
import './index.css'
import App from './App.jsx'

// optional object for configuring SDK cookie behavior, currently showing defaults
const stytchOptions = {
  cookieOptions: {
    opaqueTokenCookieName: "stytch_session",
    jwtCookieName: "stytch_session_jwt",
    path: "",
    availableToSubdomains: false,
    domain: ""
  }
}

// Check if Stytch token is properly configured
const stytchToken = import.meta.env.VITE_STYTCH_PUBLIC_TOKEN;
console.log('🔍 Environment check:', {
  token: stytchToken,
  env: import.meta.env,
  mode: import.meta.env.MODE
});

if (!stytchToken || stytchToken.includes('REPLACE_WITH_YOUR_ACTUAL_TOKEN')) {
  console.error('❌ Stytch public token not configured! Please update your .env file with a valid token from https://stytch.com/dashboard');
}

const stytch = new StytchB2BUIClient(
  stytchToken, // or process.env.STYTCH_PUBLIC_TOKEN for non-Vite based projects
  stytchOptions
)

const root = createRoot(document.getElementById('root'))

root.render(
  <StrictMode>
    <StytchB2BProvider stytch={stytch}>
      <App />
    </StytchB2BProvider>
  </StrictMode>
)
