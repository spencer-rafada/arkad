import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetchData } from '../../../hooks/useFetchData'
import { Box, Stack, Typography } from '@mui/material'

export default function GoalDetail() {
  const params = useParams()
  const goalId = params.goalId
  const { data, isLoading, error } = useFetchData(
    `http://localhost:3000/goals/${goalId}`
  )

  return (
    <>
      {data && !isLoading && (
        <Box>
          <Stack>
            <Typography>{data.goalTitle}</Typography>
          </Stack>
        </Box>
      )}
    </>
  )
}
