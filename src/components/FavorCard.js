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

const FavorCard = () => {
  return (
    <Flex
      // bg={useColorModeValue("#F9FAFB", "borderTopLeftRadius: .600")}
      p={5}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        mx="auto"
        px={8}
        py={4}
        rounded="lg"
        shadow="lg"
        bg={useColorModeValue('white', 'blue.600')}
        maxW="5xl"
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
            rounded="md"
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
       
          <chakra.p mt={2} color={useColorModeValue('black', 'black')}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
            expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos
            enim reprehenderit nisi, accusamus delectus nihil quis facere in
            modi ratione libero!
          </chakra.p>
        </Box>

        <Flex alignItems="center" mt={4}></Flex>
      </Box>
    </Flex>
  );
};

export default FavorCard;
