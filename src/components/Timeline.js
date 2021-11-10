import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/layout';
import React from 'react';
import { humanReadableDateDiff } from '../utils/date.utils';

const Timeline = ({ events }) => {
  console.log('🚀 ~ Timeline ~ events', events);
  return (
    <SimpleGrid columns={2} pb="20">
      <Flex minW="50vw" justifyContent="space-around" position="relative">
        {mockEvents.map(event => {
          const [firstDiff, secondDiff] = humanReadableDateDiff(
            event.createdAt
          );
          return (
            <Flex key={event.id} w="33.3333%" borderBottom="4px solid black">
              <Box
                bg="white"
                minH="180px"
                borderRadius="4px"
                boxShadow="2px 3px 11px rgba(42, 45, 67, 0.26)"
                width="100%"
                m="50px"
                mb="10"
              >
                <Flex h="100%" flexDirection="row" flexWrap="wrap">
                  <Flex
                    w="100%"
                    alignItems="flex-start"
                    borderBottom="1px solid"
                    borderColor="purple.bg"
                  >
                    <Box
                      ml="10px"
                      mt="10px"
                      mb="10px"
                      h="32px"
                      maxH="32px"
                      w="32px"
                      border="1px solid"
                      borderRadius="100%"
                      borderColor="black"
                    />
                    <Text
                      pt="1px"
                      mt="10px"
                      marginLeft="4px"
                      fontSize="1.2rem"
                      fontFamily="IM Fell English SC"
                    >
                      {event.createdBy.toLocaleLowerCase()}
                    </Text>
                  </Flex>
                  <Text m="10px" h="80%" color="purple.secondary">
                    {event.title}
                  </Text>
                </Flex>
              </Box>
              <Flex
                position="absolute"
                bottom={-8}
                width="33.333%"
                height="20px"
                justifyContent="center"
                flexDirection="column"
                color="text.main"
                fontStyle="italic"
              >
                <Text fontFamily="IM Fell DW Pica" fontSize="18px">
                  {/* {format(new Date(event.createdAt), 'eeee, MMM Lo')} */}
                </Text>
                <Flex>
                  <Text fontWeight="bold">{firstDiff}</Text>
                  &nbsp;&amp;&nbsp;
                  <Text fontWeight="bold">{secondDiff}</Text>
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

const mockEvents = [
  {
    id: 1,
    createdBy: 'Ethan',
    title: 'sapien sapien non mi integer ac neque duis bibendum morbi non quam',
    status: {
      passed: false,
      active: false,
      deleted: false,
    },
    createdAt: '2020-12-27T02:44:15Z',
    updatedAt: '2021-09-23T21:52:37Z',
  },
  {
    id: 2,
    createdBy: 'EricLongUserName',
    title: 'id ornare imperdiet sapien urna pretium nisl ut volutpat',
    status: {
      passed: false,
      active: true,
      deleted: false,
    },
    createdAt: '2021-10-24T03:29:31Z',
    updatedAt: '2021-04-26T12:22:23Z',
  },
  {
    id: 3,
    createdBy: 'Kim',
    title: 'posuere cubilia curae nulla dapibus dolor vel est donec odio',
    status: {
      passed: false,
      active: false,
      deleted: false,
    },
    createdAt: '2021-08-11T16:15:43Z',
    updatedAt: '2021-10-20T02:16:06Z',
  },
];
