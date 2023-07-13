import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Savings from '../components/Savings'

describe('Savings', () => {
  it('should render information', async () => {
    await render(<Savings />)
    expect(screen.getByTestId('resource-savings')).toBeInTheDocument()
  })
})
