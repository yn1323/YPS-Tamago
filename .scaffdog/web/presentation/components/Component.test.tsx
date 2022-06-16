import { render } from '@redwoodjs/testing/web'

import {{ inputs.component | pascal }} from './{{ inputs.component | pascal }}'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('{{ inputs.component | pascal }}', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<{{ inputs.component | pascal }} />)
    }).not.toThrow()
  })
})
