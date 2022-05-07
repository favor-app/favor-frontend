import React, { useState, useEffect } from 'react';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Heading,
  Icon,
  Button,
  useColorModeValue,
  InputGroup,
  InputLeftElement,

  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from '@chakra-ui/react';
import Navbar from '../components/Navbar';

import {
  SearchIcon
} from '@chakra-ui/icons';

import FavorCard from '../components/FavorCard';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const DEMANDS_URL = process.env.REACT_APP_URL + '/favors';
const DEMANDS_CATEG_URL = process.env.REACT_APP_URL + '/favors/byCategory';
const USER_URL = process.env.REACT_APP_URL + '/users';

export default function DemandPage() {
  const navigate = useNavigate();
  let [cards, setCards] = useState([]);
  let [user, setUser] = useState({});
  let [category, setCategory] = useState('Coffee');

  const getFavors = async () => {
    if (category === 'All') {
      console.log('All');
      try {
        const json = await axios.get(DEMANDS_URL);
        // console.log(json.data);
        setCards(json.data);
      } catch (err) {
        console.error(err.response);
      }
    } else {
      try {
        const json = await axios.get(DEMANDS_CATEG_URL, {
          params: { category: category },
        });
        // console.log(json.data);
        setCards(json.data);
      } catch (err) {
        console.error(err.response);
      }
    }
  };

  const getUser = async () => {
    try {
      const userData = await axios.get(USER_URL);
      setUser(userData.data);
    } catch (err) {
      console.error(err.response);
      navigate('/login');
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    getFavors();
  }, [category]);

  return (
    <Flex
      mx={'auto'}
      minH={'92vh'}
      justifyContent="center"
      direction={'column'}
      px="2rem"
      py="2rem"
      maxW={{ lg: '4xl' }}
    >
      <Heading as="h1" fontSize={'3xl'} textAlign="center" mb="1rem">
        Welcome, {user.name !== undefined ? user.name.split(' ')[0] : ''}
      </Heading>

      <InputGroup>
        <InputLeftElement
          children={<Icon as={SearchIcon} color="blue.700" />}
        />
        <Input
          mb="1rem"
          type="string"
          bg="gray.50"
          fontWeight="bold"
          placeholder="Search"
          rounded="70px"
        />
      </InputGroup>
      <Tabs size="lg" isFitted variant="enclosed">
        <TabList>
          <Tab _selected={{ bg: 'gray.100', borderColor: 'gray.200' }}>
            Demands
          </Tab>
          <Tab _selected={{ bg: 'gray.100', borderColor: 'gray.200' }}>
            Favors
          </Tab>
        </TabList>
      </Tabs>

      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box
                flex="1"
                textAlign="center"
                color="gray.500"
                fontSize={'1.2rem'}
                py="0.5rem"
              >
                Filter by Category:
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pt={'0.5rem'}>
            <Flex wrap={'wrap'} justifyContent="center">
              <Button
                mx="1rem"
                mt="0.5rem"
                onClick={() => {
                  setCategory('All');
                }}
              >
                All
              </Button>
              <Button
                mx="1rem"
                mt="0.5rem"
                onClick={() => {
                  setCategory('Coffee');
                }}
              >
                Coffee
              </Button>
              <Button
                mx="1rem"
                mt="0.5rem"
                onClick={() => {
                  setCategory('Food');
                }}
              >
                Food
              </Button>
              <Button
                mx="1rem"
                mt="0.5rem"
                onClick={() => {
                  setCategory('General Help');
                }}
              >
                General Help
              </Button>
              <Button
                mx="1rem"
                mt="0.5rem"
                onClick={() => {
                  setCategory('Grocery');
                }}
              >
                Grocery
              </Button>
            </Flex>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>

      <Box mb="1rem">
        {cards.map(card => (
          <FavorCard
            onClick={async => {
              navigate('/favor-description', {
                state: {
                  favorDetails: card,
                },
              });
            }}
            details={card}
          />
        ))}
      </Box>

      <Navbar active={1} />
    </Flex>
  );
}
