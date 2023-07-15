import React from 'react'
import { useFetchData } from '../../hooks/useFetchData'
import useLocalStorage from '../../hooks/useLocalStorage'
import ProfileDetails from './ProfileDetails'
import { useTheme } from '@mui/material/styles'
import { css } from '@emotion/react'
import { Box, Typography } from '@mui/material'

export default function Profile() {
  const [userId, setUserId] = useLocalStorage('userId', '')
  const { data, isLoading } = useFetchData(
    `https://arkad-be.onrender.com/user/${userId}`
  )
  const theme = useTheme()

  // Styles
  const containerStyle = css`
    background-color: ${theme.palette.primary.main};
    color: ${theme.palette.primary.primaryBtn};
    height: 85vh;
    overflow: scroll;
    padding: 1rem;
  `

  return (
    <>
      <Box sx={containerStyle} data-testid='profile-container'>
        <Typography variant='h3' sx={{ fontSize: '2rem' }}>
          Your Arkad Information
        </Typography>
        {data && !isLoading && <ProfileDetails data={data} />}
        <Typography variant='h3' sx={{ fontSize: '2rem' }}>
          Your Money Growth
        </Typography>
        {data && !isLoading && <Typography>$ {data.savingsMoney}</Typography>}
      </Box>
    </>
  )
}
