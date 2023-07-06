import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import GoalsDialog from '../dialogs/GoalsDialog'
import { GoalsCheckoutContext } from '../../../providers/GoalsCheckoutProvider'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { questions } from '../dialogs/questions'

describe('GoalsDialog component', () => {
  const mockContextValue = {
    progress: 0,
    dialog: 'monthlyRevenue',
    setMaterialGoal: jest.fn(),
    setGoalTitle: jest.fn(),
    setGoalDescription: jest.fn(),
  }

  const theme = createTheme()

  it('renders the monthly revenue dialog', async () => {
    await render(
      <GoalsCheckoutContext.Provider value={mockContextValue}>
        <ThemeProvider theme={theme}>
          <GoalsDialog />
        </ThemeProvider>
      </GoalsCheckoutContext.Provider>
    )

    expect(screen.getByText(questions[0].question)).toBeInTheDocument()
  })

  it('renders the separate money dialog', async () => {
    mockContextValue.progress = 1
    await render(
      <GoalsCheckoutContext.Provider value={mockContextValue}>
        <ThemeProvider theme={theme}>
          <GoalsDialog />
        </ThemeProvider>
      </GoalsCheckoutContext.Provider>
    )

    expect(screen.getByText(questions[1].question)).toBeInTheDocument()
  })

  it('renders the has savings dialog', async () => {
    mockContextValue.progress = 2
    await render(
      <GoalsCheckoutContext.Provider value={mockContextValue}>
        <ThemeProvider theme={theme}>
          <GoalsDialog />
        </ThemeProvider>
      </GoalsCheckoutContext.Provider>
    )

    expect(screen.getByText(questions[2].question)).toBeInTheDocument()
  })

  it('renders the want material dialog', async () => {
    mockContextValue.progress = 3
    await render(
      <GoalsCheckoutContext.Provider value={mockContextValue}>
        <ThemeProvider theme={theme}>
          <GoalsDialog />
        </ThemeProvider>
      </GoalsCheckoutContext.Provider>
    )

    expect(screen.getByText(questions[3].question)).toBeInTheDocument()
  })

  it('renders the goal due date dialog', async () => {
    mockContextValue.progress = 4
    await render(
      <GoalsCheckoutContext.Provider value={mockContextValue}>
        <ThemeProvider theme={theme}>
          <GoalsDialog />
        </ThemeProvider>
      </GoalsCheckoutContext.Provider>
    )

    expect(screen.getByText(questions[4].question)).toBeInTheDocument()
  })

  it('renders the modify goal dialog', async () => {
    mockContextValue.progress = 5
    await render(
      <GoalsCheckoutContext.Provider value={mockContextValue}>
        <ThemeProvider theme={theme}>
          <GoalsDialog />
        </ThemeProvider>
      </GoalsCheckoutContext.Provider>
    )

    expect(screen.getByText(questions[5].question)).toBeInTheDocument()
  })
})
