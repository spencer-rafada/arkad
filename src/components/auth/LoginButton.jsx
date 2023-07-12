import { useAuth0 } from '@auth0/auth0-react'
import { Button } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { css } from '@emotion/react'

export default function LoginButton() {
  const { loginWithRedirect } = useAuth0()
  const theme = useTheme()

  // Style
  const buttonStyle = css`
    background-color: ${theme.palette.primary.primaryBtn};
    color: ${theme.palette.primary.text};
    padding: 0.5rem 1rem;
    &:hover {
      background-color: ${theme.palette.primary.accent};
      color: ${theme.palette.primary.secondaryBtn};
    }
  `

  return (
    <Button
      data-testid='login-button'
      sx={buttonStyle}
      onClick={() =>
        loginWithRedirect({ appState: { targetUrl: window.location.pathname } })
      }
    >
      Log In
    </Button>
  )
}
