import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Chart from '../Chart'

const mockData = {
  _id: '64b03d5aca1fd0bb62dbc117',
  monthlyRevenue: 2500,
  isSeparate: true,
  wantMaterial: false,
  materialGoal: 'Mammoth',
  goalTitle: 'I want a mammoth',
  goalDescription: 'XC is my queen.',
  goalCreateDate: '2023-07-13T18:05:42.625Z',
  goalDueDate: '2023-07-27T18:05:42.000Z',
  hasSavingsAccount: true,
  complete: false,
  cost: 500,
  subGoals: {
    biWeeks: 4,
    biWeekDates: [
      {
        date: '2023-07-27',
        complete: false,
      },
      {
        date: '2023-08-10',
        complete: false,
      },
      {
        date: '2023-08-24',
        complete: false,
      },
      {
        date: '2023-09-07',
        complete: false,
      },
    ],
  },
  userId: 'google-oauth2|117293283332510924283',
  savings: 0,
  __v: 0,
}

describe('Chart', () => {
  it('should render', async () => {
    await render(<Chart data={mockData} />)
    expect(screen.getByTestId('chart')).toBeInTheDocument()
  })
})
