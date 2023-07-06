import { useContext } from 'react'
import { GoalsCheckoutContext } from '../../../providers/GoalsCheckoutProvider'
import { Slider, Typography } from '@mui/material'
import { useTheme } from '@emotion/react'

export default function MonthlyRevenue() {
  const { monthlyRevenue, setMonthlyRevenue } = useContext(GoalsCheckoutContext)
  const theme = useTheme()

  // Monthly Revenue Handler Function
  const monthlyRevenueChangeHandler = (event, newValue) => {
    setMonthlyRevenue(newValue)
  }

  return (
    <>
      <Slider
        min={0}
        max={10000}
        step={100}
        defaultValue={5000}
        sx={{ color: `${theme.palette.primary.primaryBtn}` }}
        onChange={monthlyRevenueChangeHandler}
      />
      <Typography
        variant='p'
        sx={{
          color: `${theme.palette.primary.text}`,
          fontSize: '1.2rem',
        }}
      >
        {monthlyRevenue}
      </Typography>
    </>
  )
}
