import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Demo from './index'

test('Demo component', () => {
  render(<Demo text='test' />)
  expect(screen.getByTestId('demo').textContent).toContain('test')
})
