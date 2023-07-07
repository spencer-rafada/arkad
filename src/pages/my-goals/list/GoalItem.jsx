import { Button, Card, ListItem, ListItemText, Stack } from '@mui/material'
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import { useState } from 'react'
import useLocalStorage from '../../../hooks/useLocalStorage'

export default function GoalItem({ item, index }) {
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
    <Card key={item._id} sx={{ marginBottom: '0.5rem' }}>
      <ListItem>
        <Stack
          direction='row'
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <ListItemText
            primary={item.goalTitle}
            secondary={item.goalDescription}
          />
          <Button color='success' onClick={handleCheckComplete}>
            {complete ? <CheckCircleOutlineIcon /> : <CircleOutlinedIcon />}
          </Button>
        </Stack>
      </ListItem>
    </Card>
  )
}
