import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Footer from '../Footer'

describe('Footer', () => {
  it('should render', async () => {
    await render(<Footer />)
    expect(screen.getByTestId('footer')).toBeInTheDocument()
  })

  it('should call function to navigate', async () => {
    window.open = jest.fn()
    await render(<Footer />)

    fireEvent.click(screen.getByText('Arkad'))
    expect(window.open).toHaveBeenCalledWith(
      'https://github.com/spencer-rafada/arkad',
      '_blank'
    )
    fireEvent.click(screen.getByText('Spencer Rafada'))
    expect(window.open).toHaveBeenCalledWith(
      'https://www.linkedin.com/in/spencer-rafada/',
      '_blank'
    )
  })
})
