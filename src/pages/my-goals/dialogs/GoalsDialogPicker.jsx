import { GoalsCheckoutContext } from '../../../providers/GoalsCheckoutProvider'
import GoalsDialog from './GoalsDialog'
import { useContext, useEffect } from 'react'

export default function GoalsDialogPicker() {
  const { dialog, setDialog, setProgress, progress } =
    useContext(GoalsCheckoutContext)

  useEffect(() => {
    if (dialog === 'monthlyRevenue') setDialog('monthlyRevenue')
    if (dialog === 'separateMoney') setDialog('separateMoney')
    if (dialog === 'hasSavings') setDialog('hasSavings')
    if (dialog === 'wantMaterial') setDialog('wantMaterial')
    if (dialog === 'modifyGoal') setDialog('modifyGoal')
  }, [dialog, setDialog])

  useEffect(() => {
    if (progress === 0) setDialog('monthlyRevenue')
    if (progress === 1) setDialog('separateMoney')
    if (progress === 2) setDialog('hasSavings')
    if (progress === 3) setDialog('wantMaterial')
    if (progress === 4) setDialog('modifyGoal')
  }, [progress, setDialog])

  return (
    <div>
      <GoalsDialog />
      <button
        disabled={progress === 0}
        onClick={() => {
          setProgress(progress !== 0 ? progress - 1 : 0)
        }}
      >
        Back
      </button>
      <button
        disabled={progress === 5}
        onClick={() => {
          // need to make the 5 dynamic
          setProgress(progress !== 4 ? progress + 1 : 5)
        }}
      >
        Next
      </button>
    </div>
  )
}
