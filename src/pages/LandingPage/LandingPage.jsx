import { Container } from '@mui/material'
import { css } from '@emotion/react'
import { useTheme } from '@mui/material/styles'

export default function LandingPage() {
  const theme = useTheme()

  // Styles
  const containerStyle = css`
    background-color: ${theme.palette.primary.main};
    color: ${theme.palette.primary.primaryBtn};
    width: 100%;
    height: 1080px;
  `
  return (
    <Container maxWidth='xl' sx={containerStyle}>
      X
    </Container>
  )
}
