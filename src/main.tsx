import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import { ProfileProvider } from './context/ProfileContext.tsx'
import { CounterProvider } from './context/CounterContext.tsx'
import ErrorBoundary from './components/ErrorBoundary.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <ProfileProvider>
          <CounterProvider>
            <App />
          </CounterProvider>
        </ProfileProvider>
      </BrowserRouter>
    </ErrorBoundary>
  </StrictMode>,
)
