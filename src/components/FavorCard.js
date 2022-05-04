import React from 'react';
import {
  chakra,
  Text,
  Box,
  Image,
  Flex,
  useColorModeValue,
  Link,
} from '@chakra-ui/react';

const FavorCard = props => {
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
  return (
    <Flex  py={'1rem'} alignItems="center" justifyContent="center">
      <Box
        w={'full'}
        px={'1rem'}
        pt={'1rem'}
        rounded="2xl"
        shadow="lg"
      >
        <Flex justifyContent="space-between" alignItems="center">
          <chakra.span
            fontSize="sm"
            color={useColorModeValue('gray.600', 'gray.400')}
          >
            Mar 10, 2019
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
            Category
          </Link>
        </Flex>

        <Box mt={2}>
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
                Buy me a Coffee
              </Link>
              <Text>Joe Bruin</Text>
              <Text>Expires in 10 minutes</Text>
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
