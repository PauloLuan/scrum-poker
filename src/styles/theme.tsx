import { extendTheme, theme, withDefaultColorScheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const fonts = {
  body: 'Helvetica Now Display DW',
  heading: 'Helvetica Now Display DW',
  mono: 'Helvetica Now Display DW'
}

const breakpoints = createBreakpoints({
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em'
})

const customTheme = extendTheme(
  {
    config: { initialColorMode: 'light', useSystemColorMode: false },
    fonts,
    breakpoints,
    shadows: {
      outline: `0 0 0 3px ${theme.colors.orange['400']}`
    }
  },
  withDefaultColorScheme({
    colorScheme: 'orange'
  })
)

export default customTheme
