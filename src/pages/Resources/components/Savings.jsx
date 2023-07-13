import { Box, Divider, Stack, Typography } from '@mui/material'
import React from 'react'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn'

export default function Savings() {
  return (
    <div data-testid='resource-savings'>
      <Box>
        <Stack spacing={1} direction='column'>
          <Stack
            spacing={1}
            direction='row'
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            <MonetizationOnIcon fontSize='large' />
            <Typography
              variant='h1'
              sx={{ fontWeight: '400', fontSize: '2.5rem' }}
            >
              Savings
            </Typography>
          </Stack>
          <Typography
            variant='h3'
            sx={{ fontSize: '1.2rem', fontStyle: 'italic' }}
          >
            Arkad's First Cure: Start thy purse to fattening
          </Typography>
          <Divider variant='left' sx={{ width: '25%' }}></Divider>
        </Stack>
        <Stack sx={{ padding: '1rem' }} spacing={2}>
          <Typography variant='p' fontSize={25}>
            A savings account is an effective way to store your money in a
            secure location where it can earn interest. With a savings account,
            you can maintain your savings in a liquid state --- meaning you can
            access your funds whenever you want --- while also putting some
            space between your savings and your daily spending needs.
          </Typography>
          <Typography variant='p' fontSize={25}>
            Here is a great{' '}
            <Typography
              variant='a'
              component='a'
              href='https://www.reddit.com/r/personalfinance/wiki/banks_and_credit_unions/#wiki_what_banks_or_credit_unions_does_pf_recommend.3F'
              sx={{ textDecoration: 'none' }}
            >
              resource
            </Typography>{' '}
            about different recommendations.
          </Typography>
        </Stack>
      </Box>
    </div>
  )
}
