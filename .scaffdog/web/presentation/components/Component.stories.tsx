import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { userEvent, within } from '@storybook/testing-library'

import {{ inputs.component | pascal }} from './{{ inputs.component | pascal }}'

type StoryObj = ComponentStoryObj<typeof {{ inputs.component | pascal }}>
type ComponentProps = Required<typeof {{ inputs.component | pascal }}.defaultProps>

export default {
  title: '{{ inputs.path }}/{{ inputs.component | pascal }}',
  component: {{ inputs.component | pascal }},
} as ComponentMeta<typeof {{ inputs.component | pascal }}>

const args: ComponentProps = {
  show: false,
  hoge: '11',
}

export const Basic: StoryObj = {
  args: { ...args },
  parameters: { chromatic: { viewports: [414, 1080] }, layout: 'fullscreen' },
}

export const Interactions: StoryObj = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByTestId('close'))
  },
}
