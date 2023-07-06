import { GoalsCheckoutContext } from '../../../providers/GoalsCheckoutProvider'
import GoalsDialog from './GoalsDialog'
import { useContext, useEffect } from 'react'
import { Stack, Button } from '@mui/material'
import { css } from '@emotion/react'
import { useTheme } from '@mui/material/styles'
import { questions } from './questions'
import { usePostData } from '../../../hooks/usePostData'
import { useNavigate } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import useLocalStorage from '../../../hooks/useLocalStorage'

export default function GoalsDialogPicker() {
  const {
    setDialog,
    setProgress,
    progress,
    dialog,
    monthlyRevenue,
    isSeparate,
    wantMaterial,
    materialGoal,
    goalTitle,
    goalDescription,
    goalCreateDate,
    goalDueDate,
    hasSavingsAccount,
  } = useContext(GoalsCheckoutContext)
  const theme = useTheme()
  const { postData, isLoading, error } = usePostData()
  const navigate = useNavigate()
  const { isAuthenticated } = useAuth0()
  const [goal, setGoal] = useLocalStorage('goal', '')

  useEffect(() => {
    if (progress === 0) setDialog('monthlyRevenue')
    if (progress === 1) setDialog('separateMoney')
    if (progress === 2) setDialog('hasSavings')
    if (progress === 3) setDialog('wantMaterial')
    if (progress === 4) setDialog('goalDueDate')
    if (progress === 5) setDialog('modifyGoal')
  }, [progress, setDialog])

  // Styles
  const primaryButtonStyle = css`
    background-color: ${theme.palette.primary.primaryBtn};
    color: ${theme.palette.primary.text};
    &:hover {
      background-color: ${theme.palette.primary.primaryBtn};
    }
  `
  const secondaryButtonStyle = css`
    background-color: ${theme.palette.primary.main};
    color: ${theme.palette.primary.text};
    &:hover {
      background-color: ${theme.palette.primary.main};
    }
  `

  const handleSubmit = () => {
    const payload = {
      monthlyRevenue,
      isSeparate,
      wantMaterial,
      materialGoal,
      goalTitle,
      goalDescription,
      goalCreateDate,
      goalDueDate: goalDueDate.$d,
      hasSavingsAccount,
    }
    if (isAuthenticated) {
      postData('http://localhost:3000/goals', payload)
    } else {
      const newGoal = [...goal, payload]
      setGoal(newGoal)
    }
    // navigate('..')
  }

  return (
    <div>
      <GoalsDialog />
      <Stack
        direction='row'
        spacing={2}
        sx={{ display: 'flex', justifyContent: 'center' }}
      >
        <Button
          sx={secondaryButtonStyle}
          onClick={() => {
            progress === 0
              ? navigate('/my-goals')
              : setProgress(progress !== 0 ? progress - 1 : 0)
          }}
        >
          Back
        </Button>
        {dialog !== 'modifyGoal' && (
          <Button
            sx={primaryButtonStyle}
            disabled={progress === 5}
            onClick={() => {
              setProgress(progress !== 5 ? progress + 1 : questions.length - 1)
            }}
          >
            Next
          </Button>
        )}
        {dialog === 'modifyGoal' && (
          <Button
            sx={primaryButtonStyle}
            onClick={handleSubmit}
            disabled={isLoading}
            type='submit'
          >
            Submit
          </Button>
        )}
      </Stack>
    </div>
  )
}
