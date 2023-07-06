import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import GoalDueDatePicker from '../dialogs/GoalDueDatePicker'
import { GoalsCheckoutContext } from '../../../providers/GoalsCheckoutProvider'
import { ThemeProvider, createTheme } from '@mui/material/styles'

describe('GoalDueDatePicker component', () => {
  it('should render', async () => {
    const setIsSeparate = jest.fn()
    const setHasSavingsAccount = jest.fn()
    const contextValue = {
      setIsSeparate,
      setHasSavingsAccount,
      isSeparate: false, // Initial state value
      dialog: 'separateMoney', // Initial state value
      hasSavingsAccount: false, // Initial state value
    }

    const theme = createTheme() // Create an empty theme object

    const Dummy = () => {
      return (
        <div data-testid='goal-due-date'>
          <GoalDueDatePicker />
        </div>
      )
    }

    await render(
      <GoalsCheckoutContext.Provider value={contextValue}>
        <ThemeProvider theme={theme}>
          <Dummy />
        </ThemeProvider>
      </GoalsCheckoutContext.Provider>
    )

    expect(screen.getByTestId('goal-due-date')).toBeInTheDocument()
  })
})
