import { useTheme } from '@emotion/react'
import { useContext } from 'react'
import { GoalsCheckoutContext } from '../../../providers/GoalsCheckoutProvider'
import { RadioGroup, FormControlLabel, Radio } from '@mui/material'

export default function Separated() {
  const theme = useTheme()
  const {
    setIsSeparate,
    isSeparate,
    dialog,
    hasSavingsAccount,
    setHasSavingsAccount,
  } = useContext(GoalsCheckoutContext)

  return (
    <>
      <RadioGroup
        value={dialog === 'separateMoney' ? isSeparate : hasSavingsAccount}
        onChange={(e) =>
          dialog === 'separateMoney'
            ? setIsSeparate(e.target.value)
            : setHasSavingsAccount(e.target.value)
        }
      >
        <FormControlLabel
          value='true'
          sx={{ color: `${theme.palette.primary.text}` }}
          control={
            <Radio
              sx={{
                '&.Mui-checked': {
                  color: `${theme.palette.primary.primaryBtn}`,
                },
              }}
            />
          }
          label='Yes'
        ></FormControlLabel>
        <FormControlLabel
          value='false'
          sx={{ color: `${theme.palette.primary.text}` }}
          control={
            <Radio
              sx={{
                '&.Mui-checked': {
                  color: `${theme.palette.primary.primaryBtn}`,
                },
              }}
            />
          }
          label='No'
        ></FormControlLabel>
      </RadioGroup>
    </>
  )
}
