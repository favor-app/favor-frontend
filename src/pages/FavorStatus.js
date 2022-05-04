import React from 'react';
import {
  Button,
  Progress,
  Flex,
  Box,
  Text,
  Center,
  VStack,
  Code,
  Grid,
  theme,
  Link,
} from '@chakra-ui/react';
import FavorCard from '../components/FavorCard';
import Navbar from '../components/Navbar';

function FavorStatus() {
  return (
    <Flex
      mx={'auto'}
      justifyContent="center"
      flex="1"
      alignContent="center"
      direction={'column'}
      p="1rem"
      minH={'95vh'}
      maxW={{ lg: '4xl' }}
    >
      <Progress
        value={55}
        hasStripe
        mx="1rem"
        my="1rem"
        borderRadius={'0.3rem'}
        size="lg"
      />
      <Text
        fontSize={{ base: '2xl', lg: '3xl' }}
        mt="0.7rem"
        textAlign={'left'}
        fontWeight="bold"
        px="1rem"
      >
        Favor in-progress
      </Text>
      <FavorCard />

      <Button
        mx="1rem"
        mt="1.5rem"
        mb="2rem"
        p="2rem"
        rounded={'2xl'}
        background="green.300"
        color="gray.100"
      >
        <Link>Mark as Completed</Link>
      </Button>
      <Button
        mx="1rem"
        p="2rem"
        rounded={'2xl'}
        background="red.300"
        color="gray.100"
      >
        <Link>Cancel Favor</Link>
      </Button>
      <Box mt="3em">
        <Navbar />
      </Box>
    </Flex>
  );
}

export default FavorStatus;
