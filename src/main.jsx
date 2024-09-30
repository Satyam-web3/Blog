import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BlogProvider } from './components/BlogContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BlogProvider>
    <App />
    </BlogProvider>
  </StrictMode>,
)
