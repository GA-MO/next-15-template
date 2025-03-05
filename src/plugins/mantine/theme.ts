import { createTheme, rem } from '@mantine/core'

import '@mantine/dates/styles.css'
import '@mantine/notifications/styles.css'

export const theme = createTheme({
  primaryColor: 'primary',
  colors: {
    primary: [
      '#fff0e4',
      '#ffe0cf',
      '#fac0a1',
      '#f69e6e',
      '#f28043',
      '#f06e27',
      '#f06418',
      '#d6530c',
      '#bf4906',
      '#a73c00'
    ]
  },
  defaultRadius: 'md',
  radius: {
    md: '10px',
    lg: '12px',
    xl: '14px'
  },
  fontFamily: 'Roboto, sans-serif',
  headings: {
    sizes: {
      h1: {
        fontSize: rem(32),
        fontWeight: 'bold'
      },
      h2: {
        fontSize: rem(24),
        fontWeight: 'bold'
      },
      h3: {
        fontSize: rem(20),
        fontWeight: 'bold'
      },
      h4: {
        fontSize: rem(16),
        fontWeight: 'bold'
      },
      h5: {
        fontSize: rem(14),
        fontWeight: 'bold'
      },
      h6: {
        fontSize: rem(12),
        fontWeight: 'bold'
      }
    }
  },
  spacing: {
    xs: rem(4),
    sm: rem(8),
    md: rem(16),
    lg: rem(24),
    xl: rem(32)
  },
  fontSizes: {
    xs: rem(12),
    sm: rem(14),
    md: rem(16),
    lg: rem(20),
    xl: rem(24)
  },
  breakpoints: {
    xs: '360px',
    sm: '600px',
    md: '900px',
    lg: '1200px',
    xl: '1536px'
  },
  fontSmoothing: true,
  cursorType: 'pointer',
  focusRing: 'never'
})
