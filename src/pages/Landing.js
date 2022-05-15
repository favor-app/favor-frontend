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

import Feature from '../components/Feature';
import Logo from '../assets/Logo_Final.png';
import { useLocation, useNavigate } from 'react-router-dom';

export default function CallToActionWithVideo() {
  const navigate = useNavigate();
  return (
    <Box bg="white">
      <Flex
        direction={{ base: 'column', md: 'row', lg: 'row' }}
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
          <Image w="10rem" src={Logo} />
          <Heading
            textAlign={'center'}
            lineHeight={1.2}
            fontWeight={600}
            fontSize="5vh"
            color="#367ab7"
          >
            Need Help with something? Fret Not!
          </Heading>
          <Text textAlign={'center'} color={'gray.500'} py="1rem" px="1rem">
            There are two things common to every college student: we are always
            low on cash and we want to try out a million different things in
            college. So we decided to kill both birds with one app while also
            helping you make some new friends along the way.
          </Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: 'column', sm: 'row' }}
          >
            <Button
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
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
            w={'90rem'}
            src={
              'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
            }
          />
        </Flex>
      </Flex>

      <Feature />
    </Box>
  );
}
