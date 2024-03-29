import { useAuth0 } from '@auth0/auth0-react'
import { Typography } from '@mui/material'

export default function LogoutButton() {
  const { logout } = useAuth0()
  const handleLogout = () => {
    localStorage.removeItem('userId')
    logout({ returnTo: window.location.origin })
  }
  return (
    <Typography data-testid='logout-button' onClick={handleLogout}>
      Logout
    </Typography>
  )
}
