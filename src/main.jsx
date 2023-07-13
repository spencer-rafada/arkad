import React from 'react'
import ReactDOM from 'react-dom/client'
import 'normalize.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { ErrorPage, Home, LandingPage, MyGoals } from './pages/index'
import GoalCreate from './pages/my-goals/dialogs/GoalCreate'
import GoalList from './pages/my-goals/list/GoalList'
import Auth0ProviderWithHistory from './providers/Auth0ProviderWithHistory'
import AuthenticatedGuard from './components/auth/AuthenticatedGuard'
import Navbar from './components/Navbar'
import GoalDetail from './pages/my-goals/list/GoalDetail'
import Profile from './pages/profile/Profile'
import Resources from './pages/Resources/Resources'

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
    path: '/profile',
    element: (
      <>
        <Navbar />
        <Profile />
      </>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: '/resources',
    element: (
      <>
        <Navbar />
        <Resources />
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
    children: [
      {
        index: true,
        element: <GoalList />,
      },
      {
        path: 'create',
        element: <GoalCreate />,
      },
      {
        path: ':goalId',
        element: <AuthenticatedGuard component={GoalDetail} />,
      },
    ],
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
