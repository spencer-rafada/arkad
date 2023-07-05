import { Container } from '@mui/material'
import { css } from '@emotion/react'
import { useTheme } from '@mui/material/styles'
import GoalsDialogPicker from './dialogs/GoalsDialogPicker'
import { GoalsCheckoutProvider } from '../../providers/GoalsCheckoutProvider'

export default function MyGoals() {
  const theme = useTheme()

  // Styles
  const containerStyle = css`
    background-color: ${theme.palette.primary.main};
    color: ${theme.palette.primary.primaryBtn};
    width: 100%;
    height: 1080px;
  `

  return (
    <GoalsCheckoutProvider>
      <Container maxWidth='xl' sx={containerStyle}>
        <GoalsDialogPicker />
      </Container>
    </GoalsCheckoutProvider>
    // Put a conditional for goal list here
  )
}
