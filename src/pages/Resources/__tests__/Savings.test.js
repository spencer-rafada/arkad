import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Savings from '../components/Savings'
import { ThemeProvider, createTheme } from '@mui/material'

describe('Savings', () => {
  it('should render information', async () => {
    const theme = createTheme()
    await render(
      <ThemeProvider theme={theme}>
        <Savings />
      </ThemeProvider>
    )
    expect(screen.getByTestId('resource-savings')).toBeInTheDocument()
  })
})
