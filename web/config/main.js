// NOTE: For @storybook/test-runner
// eslint-disable-next-line no-undef
module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: ['@chakra-ui/storybook-addon', '@storybook/addon-interactions'],
  // NOTE: なぜかこれで早くなる
  // https://github.com/storybookjs/storybook/issues/10784
  typescript: {
    reactDocgen: false,
  },
  features: {
    interactionsDebugger: true,
  },
}
