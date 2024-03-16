import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ToastProvider } from './toast/ToastProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ToastProvider placement='top-start'>
      <App />
    </ToastProvider>
  </React.StrictMode>,
)
