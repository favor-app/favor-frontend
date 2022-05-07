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
  useToast,
} from '@chakra-ui/react';
import FavorCard from '../components/FavorCard';
import Navbar from '../components/Navbar';
import { useLocation, useNavigate } from 'react-router-dom';

import axios from 'axios';
import { useState, useRef, useEffect } from 'react';

const UPDATE_STATUS_URL = process.env.REACT_APP_URL + '/favors/updateStatus';
const GET_TRADE_URL = process.env.REACT_APP_URL + '/trades/byFavorId';
const UPDATE_COINS_URL = process.env.REACT_APP_URL + '/users/updateCoins';
async function updateStatus(favorId, status) {
  try {
    const response = await axios.get(UPDATE_STATUS_URL, {
      params: { status: status, favorId: favorId },
    });
  } catch (err) {
    console.log(err.response);
  }
}

async function getTradeDetails(favorId) {
  try {
    const response = await axios.get(GET_TRADE_URL, {
      params: { favorId: favorId },
    });
    const tradeData = response.data;
    return tradeData;
  } catch (err) {
    console.log(err.response);
  }
}

async function updateCoins(favorDetails, type, coins, status) {
  try {
    getTradeDetails(favorDetails._id).then(async tradeDetails => {
      let userId;
      if (status === 'Completed') {
        userId = tradeDetails[0].favorerId;
      } else {
        userId = favorDetails.favoreeId;
      }
      const response = await axios.get(UPDATE_COINS_URL, {
        params: { type: type, favorCoins: coins, userId: userId },
      });
    });
  } catch (err) {
    console.log(err.response);
  }
}

function FavorStatus() {
  const toast = useToast();
  const location = useLocation();
  const navigate = useNavigate();
  let mac_button = <> </>;
  let cancel_button = <> </>;
  if (location.state.isFavoree === true) {
    if (location.state.favorDetails.status === 'Accepted') {
      mac_button = (
        <Button
          mx="1rem"
          py="1.5rem"
          mt="1.5rem"
          mb="2rem"
          rounded={'2xl'}
          background="green.300"
          color="gray.100"
          onClick={async => {
            updateStatus(location.state.favorDetails._id, 'Completed')
              .then(
                updateCoins(
                  location.state.favorDetails,
                  'add',
                  location.state.favorDetails.favorCoins,
                  'Completed'
                )
              )
              .then(navigate('/user-profile'))
              .then(
                toast({
                  title: 'Yes! Favor Completed.',
                  status: 'success',
                  position: 'top',
                  duration: 1000,
                  isClosable: true,
                })
              )
              .catch(console.error);
          }}
        >
          <Link>Mark as Completed</Link>
        </Button>
      );
    } else if (location.state.favorDetails.status === 'Requested') {
      cancel_button = (
        <Button
          mx="1rem"
          py="1.5rem"
          rounded={'2xl'}
          background="red.300"
          color="gray.100"
          onClick={async => {
            updateStatus(location.state.favorDetails._id, 'Cancelled')
              .then(
                updateCoins(
                  location.state.favorDetails,
                  'add',
                  location.state.favorDetails.favorCoins,
                  'Cancelled'
                )
              )
              .then(navigate('/user-profile'))
              .then(
                toast({
                  title: 'No! Favor Cancelled.',
                  status: 'error',
                  position: 'top',
                  duration: 1000,
                  isClosable: true,
                })
              )
              .catch(console.error);
          }}
        >
          <Link>Cancel Favor</Link>
        </Button>
      );
    }
  }

  const status = location.state.favorDetails.status;
  let progressVal = 25;
  if (status === 'Accepted') {
    progressVal = 50;
  } else if (status === 'Completed') {
    progressVal = 100;
  } else if (status === 'Expired') {
    progressVal = 0;
  }
  return (
    <Flex
      mx={'auto'}
      justifyContent="center"
      flex="1"
      alignContent="center"
      direction={'column'}
      p="1rem"
      minH={'100vh'}
      maxW={{ lg: '4xl' }}
    >
      <Progress
        value={progressVal}
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
        Favor {location.state.favorDetails.status}
      </Text>
      <FavorCard details={location.state.favorDetails} description={'show'} />
      {mac_button}
      {cancel_button}
      <Box mt="3em">
        <Navbar />
      </Box>
    </Flex>
  );
}

export default FavorStatus;
