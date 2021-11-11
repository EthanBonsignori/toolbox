import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import { render } from 'react-dom';
import App from './App';
import theme from './theme/theme';
import '@fontsource/im-fell-dw-pica/400-italic.css';
import '@fontsource/im-fell-english-sc';
import '@fontsource/pt-sans-narrow';

render(
  <StrictMode>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <ChakraProvider theme={theme} resetCSS>
      <App />
    </ChakraProvider>
  </StrictMode>,
  document.getElementById('root')
);
