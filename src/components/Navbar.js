import { Flex, Heading, Spacer } from '@chakra-ui/layout';
import React from 'react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

function Navbar() {
  return (
    <Flex minW="100vw" p={10}>
      <Heading>MyView Toolbox</Heading>
      <Spacer />
      <ColorModeSwitcher justifySelf="flex-end" isRound />
    </Flex>
  );
}

export default Navbar;
