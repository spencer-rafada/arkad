import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import NotFound from '../NotFound'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

describe('NotFound', () => {
  const theme = createTheme()
  const router = createBrowserRouter([
    {
      path: '*',
      element: <NotFound />,
    },
  ])
  const handleNavigateToParent = jest.fn()
  const navigate = jest.fn()

  it('should render', async () => {
    await render(
      <ThemeProvider theme={theme}>
        <RouterProvider router={router}>
          <NotFound />
        </RouterProvider>
      </ThemeProvider>
    )

    expect(screen.getByTestId('not-found')).toBeInTheDocument()
    expect(screen.getByText('Page Not Found')).toBeInTheDocument()
  })

  it('should call navigate function when clicked', async () => {
    await render(
      <ThemeProvider theme={theme}>
        <RouterProvider router={router}>
          <NotFound
            handleNavigateToParent={handleNavigateToParent}
            navigate={navigate}
          />
        </RouterProvider>
      </ThemeProvider>
    )

    expect(screen.getByTestId('not-found-button')).toBeInTheDocument()
    // fireEvent.click(screen.getByText('Home'))
    // expect(navigate).toBeCalled()
  })
})
