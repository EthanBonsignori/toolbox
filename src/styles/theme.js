import { extendTheme } from '@chakra-ui/react';
import CardTheme from './Card.theme';

const theme = {
  config: { initialColorMode: 'light', useSystemColorMode: false },
  components: {
    Card: CardTheme,
  },
  fonts: {
    heading: 'IM Fell DW Pica',
    text: 'PT Sans Narrow',
  },
  colors: {
    purple: {
      main: '#8b51f5',
      secondary: '#250561',
      accent: '#520cd4',
      bg: '#e2e4f6',
    },
    text: {
      main: '#282b3e',
    },
  },
};

export default extendTheme(theme);
