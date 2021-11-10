import { extendTheme } from '@chakra-ui/react';

const theme = {
  config: { initialColorMode: 'light', useSystemColorMode: false },
  fonts: {
    heading: 'IM Fell DW Pica',
    text: 'PT Sans Narrow',
  },
  colors: {
    purple: {
      main: '#8b51f5',
      accent: '#520cd4',
      bg: '#e2e4f6',
    },
  },
};

export default extendTheme(theme);
