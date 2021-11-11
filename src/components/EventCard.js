import { Avatar } from '@chakra-ui/avatar';
import { Flex, Text } from '@chakra-ui/layout';
import React from 'react';
import Card from './base/Card';

const EventCard = ({ event }) => {
  return (
    <Card>
      <Flex w="100%" h="100px" flexDirection="row" flexWrap="wrap">
        <Flex
          width="100%"
          alignItems="center"
          justifyContent="center"
          pt="6px"
          fontSize="1.2rem"
          lineHeight="1em"
          fontFamily="IM Fell DW Pica"
          textAlign="center"
          borderBottom="2px solid"
          borderColor="purple.bg"
        >
          Techtro
        </Flex>
        <Flex
          w="100%"
          maxWidth="250px"
          alignItems="center"
          borderColor="purple.bg"
          textOverflow="ellipsis"
          padding="0px 8px"
          title={'oaksjdychfnrmdjfndhsyfhvjfmdsoilokjh'}
        >
          <Avatar marginRight="8px" h="32px" w="32px" />
          <Text
            cursor="default"
            fontSize="1.5em"
            fontFamily="IM Fell English SC"
            overflow="hidden"
            noOfLines={1}
          >
            {event.createdBy.toLowerCase()}
          </Text>
        </Flex>
        <Card.Title title={event.title}>
          posuere cubilia curae nulla dapibus dolor vel est donec odio Elit sunt
          qui proident labore voluptata
        </Card.Title>
      </Flex>
    </Card>
  );
};

export default EventCard;
