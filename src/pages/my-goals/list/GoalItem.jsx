import {
  List,
  ListItemButton,
  ListItemText,
  Paper,
  Stack,
  Typography,
  useTheme,
} from '@mui/material'
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import { useState } from 'react'
import useLocalStorage from '../../../hooks/useLocalStorage'
import { useNavigate } from 'react-router-dom'
import { formatDate } from '../../../utils/index'

export default function GoalItem({ item, index, isAuthenticated }) {
  console.log(item)
  const [complete, setComplete] = useState(item.complete)
  const [goals, setGoals] = useLocalStorage('goal')
  const navigate = useNavigate()

  const handleCheckComplete = () => {
    const updatedComplete = !complete
    setComplete(updatedComplete)

    const updatedGoals = [...goals]
    updatedGoals[index].complete = updatedComplete
    setGoals(updatedGoals)
  }

  const navigateTo = (id) => {
    navigate(id)
  }
  const theme = useTheme()

  return (
    <Paper
      elevation={2}
      sx={{ marginBottom: '0.4rem' }}
      data-testid='goal-item'
    >
      <ListItemButton
        data-testid='update-goal-button'
        onClick={() =>
          isAuthenticated ? navigateTo(item._id) : handleCheckComplete
        }
      >
        <Stack
          direction={'row'}
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            alignItems: 'center',
          }}
        >
          <ListItemText
            primary={item.goalTitle}
            secondary={`${item.goalDescription} ${
              item.goalDueDate
                ? `- Due Date: ${formatDate(item.goalDueDate)}`
                : ``
            }`}
            sx={{ width: '100%' }}
          />
          {isAuthenticated && (
            <Typography
              sx={{
                color: `${theme.palette.primary.primaryBtn}`,
                letterSpacing: '0.15rem',
              }}
            >
              ${item.savings}/${item.cost}
            </Typography>
          )}
        </Stack>
        {!isAuthenticated && (
          <ListItemText color='success'>
            {complete ? <CheckCircleOutlineIcon /> : <CircleOutlinedIcon />}
          </ListItemText>
        )}
      </ListItemButton>
    </Paper>
  )
}
