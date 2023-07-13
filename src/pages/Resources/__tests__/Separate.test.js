import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Separate from '../components/Separate'

describe('Separate', () => {
  it('should render information', async () => {
    await render(<Separate />)
    expect(screen.getByTestId('resource-10percent')).toBeInTheDocument()
  })
})
