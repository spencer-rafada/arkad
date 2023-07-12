import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import LogoutButton from '../auth/LogoutButton'
import { useAuth0 } from '@auth0/auth0-react'
jest.mock('@auth0/auth0-react')

describe('LoginButton', () => {
  beforeEach(() => {
    useAuth0.mockReturnValue({
      logout: jest.fn(),
    })
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should render', async () => {
    await render(<LogoutButton />)
    expect(screen.getByTestId('logout-button')).toBeInTheDocument()
  })
  it('should call logout function when clicked', async () => {
    const { logout } = useAuth0()
    await render(<LogoutButton />)
    fireEvent.click(screen.getByTestId('logout-button'))
    expect(logout).toHaveBeenCalled()
  })
})
