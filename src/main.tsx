import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import {App} from './App.tsx'
import '@npm-questionpro/wick-ui-icon/dist/wu-icon.css'
import '@npm-questionpro/wick-ui-lib/dist/style.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
