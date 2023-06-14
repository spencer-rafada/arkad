import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'normalize.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { ErrorPage } from './pages/index.jsx'
import Auth0ProviderWithHistory from './providers/Auth0ProviderWithHistory.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Auth0ProviderWithHistory>
        <App />
      </Auth0ProviderWithHistory>
    ),
    errorElement: <ErrorPage />,
  },
])

const appTheme = createTheme({
  palette: {
    primary: {
      main: '#ff00ff',
    },
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={appTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
)
