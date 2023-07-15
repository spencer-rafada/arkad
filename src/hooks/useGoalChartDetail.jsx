import React, { useEffect, useState } from 'react'

export default function useGoalChartDetail(data) {
  const [chartData, setChartData] = useState()
  useEffect(() => {
    function addBiWeekDates(data) {
      const monthlyRevenue = data.monthlyRevenue
      const biWeekDates = data.subGoals.biWeekDates

      let accumulatedValue = 0

      // Calculate the value as a trend based on the completeness of each entry
      const updatedBiWeekDates = biWeekDates.map((biWeekDate, index) => {
        accumulatedValue += biWeekDate.complete ? monthlyRevenue * 0.1 : 0

        return {
          ...biWeekDate,
          value: accumulatedValue,
        }
      })

      // Update the data with the updated biWeekDates array
      const updatedObject = {
        ...data,
        subGoals: {
          ...data.subGoals,
          biWeekDates: updatedBiWeekDates,
        },
      }

      setChartData(updatedObject.subGoals.biWeekDates)
    }

    addBiWeekDates(data)
  }, [data])

  return chartData
}
