import {
  Box,
  Container,
  Divider,
  Stack,
  Typography,
  css,
  useTheme,
} from '@mui/material'
import React from 'react'

export default function Footer() {
  const theme = useTheme()
  const containerStyle = css`
    background-color: background.paper;
    color: ${theme.palette.primary.primaryBtn};
    padding: 1rem;
  `

  const handleFooterClick = (route) => {
    let link
    if (route === 'repo') link = 'https://github.com/spencer-rafada/arkad'
    if (route === 'personal')
      link = 'https://www.linkedin.com/in/spencer-rafada/'

    window.open(link, '_blank')
  }

  return (
    <>
      <Divider />
      <Container maxWidth='xl' sx={containerStyle}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: `${theme.palette.primary.accent}`,
            }}
          >
            <Typography
              sx={{ marginRight: '1rem', marginLeft: '1rem' }}
              onClick={() => handleFooterClick('repo')}
            >
              Arkad
            </Typography>
            <Divider orientation='vertical' flexItem />
            <Typography
              sx={{ marginRight: '1rem', marginLeft: '1rem' }}
              onClick={() => handleFooterClick('personal')}
            >
              Spencer Rafada
            </Typography>
            <Divider orientation='vertical' flexItem />
            <Typography sx={{ marginRight: '1rem', marginLeft: '1rem' }}>
              &copy; {new Date().getFullYear()}
            </Typography>
          </Box>
        </Box>
      </Container>
    </>
  )
}
