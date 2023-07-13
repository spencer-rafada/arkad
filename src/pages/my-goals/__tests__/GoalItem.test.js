import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import GoalItem from '../list/GoalItem'

jest.mock('react-router-dom')

const mockItem = {
  _id: '64ae5cb91e293ed511b71356',
  monthlyRevenue: 3200,
  isSeparate: true,
  wantMaterial: false,
  materialGoal: 'Vacation for Honeymoon',
  goalTitle: 'Japan Honeymoon',
  goalDescription: 'I want to make my wife happy.',
  goalCreateDate: '2023-07-12T07:55:56.000Z',
  goalDueDate: '2023-07-26T07:55:56.000Z',
  hasSavingsAccount: true,
  complete: false,
  cost: 2000,
  subGoals: {
    biWeeks: 13,
    biWeekDates: [
      {
        date: '2023-07-26',
        complete: false,
      },
      {
        date: '2023-08-09',
        complete: true,
      },
      {
        date: '2023-08-23',
        complete: false,
      },
      {
        date: '2023-09-06',
        complete: false,
      },
      {
        date: '2023-09-20',
        complete: false,
      },
      {
        date: '2023-10-04',
        complete: false,
      },
      {
        date: '2023-10-18',
        complete: false,
      },
      {
        date: '2023-11-01',
        complete: false,
      },
      {
        date: '2023-11-15',
        complete: false,
      },
      {
        date: '2023-11-29',
        complete: false,
      },
      {
        date: '2023-12-13',
        complete: false,
      },
      {
        date: '2023-12-27',
        complete: false,
      },
      {
        date: '2024-01-10',
        complete: false,
      },
    ],
  },
  userId: 'google-oauth2|117293283332510924283',
  savings: 160,
  __v: 0,
}

describe('GoalItem', () => {
  it('should render', async () => {
    await render(<GoalItem item={mockItem} index={0} isAuthenticated={true} />)

    expect(screen.getByTestId('goal-item')).toBeInTheDocument()
  })
})
