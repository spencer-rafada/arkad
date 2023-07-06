import { useFetchData } from '../../../hooks/useFetchData'
import {
  Box,
  Button,
  Card,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material'
import GoalItemSkeleton from './GoalItemSkeleton'
import { useTheme } from '@emotion/react'
import AddIcon from '@mui/icons-material/Add'
import { useNavigate } from 'react-router-dom'
import useLocalStorage from '../../../hooks/useLocalStorage'
import { useAuth0 } from '@auth0/auth0-react'
import { useEffect, useState } from 'react'

export default function GoalList() {
  const theme = useTheme()
  const { data, isLoading, error } = useFetchData('http://localhost:3000/goals')
  const navigate = useNavigate()
  const [goal, setGoal] = useLocalStorage('goal')
  const { isAuthenticated } = useAuth0()
  const [list, setList] = useState()

  useEffect(() => {
    if (isAuthenticated) {
      setList(data)
    } else {
      setList(goal)
    }
  }, [data, goal, isAuthenticated])

  return (
    <>
      <Stack
        direction='row'
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Typography
          variant='h4'
          sx={{
            color: `${theme.palette.primary.text}`,
            fontWeight: 'bold',
            fontSize: { xs: '1.5rem', sm: '2rem' },
          }}
        >
          My Goals
        </Typography>
        <Button
          sx={{
            backgroundColor: `${theme.palette.primary.primaryBtn}`,
            color: `${theme.palette.primary.text}`,
            '&:hover': {
              backgroundColor: `${theme.palette.primary.primaryBtn}`,
            },
          }}
          startIcon={<AddIcon />}
          onClick={() => navigate('/my-goals/create')}
        >
          Add Goals
        </Button>
      </Stack>
      {error && (
        <Typography variant='h5' sx={{ color: 'red', fontWeight: 'bold' }}>
          Failed to fetch goals. Try again later.
        </Typography>
      )}
      {data && !isLoading && !error ? (
        <Box>
          <List>
            {list.map((item) => {
              return (
                <Card key={item._id} sx={{ marginBottom: '0.5rem' }}>
                  <ListItem>
                    <ListItemText
                      primary={item.goalTitle}
                      secondary={item.goalDescription}
                    />
                  </ListItem>
                </Card>
              )
            })}
          </List>
        </Box>
      ) : (
        <GoalItemSkeleton />
      )}
    </>
  )
}
