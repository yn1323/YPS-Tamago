import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { userEvent, within } from '@storybook/testing-library'

import TopPage from './TopPage'

type StoryObj = ComponentStoryObj<typeof TopPage>
type ComponentProps = Required<typeof TopPage.defaultProps>

export default {
  title: 'templates/AuthLayoutPC/Hoge',
  component: TopPage,
} as ComponentMeta<typeof TopPage>

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
