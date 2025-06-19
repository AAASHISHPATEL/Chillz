import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { FlavourProvider } from './Context/Flavour.jsx'
import IceCreamLanding from './pages/IceCreamLanding.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <FlavourProvider>
    <IceCreamLanding/>
   </FlavourProvider>
  </StrictMode>,
)
