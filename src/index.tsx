import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import { render } from 'react-dom';
import App from './App';
import theme from './styles/theme';
import '@fontsource/im-fell-dw-pica/400-italic.css';
import '@fontsource/im-fell-english-sc';
import '@fontsource/pt-sans-narrow';

render(
  <StrictMode>
      <App />
  </StrictMode>,
  document.getElementById('root')
);
