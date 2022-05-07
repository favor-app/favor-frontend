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
  useToast
} from '@chakra-ui/react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import FavorCard from '../components/FavorCard';
import Navbar from '../components/Navbar';
import Logo from '../assets/logo.png';
import { useLocation } from 'react-router-dom';
import { RiHandCoinFill } from 'react-icons/ri';
const TRADE_URL = process.env.REACT_APP_URL + '/trades';
const UPDATE_FAVOR_URL = process.env.REACT_APP_URL + '/favors/updateStatus';

function FavorDescription() {
  const navigate = useNavigate();
  const toast = useToast()
  const location = useLocation();
  const [favorDetails, setFavorDetails] = useState(location.state.favorDetails);

  async function acceptFavor() {
    try {
      const response = await axios.post(TRADE_URL, {
        favorId: favorDetails._id,
      });
      console.log(response.data);
      updateFavor();
    } catch (err) {
      console.error(err.response);
    }
  }

  async function updateFavor() {
    try {
      const response = await axios.get(UPDATE_FAVOR_URL, {
        params: { status: "Accepted", favorId: favorDetails._id }
      });
      console.log(response.data);
      toast({
        position: 'top',  
        title: 'Favor Started!',
        description: "You have successfully started the favor.",
        status: 'success',
        duration: 2000,
        isClosable: true,
      });
      navigate('/demand');
    } catch (err) {
      console.error(err.response);
    }
  }

  return (
    <Box>
      <Flex
        mx={'auto'}
        flex="1"
        minH={'100vh'}
        justifyContent="center"
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
          {favorDetails.title}
        </Text>
        <Text
          fontSize="1.2rem"
          textAlign={'center'}
          fontWeight="black"
          color={'blue.500'}
        >
          {' '}
          <Icon
            as={RiHandCoinFill}
            w={5}
            h={5}
            color="blue.600"
            verticalAlign="-4px"
          />{' '}
          {favorDetails.favorCoins}{' '}
        </Text>
        <Text
          fontSize="1.2rem"
          textAlign={'center'}
          fontWeight="black"
          color={'blue.700'}
        >
          Category: {favorDetails.category}
        </Text>
        <Text fontSize="1.2rem" fontWeight="black" mt="1rem">
          Favor Description:
        </Text>
        <Text color="gray.500">{favorDetails.description}</Text>
        <Text fontSize="1.2rem" fontWeight="black" mt="1rem">
          Expires in:
        </Text>
        <Text color="gray.500">{location.state.expiry} Minutes</Text>

        <Button
          mt="1.5rem"
          mb="2rem"
          p="2rem"
          rounded={'2xl'}
          background="blue.500"
          color={'white'}
          onClick={acceptFavor}
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
