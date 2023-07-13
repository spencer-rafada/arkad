import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import GoalItemSkeleton from '../list/GoalItemSkeleton'

describe('GoalItemSkeleton', () => {
  it('should render', async () => {
    await render(<GoalItemSkeleton />)

    expect(screen.getByTestId('goal-item-skeleton')).toBeInTheDocument()
  })
})
