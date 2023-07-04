import { useContext } from 'react'
import { GoalsCheckoutContext } from '../../../providers/GoalsCheckoutProvider'

export default function GoalsDialog() {
  const { progress, dialog } = useContext(GoalsCheckoutContext)
  return (
    <div>
      <p>
        {progress} of 5: {dialog}
      </p>
    </div>
  )
}
