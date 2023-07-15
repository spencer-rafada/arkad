import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useFetchData } from '../../../hooks/useFetchData'
import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  useTheme,
} from '@mui/material'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import { usePutData } from '../../../hooks/usePutData'
import GoalResources from './GoalResources'
import { formatDate } from '../../../utils/index'

export default function GoalDetail() {
  const params = useParams()
  const goalId = params.goalId
  const [open, setOpen] = useState(false)
  const { data, isLoading, error } = useFetchData(
    `http://localhost:3000/goals/${goalId}`
  )
  const [currentGoal, setCurrentGoal] = useState()
  const { putData } = usePutData()
  const theme = useTheme()

  useEffect(() => {
    setCurrentGoal(data)
  }, [data])

  const handleDateIndexClick = (index) => {
    let biWeek = currentGoal.subGoals.biWeekDates
    biWeek[index].complete = !biWeek[index].complete
    setCurrentGoal((prevState) => ({
      ...prevState,
      subGoals: { ...prevState.subGoals, biWeekDates: biWeek },
      savings: biWeek[index].complete
        ? prevState.savings + (prevState.monthlyRevenue / 2) * 0.1
        : prevState.savings - (prevState.monthlyRevenue / 2) * 0.1,
    }))
  }

  useEffect(() => {
    putData(`http://localhost:3000/goals/${goalId}`, currentGoal)
  }, [currentGoal])

  return (
    <div data-testid='goal-detail'>
      {data && !isLoading && (
        <>
          <List
            sx={{ bgcolor: 'background.paper', marginBottom: '1rem' }}
            subheader={<ListSubheader>Grow your Finance!</ListSubheader>}
          >
            <ListItemText
              sx={{ paddingLeft: '1rem', paddingRight: '1rem' }}
              primary={data.goalTitle}
              secondary={data.goalDescription}
            ></ListItemText>
            <ListItemButton onClick={() => setOpen(!open)}>
              <ListItemIcon>
                <TrendingUpIcon />
              </ListItemIcon>
              <ListItemText
                primary={'Keep yourself accountable.'}
                secondary={`It will take ${
                  data.subGoals.biWeeks * 2
                } weeks to achieve your goal just from your monthly revenue.`}
              ></ListItemText>
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout='auto' unmountOnExit>
              <List
                disablePadding
                sx={{ color: `${theme.palette.primary.text}` }}
              >
                {data.subGoals.biWeekDates.map((item, index) => {
                  return (
                    <div key={index}>
                      <ListItemButton
                        onClick={() => handleDateIndexClick(index)}
                      >
                        <ListItemIcon>
                          {item.complete ? (
                            <CheckCircleOutlineIcon />
                          ) : (
                            <CircleOutlinedIcon />
                          )}
                        </ListItemIcon>
                        <ListItemText
                          sx={{
                            textDecoration: item.complete
                              ? `line-through`
                              : `null`,
                          }}
                          primary={
                            item.complete
                              ? `You paid $${
                                  data.monthlyRevenue * 0.1
                                } on ${formatDate(item.date)}`
                              : `You should pay $${
                                  data.monthlyRevenue * 0.1
                                } on ${formatDate(item.date)}`
                          }
                        ></ListItemText>
                      </ListItemButton>
                    </div>
                  )
                })}
              </List>
            </Collapse>
          </List>
          {(data.isSeparate || data.hasSavingsAccount) && (
            <GoalResources data={data} />
          )}
        </>
      )}
    </div>
  )
}
