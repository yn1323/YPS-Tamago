import { render } from '@redwoodjs/testing/web'

import TopPage from './TopPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('TopPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TopPage />)
    }).not.toThrow()
  })
})
