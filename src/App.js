import { Center, Container, Heading, VStack } from '@chakra-ui/layout';
import React from 'react';
import Navbar from './components/Navbar';

function App() {
  return (
    <VStack height="100vh" bg="purple.bg">
      <Container maxW="85vw" height="100%">
        <Navbar />
        <Heading fontSize="48px" color="black">
          Techtro Board
        </Heading>

        <Center>{/* <Board /> */}</Center>
      </Container>
    </VStack>
  );
}

export default App;
