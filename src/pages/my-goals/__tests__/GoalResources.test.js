import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import GoalResources from '../list/GoalResources'
import { ThemeProvider } from '@emotion/react'
import { createTheme } from '@mui/material'

jest.mock('react-router-dom')
const theme = createTheme()

describe('GoalResources', () => {
  it('should not render Savings Resource, but render 10%', async () => {
    await render(
      <ThemeProvider theme={theme}>
        <GoalResources data={{ hasSavingsAccount: false, isSeparate: true }} />
      </ThemeProvider>
    )
    expect(screen.getByText('Rule of 10%')).toBeInTheDocument()
  })
  it('should render Savings Resource, but not 10%', async () => {
    await render(
      <ThemeProvider theme={theme}>
        <GoalResources data={{ hasSavingsAccount: true, isSeparate: false }} />
      </ThemeProvider>
    )
    expect(screen.getByText('Savings')).toBeInTheDocument()
  })
  it('should render both', async () => {
    await render(
      <ThemeProvider theme={theme}>
        <GoalResources data={{ hasSavingsAccount: true, isSeparate: true }} />
      </ThemeProvider>
    )
    expect(screen.getByText('Savings')).toBeInTheDocument()
    expect(screen.getByText('Rule of 10%')).toBeInTheDocument()
  })
})
