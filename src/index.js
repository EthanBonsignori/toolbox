import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import { render } from 'react-dom';
import App from './App';
import theme from './utils/theme';

render(
  <StrictMode>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <App />
  </StrictMode>,
  document.getElementById('root')
);
