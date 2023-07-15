import {
  Box,
  Button,
  Container,
  Divider,
  Stack,
  TextField,
  useTheme,
} from '@mui/material'
import React, { useState } from 'react'
import { usePutData } from '../../hooks/usePutData'

export default function ProfileDetails({ data }) {
  const [firstName, setFirstName] = useState(data.firstName)
  const [lastName, setLastName] = useState(data.lastName)
  const [edit, setEdit] = useState(false)
  const { putData, isLoading, error } = usePutData()

  const theme = useTheme()

  const toggleEdit = () => {
    setEdit(!edit)
  }

  const submitInfo = () => {
    const payload = { ...data, firstName: firstName, lastName: lastName }
    putData(`http://localhost:3000/user/${data._id}`, payload)
    toggleEdit()
  }

  return (
    <>
      <Box component='form' sx={{ padding: '1rem' }}>
        <Stack direction='column' spacing={3}>
          <Stack
            direction='row'
            spacing={2}
            sx={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <Stack spacing={3} direction='row'>
              <TextField
                required
                variant='filled'
                label='First Name'
                defaultValue={firstName}
                InputProps={{ readOnly: !edit }}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <TextField
                required
                variant='filled'
                label='Last Name'
                defaultValue={lastName}
                InputProps={{ readOnly: !edit }}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Stack>
            <Stack spacing={2} direction='row'>
              <Button
                sx={{
                  backgroundColor: `${theme.palette.primary.accent}`,
                  '&:hover': {
                    backgroundColor: `${theme.palette.primary.accent}`,
                  },
                }}
                onClick={edit ? submitInfo : toggleEdit}
                disabled={isLoading}
              >
                {edit ? `Save` : `Edit`}
              </Button>
              {edit && (
                <Button
                  onClick={toggleEdit}
                  variant='text'
                  sx={{ color: `${theme.palette.primary.text}` }}
                >
                  Cancel
                </Button>
              )}
            </Stack>
          </Stack>
          <Divider></Divider>
        </Stack>
      </Box>
    </>
  )
}
