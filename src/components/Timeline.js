import { Flex, SimpleGrid, Text } from '@chakra-ui/layout';
import { format } from 'date-fns';
import React from 'react';
import { humanReadableDateDiff } from '../utils/date.utils';
import EventCard from './EventCard';

const Timeline = ({ events }) => {
  return (
    <SimpleGrid columns={2} pb="20">
      <Flex minW="50vw" justifyContent="space-around" position="relative">
        {mockEvents.map(event => {
          const [firstDiff, secondDiff] = humanReadableDateDiff(
            event.createdAt
          );
          return (
            <Flex key={event.id} w="33.3333%" borderBottom="4px solid black">
              <EventCard event={event} />
              <Flex
                position="absolute"
                bottom={-10}
                width="33.333%"
                height="20px"
                m="0px 50px"
                justifyContent="center"
                flexDirection="column"
                color="text.main"
                fontStyle="italic"
              >
                <Text
                  fontFamily="IM Fell DW Pica"
                  fontSize="28px"
                  lineHeight="0.9"
                >
                  {format(new Date(event.createdAt), 'eeee, MMM Lo')}
                </Text>
                <Flex opacity="75%">
                  <Text fontWeight="bold" fontStyle="normal">
                    {firstDiff}
                  </Text>
                  &nbsp;&amp;&nbsp;
                  <Text fontWeight="bold" fontStyle="normal">
                    {secondDiff}
                  </Text>
                  &nbsp;ago
                </Flex>
              </Flex>
            </Flex>
          );
        })}
      </Flex>
    </SimpleGrid>
  );
};

export default Timeline;
