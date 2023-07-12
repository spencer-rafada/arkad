/* eslint-disable react/prop-types */
import { createContext, useState } from 'react'

const GoalsCheckoutContext = createContext(null)

// Properties
// monthlyRevenue : number
// separateMoney : bool
// goalTitle : string
// goalDescription : string
// materialGoal : bool | string
// goalCreateDate: Date
// goalDueDate : Date
// hasSavings : bool

function GoalsCheckoutProvider({ children }) {
  const [monthlyRevenue, setMonthlyRevenue] = useState(5000)
  const [isSeparate, setIsSeparate] = useState(false)
  const [wantMaterial, setWantMaterial] = useState(false)
  const [materialGoal, setMaterialGoal] = useState()
  const [goalTitle, setGoalTitle] = useState('A Finance Goal')
  const [goalDescription, setGoalDescription] = useState(
    'Arkad will make your riches grow'
  )
  const [goalCreateDate, setGoalCreateDate] = useState(new Date())
  const [goalDueDate, setGoalDueDate] = useState(new Date())
  const [hasSavingsAccount, setHasSavingsAccount] = useState(false)
  const [progress, setProgress] = useState(0)
  const [dialog, setDialog] = useState('monthlyRevenue')
  const [complete, setComplete] = useState(false)
  const [cost, setCost] = useState(0)

  return (
    <GoalsCheckoutContext.Provider
      value={{
        monthlyRevenue,
        setMonthlyRevenue,
        isSeparate,
        setIsSeparate,
        wantMaterial,
        setWantMaterial,
        materialGoal,
        setMaterialGoal,
        goalTitle,
        setGoalTitle,
        goalDescription,
        setGoalDescription,
        goalCreateDate,
        setGoalCreateDate,
        goalDueDate,
        setGoalDueDate,
        hasSavingsAccount,
        setHasSavingsAccount,
        progress,
        setProgress,
        dialog,
        setDialog,
        complete,
        setComplete,
        cost,
        setCost,
      }}
    >
      {children}
    </GoalsCheckoutContext.Provider>
  )
}

export { GoalsCheckoutContext, GoalsCheckoutProvider }
