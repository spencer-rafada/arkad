import React from 'react'
import ReactDOM from 'react-dom/client'
import 'normalize.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { ErrorPage, Home, LandingPage, MyGoals } from './pages/index'
import Auth0ProviderWithHistory from './providers/Auth0ProviderWithHistory'
import AuthenticatedGuard from './components/auth/AuthenticatedGuard'
import Navbar from './components/Navbar'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Navbar />
        <LandingPage />
      </>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: '/home',
    element: (
      <>
        <Navbar />
        <Home />
      </>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: '/my-goals',
    element: (
      <>
        <Navbar />
        <MyGoals />
      </>
    ),
    errorElement: <ErrorPage />,
  },
  // This is how to protect guards
  // {
  //   path: '/profiles',
  //   element: <AuthenticatedGuard component={} />,
  //   errorElement: <ErrorPage />,
  // },
])

const appTheme = createTheme({
  palette: {
    primary: {
      text: '#0c2d06',
      main: '#ecfce8',
      primaryBtn: '#45e87b',
      secondaryBtn: '#fff',
      accent: '#16b197',
    },
  },
  typography: {
    fontFamily: 'Zen Maru Gothic, sans-serif',
  },
  overrides: {
    '@global': {
      '@import':
        "url('https://fonts.googleapis.com/css2?family=Zen+Maru+Gothic:wght@300;400;500;700;900&display=swap')",
    },
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={appTheme}>
      <Auth0ProviderWithHistory>
        <RouterProvider router={router} />
      </Auth0ProviderWithHistory>
    </ThemeProvider>
  </React.StrictMode>
)
