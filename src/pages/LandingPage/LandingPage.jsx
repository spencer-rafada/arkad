import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material'
import { css } from '@emotion/react'
import { useTheme } from '@mui/material/styles'
import ArkadHomeImage from '../../assets/arkad.jpeg'
import { useNavigate } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import { useEffect } from 'react'
import { usePostData } from '../../hooks/usePostData'
import useLocalStorage from '../../hooks/useLocalStorage'

export default function LandingPage() {
  const theme = useTheme()
  const { isAuthenticated, user } = useAuth0()
  const { postData } = usePostData()
  const [userId, setUserId] = useLocalStorage('userId', '')
  const navigate = useNavigate()
  
  useEffect(() => {
    if (!isAuthenticated) return
    const newUser = {
      firstName: user.given_name,
      lastName: user.family_name,
      tokenData: user,
    }
    const fetchUser = async () => {
      const response = await postData(`http://localhost:3000/user`, newUser)
      setUserId(response.userId)
    }
    fetchUser()
  }, [isAuthenticated])

  // Styles
  const containerStyle = css`
    background-color: ${theme.palette.primary.main};
    color: ${theme.palette.primary.primaryBtn};
    display: flex;
    justify-content: center;
    align-items: center;
    height: 85vh;
    overflow: scroll;
  `

  return (
    <Container maxWidth='xl' sx={containerStyle}>
      <Grid container spacing={3}>
        <Grid
          item
          xs={6}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Stack direction='column'>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'left',
                flexDirection: 'column',
              }}
            >
              <Typography
                variant='h1'
                sx={{
                  fontSize: '2.5rem',
                  fontWeight: 'bold',
                  color: `${theme.palette.primary.accent}`,
                }}
              >
                Grow Your Riches with Arkad
              </Typography>
              <Typography
                sx={{
                  color: `${theme.palette.primary.text}`,
                  fontStyle: 'italic',
                }}
              >
                The best finance tracking tool in the market.
              </Typography>
              <Box>
                <Button
                  sx={{
                    backgroundColor: `${theme.palette.primary.primaryBtn}`,
                    '&:hover': {
                      backgroundColor: `${theme.palette.primary.primaryBtn}`,
                    },
                    marginTop: '1rem',
                    padding: '0.8rem',
                  }}
                  onClick={() => navigate('my-goals')}
                >
                  SET MY GOAL
                </Button>
              </Box>
            </Box>
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <img
              src={ArkadHomeImage}
              alt='Arkad Home Page'
              style={{
                width: '50%',
                borderRadius: '100rem',
              }}
            ></img>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}
