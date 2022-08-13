import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { userEvent, within, screen } from '@storybook/testing-library'

import { Top } from '.'

type StoryObj = ComponentStoryObj<typeof Top>
type ComponentProps = Required<typeof Top.defaultProps>

export default {
  title: 'pages/Top',
  component: Top,
} as ComponentMeta<typeof Top>

const args: ComponentProps = {}

export const Basic: StoryObj = {
  args: { ...args },
  parameters: { chromatic: { viewports: [414, 1080] } },
}

export const Test: StoryObj = {
  args: { ...args },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByTestId('close'))
    await screen.findByText('マイページ')
  },
}
