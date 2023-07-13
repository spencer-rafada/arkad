import { Container } from '@mui/material'
import { css } from '@emotion/react'
import { useTheme } from '@mui/material/styles'
import { useAuth0 } from '@auth0/auth0-react'
import { useEffect } from 'react'
import { usePostData } from '../../hooks/usePostData'
import useLocalStorage from '../../hooks/useLocalStorage'

export default function LandingPage() {
  const theme = useTheme()
  const { isAuthenticated, user } = useAuth0()
  const { postData } = usePostData()
  const [userId, setUserId] = useLocalStorage('userId', '')

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
    width: 100%;
    height: 1080px;
  `
  return (
    <Container maxWidth='xl' sx={containerStyle}>
      X
    </Container>
  )
}
