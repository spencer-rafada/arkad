import GoalsDialogPicker from './GoalsDialogPicker'
import { GoalsCheckoutProvider } from '../../../providers/GoalsCheckoutProvider'

export default function GoalCreate() {
  return (
    <GoalsCheckoutProvider>
      <GoalsDialogPicker />
    </GoalsCheckoutProvider>
  )
}
