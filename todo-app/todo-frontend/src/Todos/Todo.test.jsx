import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { expect, test, vi } from 'vitest'
import Todo from './Todo'

test('calls completeTodo when an unfinished todo is marked as done', async () => {
  const completeTodo = vi.fn()
  const todo = { _id: '1', text: 'Learn Docker', done: false }

  render(<Todo todo={todo} deleteTodo={vi.fn()} completeTodo={completeTodo} />)

  await userEvent.click(screen.getByRole('button', { name: /set as done/i }))

  expect(completeTodo).toHaveBeenCalledWith(todo)
})