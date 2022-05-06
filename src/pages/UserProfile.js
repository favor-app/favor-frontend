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
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

import { useState, useRef, useEffect } from 'react';
const USER_URL = 'http://localhost:4000/users';
const FAVORS_URL = 'http://localhost:4000/favors/byFavoreeId';
const LOGOUT_URL = 'http://localhost:4000/auth/logout';

function UserProfile() {
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(USER_URL);
      const userData = await response.data;
      setData(userData);
      return userData._id;
    }

    async function fetchFavors(userId) {
      const response = await axios.get(FAVORS_URL, {
        params: { favoreeId: userId },
      });
      const favors = await response.data;
      setFavors(favors);
    }

    fetchData()
      .then(userId => {
        fetchFavors(userId).catch(console.error);
      })
      .catch(console.error);
  }, []);

  async function logOut() {
    const response = await axios.get(LOGOUT_URL);
    const message = await response.data;
    console.log(message);
    navigate('/login');
  }

  function setData(userData) {
    console.log(userData);
    setName(userData.name);
    setEmail(userData.email);
    setCoins(userData.favorCoins);
    setPhone(userData.phone);
    setUserId(userData._id);
  }

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [coins, setCoins] = useState('');
  const [userId, setUserId] = useState('');
  const [favors, setFavors] = useState([]);

  return (
    <Box>
      <Flex
        mx={'auto'}
        minH={'100vh'}
        justifyContent="center"
        direction={'column'}
        px="2rem"
        pt="2rem"
        pb="3rem"
        maxW={{ lg: '4xl' }}
      >
        <Heading fontSize={{ base: '2xl', lg: '3xl' }} mb="1rem">
          My Profile
        </Heading>
        <HStack justify={'space-between'}>
          <Heading fontSize={{ base: 'xl', lg: '2xl' }}>
            Personal Details
          </Heading>
          <Link color={'blue.500'} onClick={logOut}>logout</Link>
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
                {name}
              </Heading>
              <Text color={'blue.600'}>{email}</Text>
              <Text color={'gray.900'}>{phone}</Text>
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
          <Text fontWeight={'extrabold'}>{coins} 💰</Text>
          <Text>
            Buy
            <ChevronRightIcon w={6} h={6} />
          </Text>
        </Flex>

        <Text fontSize="1.2rem" fontWeight="black" mt="1rem">
          Favor History
        </Text>

        {/* <Text fontSize="1.2rem" fontWeight="black" mt="1rem">
          Completed Favors
        </Text> */}

        {favors.map(favor => (
          <FavorCard details={favor} path={'/favor-status'} />
        ))}
      </Flex>

      {/* <Box mt="3em"> */}
      <Navbar active={3} />
      {/* </Box> */}
    </Box>
  );
}

export default UserProfile;
