import React from 'react';
import {
  chakra,
  Text,
  Box,
  Image,
  Flex,
  Icon,
  useColorModeValue,
  Link,
} from '@chakra-ui/react';
import { RiHandCoinFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

var moment = require('moment');
var datejs = require('datejs');

const FavorCard = props => {
  const navigate = useNavigate();
  let description;
  description =
    props.description === 'show' ? (
      <Text mt={2} color={'gray.600'}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
        expedita dicta totam aspernatur doloremque.
      </Text>
    ) : (
      <></>
    );

  const getExpiryTime = () => {
    const date = props.details.favorRequestTime;
    const expiryTimer = props.details.favorRequestTimer;
    const nowDateObj = new Date(Date.now());
    // console.log(date);
    var oldDateObj = moment(date).add(expiryTimer, 'm').toDate();
    var seconds = nowDateObj - oldDateObj;
    // console.log(seconds);
    var minutes = Math.round(seconds / 60000);
    return minutes;
  };

  const getDate = () => {
    return moment(props.details.favorRequestTime).format('MMMM D, Y');
  };
  

  return (
    <Flex py={'1rem'} alignItems="center" justifyContent="center">
      <Box w="full" px={'1rem'} pt={'1rem'} rounded="2xl" shadow="lg">
        <Flex justifyContent="space-between" alignItems="center">
          <chakra.span
            fontSize="sm"
            color={useColorModeValue('gray.600', 'gray.400')}
          >
            {getDate()}
          </chakra.span>
          <Link
            px={3}
            py={1}
            bg="blue.600"
            color="gray.100"
            fontSize="sm"
            fontWeight="700"
            rounded="lg"
            _hover={{ bg: 'gray.500' }}
          >
            {props.details.category}
          </Link>
        </Flex>

        <Box mt={2}
        onClick={ async => {navigate('/favor-description')}}>
          <Flex alignItems="center">
            <Image
              mr={'1rem'}
              w={'6rem'}
              h={'6rem'}
              rounded="full"
              fit="cover"
              // display={{ base: "none", sm: "block" }}
              src="https://www.eatright.org/-/media/eatrightimages/cup-of-coffee_528814833.jpg"
              alt="avatar"
            />
            <Flex display={'block'}>
              <Link
                fontSize="2xl"
                color={useColorModeValue('blue.700', 'white')}
                fontWeight="700"
                _hover={{
                  color: useColorModeValue('gray.600', 'gray.200'),
                }}
              >
                {props.details.title}
              </Link>
              <Text fontSize="1rem">
                {' '}
                <Icon
                  as={RiHandCoinFill}
                  w={5}
                  h={5}
                  color="blue.600"
                  verticalAlign="-4px"
                />{' '}
                {props.details.favorCoins}{' '}
              </Text>
              <Text>Expires in {getExpiryTime()} minutes</Text>
            </Flex>
          </Flex>
          {description}
        </Box>

        <Flex alignItems="center" mt={4}></Flex>
      </Box>
    </Flex>
  );
};

export default FavorCard;
