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
} from '@chakra-ui/react';
import FavorCard from '../components/FavorCard';
import Navbar from '../components/Navbar';
import Logo from '../assets/logo.png';
function FavorDescription() {
  return (
    <Box>
      <Flex
        mx={'auto'}
        flex="1"
        minH={'100vh'}
        justifyContent='center'

        direction={'column'}
        px="2rem"
        py="1rem"
        maxW={{ lg: '4xl' }}
      >
        <Image
          src="https://static.vecteezy.com/system/resources/previews/002/412/377/original/coffee-cup-logo-coffee-shop-icon-design-free-vector.jpg"
          rounded={'full'}
          w="12rem"
          mx="auto"
          my="0"
        ></Image>
        <Text
          fontSize={{ base: '2xl', lg: '3xl' }}
          m="0.7rem"
          textAlign={'center'}
          fontWeight="black"
          px="1rem"
        >
          Buy me a coffee
        </Text>
        <Text textAlign={'center'} fontWeight="black" color={'blue.500'} fontSize='1.2rem'>
          Joe Bruin
        </Text>
        <Text></Text>
        <Text fontSize="1.2rem" fontWeight="black" mt="1rem">
          Favor Description:
        </Text>
        <Text color="gray.500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          aliquam nunc vel ex volutpat molestie. Orci varius natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque
          aliquet lectus id posuere ultrices.
        </Text>
        <Text fontSize="1.2rem" fontWeight="black" mt="1rem">
          Expires in:
        </Text>
        <Text color="gray.500">44 Minutes</Text>

        <Button
          mt="1.5rem"
          mb="2rem"
          p="2rem"
          rounded={'2xl'}
          background="blue.500"
          color={'white'}
        >
          <Link>Start Favor</Link>
        </Button>
      </Flex>
      {/* <Box mt="3em"> */}
        <Navbar active={1} />
      {/* </Box> */}
    </Box>
  );
}

export default FavorDescription;
