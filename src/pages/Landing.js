import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  IconButton,
  createIcon,
  IconProps,
  useColorModeValue,
} from '@chakra-ui/react';

import Faq from '../components/Faq';
import Feature from '../components/Feature';
import Logo from '../assets/AVORLY.png';
import { useLocation, useNavigate } from 'react-router-dom';

export default function CallToActionWithVideo() {
  const navigate = useNavigate();
  return (
    <Box bg="white">
      <Flex
        direction={{ base: 'column', md: 'row', lg: 'row' }}
        pb="4rem"
        minH="100vh"
        align="center"
        justify={'center'}
      >
        <Flex
          align={'center'}
          justify="center"
          px="2rem"
          py="1rem"
          direction="column"
        >
          <Image w="25rem" src={Logo} />
          <Heading
            textAlign={'center'}
            fontWeight={600}
            fontSize="5vh"
            color="#0077b6"
          >
            Need help with something?
          </Heading>
            A crypto-based gig marketplace for UCLA
          <Text textAlign={'center'} color={'gray.500'} py="1rem">
            There are two things common to every college student: we are always
            low on cash and we want to try out a million different things in
            college. So we decided to kill both birds with one app while also
            helping you make some new friends along the way.
          </Text>
          <Stack mt="1rem">
            <Button
              rounded={'2xl'}
              py="1.5rem"
              px="5rem"
              fontWeight={'normal'}
              fontSize="1.3rem"
              colorScheme={'blue'}
              bg={'blue.600'}
              _hover={{ bg: 'blue.800' }}
              onClick={() => navigate('/demand')}
            >
              Get started
            </Button>
          </Stack>
        </Flex>

        <Flex
          justify={'center'}
          align={'center'}
          display={{ base: 'none', lg: 'block' }}
        >
          <Image
            borderRadius={'3rem'}
            px="2rem"
            py="2rem"
            w={'80rem'}
            src={
              'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
            }
          />
        </Flex>
      </Flex>
      <Box p="2rem" bg={'blue.700'}>
        <Faq />
      </Box>
    </Box>
  );
}
