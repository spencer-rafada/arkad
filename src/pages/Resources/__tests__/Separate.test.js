import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Separate from '../components/Separate'
import { ThemeProvider, createTheme } from '@mui/material'

describe('Separate', () => {
  it('should render information', async () => {
    const theme = createTheme()
    await render(
      <ThemeProvider theme={theme}>
        <Separate />
      </ThemeProvider>
    )
    expect(screen.getByTestId('resource-10percent')).toBeInTheDocument()
  })
})
