import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Sidebar from './assets/components/sidebar/sidebar'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Sidebar/>
  </StrictMode>,
)
