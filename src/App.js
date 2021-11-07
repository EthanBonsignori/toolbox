import { Center, Container, VStack } from '@chakra-ui/layout';
import { ColorModeProvider, ThemeProvider } from '@chakra-ui/react';
import React from 'react';
import Board from './components/Board';
import Navbar from './components/Navbar';
import theme from './utils/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <VStack height="100vh">
          <Navbar />
          <Container maxW="container.xl" height="100%">
            <Center>
              <Board />
            </Center>
          </Container>
        </VStack>
      </ColorModeProvider>
    </ThemeProvider>
  );
}

export default App;
