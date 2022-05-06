import React from 'react';
import {
  Button,
  Image,
  Flex,
  Box,
  Text,
  Icon,
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
import {useLocation} from 'react-router-dom';
import { RiHandCoinFill } from "react-icons/ri";


function FavorDescription() {
  const location = useLocation();
  let startFavor;
  startFavor =
  location.state.showButton === true ? (
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
    ) : (
      <></>
    );
  // console.log(location.state.showButton, location.state.favorDetails);
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
          {location.state.favorDetails.title}
        </Text>
        <Text 
        fontSize="1.2rem"
        textAlign={'center'} fontWeight="black" color={'blue.500'}>
          {' '}
          <Icon
            as={RiHandCoinFill}
            w={5}
            h={5}
            color="blue.600"
            verticalAlign="-4px"
          />{' '}
          {location.state.favorDetails.favorCoins}{' '}
        </Text>
        <Text 
        fontSize="1.2rem"
        textAlign={'center'} fontWeight="black" color={'blue.700'}>
          Category: {location.state.favorDetails.category}
        </Text>
        <Text fontSize="1.2rem" fontWeight="black" mt="1rem">
          Favor Description:
        </Text>
        <Text color="gray.500">
        {location.state.favorDetails.description}
        </Text>
        <Text fontSize="1.2rem" fontWeight="black" mt="1rem">
          Expires in:
        </Text>
        <Text color="gray.500">{location.state.expiry} Minutes</Text>

        {startFavor}

      </Flex>
      {/* <Box mt="3em"> */}
        <Navbar active={1} />
      {/* </Box> */}
    </Box>
  );
}

export default FavorDescription;
