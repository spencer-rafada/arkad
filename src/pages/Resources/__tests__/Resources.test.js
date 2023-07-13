import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Resources from '../Resources'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import ResourcesList from '../ResourcesList'
import { useNavigate } from 'react-router-dom'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}))

const theme = createTheme()
describe('Resources', () => {
  it('should render', async () => {
    render(
      <ThemeProvider theme={theme}>
        <Resources />
      </ThemeProvider>
    )
    expect(screen.getByTestId('resources')).toBeInTheDocument()
  })
})

describe('ResourcesList', () => {
  it('should change route', async () => {
    const handleListClick = jest.fn()
    const navigate = jest.fn()
    const resources = [{ name: 'Resource1', route: 'resource1' }]
    useNavigate.mockReturnValue(navigate)
    await render(
      <ThemeProvider theme={theme}>
        <ResourcesList
          resources={resources}
          handleListClick={handleListClick}
        />
      </ThemeProvider>
    )
    fireEvent.click(screen.getByText('Resource1'))
    expect(screen.getByText('Resource1')).toBeInTheDocument()
  })
})
