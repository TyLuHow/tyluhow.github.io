import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { initAnalytics } from './analytics'

// ensure dark mode is active by default
if (typeof document !== 'undefined') {
  document.documentElement.classList.add('dark')
}

initAnalytics()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
) 