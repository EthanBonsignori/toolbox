import { useColorModeValue } from '@chakra-ui/color-mode';
import { Center, Text } from '@chakra-ui/layout';
import React from 'react';
import { CARD_HEIGHT, CARD_WIDTH } from '../utils/constants';

function Board() {
  const bg = useColorModeValue('gray.100', 'aw');
  const color = useColorModeValue('gray.300', '#111');
  const textShadow = useColorModeValue(
    '0px -1px 0px rgba(0,0,0,.7), 0px 1px 0px rgba(255,255,255,.3)',
    '0px 1px 0px rgba(255,255,255,.3), 0px -1px 0px rgba(0,0,0,.7)'
  );

  return (
    <Center
      width={CARD_WIDTH}
      height={CARD_HEIGHT}
      bg={bg}
      borderRadius="10px"
      boxShadow="inset 1px 1px 3px #111"
      textAlign="center"
    >
      <Text
        color={color}
        textShadow={textShadow}
        fontWeight="bold"
        fontSize="35px"
      >
        DROP A CARD
      </Text>
    </Center>
  );
}

export default Board;
