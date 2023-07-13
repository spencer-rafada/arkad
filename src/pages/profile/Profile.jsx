import React from 'react'
import { useFetchData } from '../../hooks/useFetchData'
import useLocalStorage from '../../hooks/useLocalStorage'
import ProfileDetails from './ProfileDetails'
import { useTheme } from '@mui/material/styles'
import { css } from '@emotion/react'
import { Container, Typography } from '@mui/material'

export default function Profile() {
  const [userId, setUserId] = useLocalStorage('userId', '')
  const { data, isLoading } = useFetchData(
    `http://localhost:3000/user/${userId}`
  )
  const theme = useTheme()

  // Styles
  const containerStyle = css`
    background-color: ${theme.palette.primary.main};
    color: ${theme.palette.primary.primaryBtn};
    width: 100%;
    height: 1080px;
  `

  return (
    <>
      <Container sx={containerStyle}>
        <Typography>Profile</Typography>
        {data && !isLoading && <ProfileDetails data={data} />}
      </Container>
    </>
  )
}
