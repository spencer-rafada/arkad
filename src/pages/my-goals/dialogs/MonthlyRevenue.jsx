import { useContext } from 'react'
import { GoalsCheckoutContext } from '../../../providers/GoalsCheckoutProvider'
import { Slider, Typography } from '@mui/material'
import { useTheme } from '@emotion/react'

export default function MonthlyRevenue({ type }) {
  const { monthlyRevenue, setMonthlyRevenue, cost, setCost } =
    useContext(GoalsCheckoutContext)
  const theme = useTheme()

  // Monthly Revenue Handler Function
  const sliderChangeHandler = (event, newValue) => {
    if (type === 'monthlyRevenue') setMonthlyRevenue(newValue)
    if (type === 'goalCost') setCost(newValue)
  }

  return (
    <>
      <Slider
        min={0}
        max={10000}
        step={100}
        defaultValue={0}
        sx={{ color: `${theme.palette.primary.primaryBtn}` }}
        onChange={sliderChangeHandler}
      />
      <Typography
        variant='p'
        sx={{
          color: `${theme.palette.primary.text}`,
          fontSize: '1.5rem',
        }}
      >
        $ {type === 'monthlyRevenue' ? monthlyRevenue : cost}
      </Typography>
    </>
  )
}
