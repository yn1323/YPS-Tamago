module.exports = {
  addons: ['@chakra-ui/storybook-addon', '@storybook/addon-interactions'],
  // NOTE: なぜかこれで早くなる
  // https://github.com/storybookjs/storybook/issues/10784
  typescript: {
    reactDocgen: false,
  },
}
