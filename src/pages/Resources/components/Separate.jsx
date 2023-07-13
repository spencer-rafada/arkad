import React from 'react'
import { Box, Divider, Stack, Typography } from '@mui/material'
import PercentIcon from '@mui/icons-material/Percent'

export default function Separate() {
  return (
    <div data-testid='resource-10percent'>
      <Box>
        <Stack spacing={1} direction='column'>
          <Stack
            spacing={1}
            direction='row'
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            <PercentIcon fontSize='large' />
            <Typography
              variant='h1'
              sx={{ fontWeight: '400', fontSize: '2.5rem' }}
            >
              Rule of 10%
            </Typography>
          </Stack>
          <Typography
            variant='h3'
            sx={{ fontSize: '1.2rem', fontStyle: 'italic' }}
          >
            A Part Of All You Earn Is Yours To Keep
          </Typography>
          <Divider variant='left' sx={{ width: '25%' }}></Divider>
        </Stack>
        <Stack sx={{ padding: '1rem' }} spacing={2}>
          <Typography variant='p' fontSize={25}>
            The 10% rule is a savings tip that suggests you set aside 10% of
            your gross monthly income for any of your financial savings goals.
            If you still need to start a savings account, this is a great way to
            build up your savings.
          </Typography>
          <Typography variant='p' fontSize={25}>
            You should create a monthly budget before starting your own savings
            journey.
          </Typography>
        </Stack>
      </Box>
    </div>
  )
}
