import { useTheme } from '@emotion/react'
import { Divider, List, ListItemButton, ListItemText } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function ResourcesList({ resources }) {
  const theme = useTheme()
  const navigate = useNavigate()
  const [selectedIndex, setSelectedIndex] = useState(null)

  const handleListClick = (route, index) => {
    setSelectedIndex(index)
    navigate(route)
  }

  return (
    <List sx={{ color: `${theme.palette.primary.text}` }}>
      <ListItemText primary={'Resources'}></ListItemText>
      {resources.map((item, index) => {
        return (
          <div key={index}>
            <ListItemButton
              onClick={() => handleListClick(item.route, index)}
              selected={selectedIndex === index}
            >
              <ListItemText primary={item.name}></ListItemText>
            </ListItemButton>
            <Divider />
          </div>
        )
      })}
    </List>
  )
}
