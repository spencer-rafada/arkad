import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import SignupButton from '../auth/SignupButton'
import { useAuth0 } from '@auth0/auth0-react'
jest.mock('@auth0/auth0-react')

describe('LoginButton', () => {
  beforeEach(() => {
    useAuth0.mockReturnValue({
      loginWithRedirect: jest.fn(),
    })
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should render', async () => {
    await render(<SignupButton />)
    expect(screen.getByTestId('signup-button')).toBeInTheDocument()
  })
  it('should be redirected to signup page when clicked', async () => {
    const { loginWithRedirect } = useAuth0()
    await render(<SignupButton />)
    fireEvent.click(screen.getByTestId('signup-button'))
    expect(loginWithRedirect).toHaveBeenCalled()
  })
})
