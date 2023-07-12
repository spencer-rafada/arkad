import { Box, Skeleton } from '@mui/material'

export default function GoalItemSkeleton() {
  return (
    <Box sx={{ width: '50%' }}>
      <Skeleton animation='wave' />
      <Skeleton animation='wave' />
    </Box>
  )
}
