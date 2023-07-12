import { useContext } from 'react'
import { GoalsCheckoutContext } from '../../../providers/GoalsCheckoutProvider'
import {
  Typography,
  Box,
  Divider,
  Stack,
  LinearProgress,
  linearProgressClasses,
  TextField,
} from '@mui/material'
import { useTheme } from '@emotion/react'
import { questions } from './questions'
import MonthlyRevenue from './MonthlyRevenue'
import Separated from './Separated'
import GoalDueDatePicker from './GoalDueDatePicker'

export default function GoalsDialog() {
  const theme = useTheme()
  const {
    progress,
    dialog,
    setMaterialGoal,
    setGoalTitle,
    setGoalDescription,
  } = useContext(GoalsCheckoutContext)

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'left',
          flexDirection: 'column',
        }}
      >
        <Box
          sx={{ marginTop: { xs: '0', sm: '2rem' }, marginBottom: '0.5rem' }}
        >
          <Stack direction='row'>
            <Typography
              variant='p'
              sx={{
                // fontWeight: 'bold',
                textTransform: 'uppercase',
                color: `${theme.palette.primary.text}`,
                letterSpacing: '0.2rem',
              }}
            >
              Goals
            </Typography>
            <Divider
              orientation='vertical'
              sx={{
                bgcolor: `${theme.palette.primary.text}`,
                height: '1rem',
                mx: 1,
              }}
            />
            <Typography
              variant='p'
              sx={{
                // fontWeight: 'bold',
                textTransform: 'uppercase',
                color: `${theme.palette.primary.text}`,
                letterSpacing: '0.2rem',
              }}
            >
              {progress !== 6 ? progress + 1 : 6} of {questions.length}
            </Typography>
          </Stack>
        </Box>
        <Box sx={{ width: { xs: '30%', sm: '20%' } }}>
          <LinearProgress
            variant='determinate'
            value={(100 / questions.length) * (progress + 1)}
            sx={{
              borderRadius: 5,
              [`&.${linearProgressClasses.colorPrimary}`]: {
                backgroundColor: `${theme.palette.primary.main}`,
              },
              [`& .${linearProgressClasses.bar}`]: {
                borderRadius: 5,
                backgroundColor: `${theme.palette.primary.primaryBtn}`,
              },
            }}
          />
        </Box>
      </Box>
      {/* Section for questions */}
      <Box
        sx={{
          marginTop: '1rem',
          marginBottom: '1rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography
          variant='h2'
          sx={{
            fontSize: '2rem',
            fontWeight: '500',
            color: `${theme.palette.primary.text}`,
          }}
        >
          {progress !== 7
            ? questions[progress].question
            : 'Successfully added goal! 🎉'}
        </Typography>
        <Box
          sx={{
            margin: '1rem',
            width: '80%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {dialog === 'monthlyRevenue' && <MonthlyRevenue />}
          {dialog === 'separateMoney' && <Separated />}
          {dialog === 'hasSavings' && <Separated />}
          {dialog === 'wantMaterial' && (
            <TextField
              sx={{ backgroundColor: 'white', width: '60%' }}
              onChange={(e) => setMaterialGoal(e.target.value)}
            />
          )}
          {dialog === 'goalDueDate' && <GoalDueDatePicker />}
          {dialog === 'modifyGoal' && (
            <Stack direction='column' spacing={2} sx={{ width: '60%' }}>
              <TextField
                label='Goal Name'
                sx={{ backgroundColor: 'white' }}
                onChange={(e) => setGoalTitle(e.target.value)}
                required
              />
              <TextField
                label='Goal Description'
                sx={{ backgroundColor: 'white' }}
                onChange={(e) => setGoalDescription(e.target.value)}
                required
                multiline
                rows={4}
              />
            </Stack>
          )}
        </Box>
      </Box>
    </>
  )
}
