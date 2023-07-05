import { GoalsCheckoutContext } from '../../../providers/GoalsCheckoutProvider'
import GoalsDialog from './GoalsDialog'
import { useContext, useEffect } from 'react'
import { Stack, Button } from '@mui/material'
import { css } from '@emotion/react'
import { useTheme } from '@mui/material/styles'
import { questions } from './questions'
import { usePostData } from '../../../hooks/usePostData'

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
    // TODO: add backend url for this
    postData('url', payload)
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
          disabled={progress === 0}
          onClick={() => {
            setProgress(progress !== 0 ? progress - 1 : 0)
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
          <Button sx={primaryButtonStyle} onClick={handleSubmit}>
            Submit
          </Button>
        )}
      </Stack>
    </div>
  )
}
