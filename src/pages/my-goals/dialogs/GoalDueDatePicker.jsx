import { useContext } from 'react'
import { GoalsCheckoutContext } from '../../../providers/GoalsCheckoutProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers'
import dayjs from 'dayjs'

export default function GoalDueDatePicker() {
  const { goalDueDate, setGoalDueDate } = useContext(GoalsCheckoutContext)
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        value={dayjs(goalDueDate)}
        minDate={dayjs(new Date())}
        onChange={(newValue) => setGoalDueDate(newValue)}
        sx={{ backgroundColor: 'white' }}
      />
    </LocalizationProvider>
  )
}
