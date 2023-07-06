import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import Separated from '../dialogs/Separated'
import { GoalsCheckoutContext } from '../../../providers/GoalsCheckoutProvider'
import { ThemeProvider, createTheme } from '@mui/material/styles'

describe('Separated component', () => {
  test('should update state when radio button is clicked', async () => {
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

    await render(
      <GoalsCheckoutContext.Provider value={contextValue}>
        <ThemeProvider theme={theme}>
          <Separated />
        </ThemeProvider>
      </GoalsCheckoutContext.Provider>
    )

    const yesRadioButton = screen.getByTestId('yes') // Verify the label text matches the component code
    const noRadioButton = screen.getByTestId('no') // Verify the label text matches the component code

    fireEvent.click(yesRadioButton) // Simulate click on the "Yes" radio button
    expect(setIsSeparate).toHaveBeenCalled() // Check if setIsSeparate was called with the expected value

    fireEvent.click(noRadioButton) // Simulate click on the "No" radio button
    expect(setIsSeparate).toHaveBeenCalled() // Check if setHasSavingsAccount was called with the expected value
  })
})
