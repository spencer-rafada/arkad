import { useAuth0 } from '@auth0/auth0-react'
import { Typography } from '@mui/material'

export default function LogoutButton() {
  const { logout } = useAuth0()
  return (
    <Typography onClick={() => logout({ returnTo: window.location.origin })}>
      Logout
    </Typography>
  )
}
