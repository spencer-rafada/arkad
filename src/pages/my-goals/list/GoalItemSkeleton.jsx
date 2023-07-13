import { Box, Skeleton } from '@mui/material'

export default function GoalItemSkeleton() {
  return (
    <Box sx={{ width: '50%' }} data-testid='goal-item-skeleton'>
      <Skeleton animation='wave' />
      <Skeleton animation='wave' />
    </Box>
  )
}
