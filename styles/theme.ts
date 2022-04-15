import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        bgColor: 'gray.50',
        color: 'gray.900'
    },
    a: {
      color: 'teal.300'
    }
  },
  fonts: {
    heading: 'Roboto, sans-serif',
    body: 'Roboto, sans-serif',
  },
}})

export default theme
