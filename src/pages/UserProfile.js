import React from 'react';
import {
  Button,
  Image,
  Flex,
  Box,
  Text,
  Center,
  VStack,
  Code,
  Grid,
  theme,
  Link,
  Heading,
  HStack,
} from '@chakra-ui/react';

import { ChevronRightIcon } from '@chakra-ui/icons';
import Navbar from '../components/Navbar';
import FavorCard from '../components/FavorCard';

function FavorDescription() {
  return (
    <Box>
      <Flex
        mx={'auto'}
        minH={'92vh'}
        justifyContent="center"
        direction={'column'}
        px="2rem"
        py="2rem"
        maxW={{ lg: '4xl' }}
      >
        <Heading fontSize={{ base: '2xl', lg: '3xl' }} mb="1rem">
          My Profile
        </Heading>
        <HStack justify={'space-between'}>
          <Heading fontSize={{ base: 'xl', lg: '2xl' }}>
            Personal Details
          </Heading>
          <Link color={'blue.500'}>logout</Link>
        </HStack>
        <Box p="1rem" rounded="2xl" shadow="lg" mb="1rem">
          <HStack>
            <Image
              src="https://i.pinimg.com/originals/6b/39/6f/6b396fdc57dc8be3d1b1de01b89ebea2.jpg"
              h="6rem"
              rounded={'lg'}
            />
            <Flex display={'block'} textAlign="center" grow="1">
              <Heading color="gray.900" fontSize={'md'}>
                Joe Bruin
              </Heading>
              <Text color={'blue.600'}>joebruin@ucla.edu</Text>
              <Text color={'gray.900'}>123-456-7890</Text>
            </Flex>
          </HStack>
        </Box>

        <Flex
          direction="row"
          justify={'space-between'}
          p="1rem"
          rounded="2xl"
          shadow="lg"
          mb="1rem"
        >
          <Text fontWeight={'extrabold'}>400 💰</Text>
          <Text>
            Buy
            <ChevronRightIcon w={6} h={6} />
          </Text>
        </Flex>

        <Text fontSize="1.2rem" fontWeight="black" mt="1rem">
          Favor History
        </Text>
        <FavorCard />

        <Text fontSize="1.2rem" fontWeight="black" mt="1rem">
          Completed Favors
        </Text>
        {/* <FavorCard />
        <FavorCard />
        <FavorCard /> */}
      </Flex>

      <Box mt="3em">
        <Navbar active={3} />
      </Box>
    </Box>
  );
}

export default FavorDescription;
