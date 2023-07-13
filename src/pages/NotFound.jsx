import { css, useTheme } from '@emotion/react'
import { Box, Button, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import WarningIcon from '@mui/icons-material/Warning'
import { useNavigate } from 'react-router-dom'

export default function NotFound() {
  const theme = useTheme()
  const navigate = useNavigate()

  // Styles
  const containerStyle = css`
    background-color: ${theme.palette.primary.main};
    color: ${theme.palette.primary.primaryBtn};
    width: 100%;
    height: 100vh;
  `

  const buttonStyle = css`
    background-color: ${theme.palette.primary.primaryBtn};
    color: ${theme.palette.primary.text};
    padding: 0.5rem 1rem;
    &:hover {
      background-color: ${theme.palette.primary.primaryBtn};
      color: ${theme.palette.primary.secondaryBtn};
    }
  `

  const handleNavigateToParent = () => {
    navigate('..', { replace: true })
  }

  return (
    <div data-testid='not-found'>
      <Box sx={containerStyle}>
        <Container
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100vh',
          }}
        >
          <Stack direction='column' alignItems={'center'}>
            <WarningIcon sx={{ fontSize: '8.5rem', color: 'red' }} />
            <Typography
              sx={{
                fontSize: { xs: '2rem', sm: '2.5rem' },
                fontWeight: 'bold',
                color: `${theme.palette.primary.text}`,
              }}
            >
              Page Not Found
            </Typography>
            <Button
              sx={buttonStyle}
              onClick={handleNavigateToParent}
              data-testid='not-found-button'
            >
              Home
            </Button>
          </Stack>
        </Container>
      </Box>
    </div>
  )
}
