import { Center, Container, Heading, VStack } from '@chakra-ui/layout';
import React from 'react';
import Navbar from './components/Navbar';
import Timeline from './components/Timeline';
import './App.css'


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
      <Timeline events={[]} />
    </VStack>
  );
}

export default App;
