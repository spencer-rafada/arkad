import { useTheme } from '@emotion/react'
import {
  Container,
  Typography,
  css,
  Grid,
  List,
  ListItemButton,
  ListItemText,
} from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import ResourcesList from './ResourcesList'

export default function Resources() {
  const theme = useTheme()
  const resources = [
    { name: 'Savings', route: 'savings' },
    { name: 'Rule of 10%', route: 'separate' },
    // { name: 'Accountability', route: 'accountability' },
  ]

  // Styles
  const containerStyle = css`
    background-color: ${theme.palette.primary.main};
    color: ${theme.palette.primary.primaryBtn};
    width: 100%;
    height: 1080px;
  `

  return (
    <Container maxWidth='xl' sx={containerStyle} data-testid='resources'>
      <Grid container spacing={1} sx={{ width: '100vw' }}>
        <Grid
          item
          xs={2}
          sx={{
            width: '100%',
            height: '100%',
            backgroundColor: 'background.paper',
            borderRadius: '0.5rem',
          }}
        >
          <ResourcesList resources={resources} />
        </Grid>
        <Grid item xs={10}>
          <Outlet />
        </Grid>
      </Grid>
    </Container>
  )
}
