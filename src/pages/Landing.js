import {
  Flex,
  Box,
  Image,  
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Icon,
  IconProps,
  VStack,
} from '@chakra-ui/react';

export default function Landing() {
  return (
    <Flex
      textAlign={'center'}
      align="center"
      justify="center"
      s
      direction="column"
      maxW="65vw  "
      minH="100vh"
      mx="auto"
    >
      <Image src='https://i.ibb.co/JqpWB4c/Picture1.png' w={'20rem'}></Image>
      <Heading
        fontWeight={600}
        fontSize={{ base: '5xl', sm: '8xl', md: '10xl' }}
        lineHeight={'110%'}
        my="1rem"
        color={'blue.400'}
      >
        Need something in a hurry?{' '}
        <Text as={'span'} color={'black'}>
          Ask for it.
        </Text>
      </Heading>

      <Text color={'gray.500'} fontSize={{ sm: '20', md: '30' }} mb="1rem">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ligula
        lectus, convallis vel tincidunt eget, lacinia at lorem. Maecenas at
        interdum nibh. 
      </Text>

      <Stack spacing={6} direction={'row'}>
        <Button
          fontSize={'1.2rem'}
          rounded={'1rem'}
          p={'1.5rem'}
          colorScheme={'blue'}
          bg={'blue.400'}
          _hover={{ bg: 'blue.500' }}
        >
          Get started
        </Button>
        <Button rounded={'1rem'} p={'1.5rem'} fontSize={'1.2rem'}>
          Learn more
        </Button>
      </Stack>
    </Flex>
  );
}
