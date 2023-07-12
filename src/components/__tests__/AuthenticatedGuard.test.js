import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import AuthenticatedGuard from '../auth/AuthenticatedGuard'

// Mock the component passed to AuthenticatedGuard
const MockComponent = () => <div>Mock Component</div>

describe('AuthenticatedGuard', () => {
  it('renders the redirect component when user is not authenticated', async () => {
    await render(<AuthenticatedGuard component={MockComponent} />)
    expect(
      screen.getByText('Loading! Refactor my component later')
    ).toBeInTheDocument()
  })
})
