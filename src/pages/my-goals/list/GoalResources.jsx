import { useTheme } from '@emotion/react'
import {
  List,
  ListItem,
  ListItemButton,
  Stack,
  Typography,
} from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function GoalResources({ data }) {
  const theme = useTheme()
  const navigate = useNavigate()

  return (
    <Stack direction='column' spacing={2} data-testid='goal-resources'>
      <Stack
        direction='column'
        spacing={1}
        color={`${theme.palette.primary.text}`}
      >
        <Typography variant='h3' sx={{ fontSize: '1.5rem' }}>
          Resources
        </Typography>
        <Typography varian='p'>
          Some useful resources according to your goal.
        </Typography>
      </Stack>
      <List sx={{ backgroundColor: 'background.paper' }}>
        {data.hasSavingsAccount && (
          <ListItemButton onClick={() => navigate('/resources/savings')}>
            <ListItem>Savings</ListItem>
          </ListItemButton>
        )}
        {data.isSeparate && (
          <ListItemButton onClick={() => navigate('/resources/separate')}>
            <ListItem>Rule of 10%</ListItem>
          </ListItemButton>
        )}
      </List>
    </Stack>
  )
}
