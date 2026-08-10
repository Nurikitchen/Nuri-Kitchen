import { createRoot } from 'react-dom/client'
import App from './App.jsx'

if (import.meta.env.VITE_GEMINI_API_KEY) {
  window.NURI_GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
  window.VITE_GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
}

createRoot(document.getElementById('root')).render(
  <App />
)
