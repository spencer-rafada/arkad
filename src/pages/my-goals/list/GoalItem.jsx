import { List, ListItemButton, ListItemText } from '@mui/material'
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import { useState } from 'react'
import useLocalStorage from '../../../hooks/useLocalStorage'

export default function GoalItem({ item, index, isAuthenticated }) {
  const [complete, setComplete] = useState(item.complete)
  const [goals, setGoals] = useLocalStorage('goal')

  const handleCheckComplete = () => {
    const updatedComplete = !complete
    setComplete(updatedComplete)

    const updatedGoals = [...goals]
    updatedGoals[index].complete = updatedComplete
    setGoals(updatedGoals)
  }

  return (
    <List sx={{ marginBottom: '0.5rem' }}>
      <ListItemButton onClick={handleCheckComplete}>
        <ListItemText
          primary={item.goalTitle}
          secondary={`${item.goalDescription} ${
            item.goalDueDate ? `- ${item.goalDueDate}` : ``
          }`}
          sx={{ width: '100%' }}
        />
        {!isAuthenticated && (
          <ListItemText color='success'>
            {complete ? <CheckCircleOutlineIcon /> : <CircleOutlinedIcon />}
          </ListItemText>
        )}
      </ListItemButton>
    </List>
  )
}
