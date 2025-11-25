import '@fontsource/ubuntu/700.css'
import '@fontsource/poppins/400.css'
import '@fontsource/poppins/700.css'; // Bold
import '@fontsource/poppins/800.css'; // ExtraBold

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
