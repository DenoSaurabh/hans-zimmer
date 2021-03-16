import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    grey: {
      light: '#E4E4E4',
      medium: '#B9B9B9',
      dark: '#111111'
    }
  },
  fonts: {
    heading: 'Cosi Times Light Condensed',
    body: "'Poppins', sans-serif",
    serif: "'Playfair Display', serif"
  },
  styles: {
    global: {
      'html, body': {
        backgroundColor: 'black',
        color: 'white'
      },
      body: {
        padding: '50px 8%'
      }
    }
  }
});

export default theme;
