import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// Import Google Fonts before our app renders
import './fonts.css'
// Import global styles
import './global.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
