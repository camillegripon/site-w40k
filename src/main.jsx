import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style/App.css'
import Body from './Body.jsx'
import Header from './component/Header.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Body />
  </StrictMode>,
)
