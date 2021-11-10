import { Flex, List, ListItem } from '@chakra-ui/layout';
import React from 'react';

function Navbar() {
  return (
    <Flex w="100%" minH="120px" alignItems="center" justifyContent="right">
      <List display="flex" flexDirection="row" alignItems="center" h="100%">
        <ListItem pr="5">Home</ListItem>
        <ListItem>Boards</ListItem>
      </List>
    </Flex>
  );
}

export default Navbar;
