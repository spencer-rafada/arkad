import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import LoginButton from '../auth/LoginButton'
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
    await render(<LoginButton />)
    expect(screen.getByTestId('login-button')).toBeInTheDocument()
  })
  it('should call login function when clicked', async () => {
    const { loginWithRedirect } = useAuth0()
    await render(<LoginButton />)
    fireEvent.click(screen.getByTestId('login-button'))
    expect(loginWithRedirect).toHaveBeenCalled()
  })
})
