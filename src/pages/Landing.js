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
import Logo from '../assets/logo.png';

export default function Landing() {
  return (
    <div
      style={{
        position: 'fixed',
        top: '0px',
        left: '0px',
        height: '100%',
        width: '100%',

        background: 'radial-gradient(at center,white, #d4e5fa )',
      }}
    >
      <Flex
        textAlign={'center'}
        align="center"
        justify="center"
        direction="column"
        maxW="60vw  "
        minH="100vh"
        mx="auto"
      >
        <Image src={Logo} ml="3" mb="1rem" w={'12rem'}></Image>
        <Heading
          fontWeight={800}
          fontSize={{ base: '4xl', sm: '6xl', md: '7xl' }}
          lineHeight={'110%'}
          mb="1rem"
          color={'blue.600'}
        >
          Need something in a hurry?{' '}
          <Text as={'span'} color={'black'}>
            Ask for it.
          </Text>
        </Heading>

        <Text color={'gray.900'} fontSize={{ sm: '20', md: '30' }} mb="1rem">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          ligula lectus, convallis vel tincidunt eget, lacinia at lorem.
          Maecenas at interdum nibh, convallis vel tincidunt.
        </Text>

        <Stack spacing={6} direction={'row'}>
          <Button
            fontWeight={'thin'}
            fontSize={'1.2rem'}
            rounded={'2xl'}
            mb='2rem'
            p={'1.8rem'}
            colorScheme={'blue'}
            bg={'blue.600'}
            _hover={{ bg: 'blue.900' }}
          >
            Get started
          </Button>
        </Stack>
      </Flex>
    </div>
  );
}
