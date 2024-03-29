import { ComponentStoryObj, ComponentMeta } from '@storybook/react'

import { SetPassword } from '.'

type StoryObj = ComponentStoryObj<typeof SetPassword>
type ComponentProps = Required<typeof SetPassword.defaultProps>

export default {
  title: 'pages/Login/SetPassword',
  component: SetPassword,
} as ComponentMeta<typeof SetPassword>

const args: ComponentProps = {
  show: false,
  hoge: '11',
}

export const Basic: StoryObj = {
  args: { ...args },
  parameters: { chromatic: { viewports: [414, 1080] } },
}
