import { Typography, useTheme } from '@mui/material'
import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'
import useGoalChartDetail from '../../hooks/useGoalChartDetail'

export default function Chart({ data }) {
  const theme = useTheme()
  const chartData = useGoalChartDetail(data)

  return (
    <>
      {data && (
        <>
          <Typography
            color={`${theme.palette.primary.text}`}
            fontSize={'1.5rem'}
          >
            Your Money Trend
          </Typography>
          <LineChart
            width={800}
            height={400}
            data={chartData}
            margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
          >
            <Line
              type='monotone'
              fill={`${theme.palette.primary.primaryBtn}`}
              dataKey='value'
            />
            <CartesianGrid stroke='#ccc' strokeDasharray='5 5' />
            <XAxis dataKey='date' />
            <YAxis />
            <Tooltip />
          </LineChart>
        </>
      )}
    </>
  )
}
