import { useContext } from 'react'
import { GoalsCheckoutContext } from '../../../providers/GoalsCheckoutProvider'

const questions = [
  { question: 'What is your monthly revenue?', quote: '' },
  {
    question: 'Do you separate money for savings whenever you get paid?',
    quote: '',
  },
  { question: 'Do you have a savings account?', quote: '' },
  {
    question:
      'Are you saving for something specific? (vacation, car, house, etc...)',
    quote: '',
  },
  { question: 'When do you want to achieve this goal?', quote: '' },
  { question: 'Customize your goal.', quote: '' },
]

export default function GoalsDialog() {
  const { progress, dialog } = useContext(GoalsCheckoutContext)
  return (
    <div>
      <p>
        {progress} of 5: {dialog}
      </p>
      <h2>{questions[progress].question}</h2>
    </div>
  )
}
