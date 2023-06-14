import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Navbar from '../Navbar'
import { BrowserRouter } from 'react-router-dom'

describe('Navbar', () => {
  it('should render', async () => {
    await render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    )

    expect(screen.getByTestId('mobile-title')).toBeInTheDocument()
    expect(screen.getByTestId('desktop-title')).toBeInTheDocument()
  })
})
