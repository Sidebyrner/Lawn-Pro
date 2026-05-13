import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import LawnPro from '../../lawn-pro-calendar.jsx'

createRoot(document.getElementById('app')).render(
  <StrictMode>
    <LawnPro />
  </StrictMode>
)
