const path = require('path')

const toPath = (_path) => path.join(process.cwd(), _path)

module.exports = {
  stories: ['../src/**/*stories.tsx'],
  addons: ['@storybook/addon-essentials'],
  typescript: {
    reactDocgen: false
  },
  webpackFinal: async (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          '@emotion/core': toPath('node_modules/@emotion/react'),
          'emotion-theming': toPath('node_modules/@emotion/react'),
          '@components': toPath('src/components'),
          '@styles': toPath('src/styles'),
          '@configs': toPath('src/configs')
        }
      }
    }
  }
}
