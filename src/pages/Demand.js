import React, { useState, useEffect } from 'react';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Divider,
  Center,
  Textarea,
  RadioGroup,
  Radio,
  Link,
  Image,
  Button,
  Heading,
  Icon,
  Text,
  useColorModeValue,
  InputGroup,
  InputLeftElement,
  ButtonGroup,
  Menu,
  MenuItem,
  MenuButton,
  MenuList,
  HStack,
} from '@chakra-ui/react';
import DemandNav from '../components/DemandNavbar';
import DemandFavorCard from '../components/DemandFavorCard';
import Navbar from '../components/Navbar';
import { SiCoffeescript } from 'react-icons/si';
import { FaHamburger, FaHandsHelping } from 'react-icons/fa';
import {
  SearchIcon,
  IconButton,
  HamburgerIcon,
  AddIcon,
  ExternalLinkIcon,
  RepeatIcon,
  EditIcon,
} from '@chakra-ui/icons';

import FavorCard from '../components/FavorCard';
import axios from 'axios';
axios.defaults.withCredentials = true;

const DEMANDS_URL = 'http://localhost:4000/favors';


export default function DemandPage() {
  let [cards,setCards] = useState([]);

  const getFavors = async e => {
    try {
      const json = await axios.get(DEMANDS_URL, {withCredentials: true});
      console.log(json.data);
      setCards(json.data);
  
    } catch (err) {
      console.log("Didn't update");
      // cards = [];
    }
  };

  useEffect(() => {
    getFavors();
  }, []);

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
    <Heading as="h1" fontSize={'4xl'} textAlign='center' mb='1rem'>
      Welcome, Joe
    </Heading>

    <InputGroup>
      <InputLeftElement
        children={<Icon as={SearchIcon} color="blue.700" />}
      />
      <Input
        mb='1rem'
        type="string"
        bg="gray.50"
        fontWeight="bold"
        placeholder="Search"
        rounded="70px"
      />
    </InputGroup>
    <DemandNav />
    <Menu>
      <MenuButton as={HamburgerIcon} h='2rem' w='2rem' variant="outline" my='1rem' mx='auto' />
      <MenuList>
        <MenuItem icon={<SiCoffeescript />}>Coffee</MenuItem>
        <MenuItem icon={<FaHamburger />}>Food</MenuItem>
        <MenuItem icon={<FaHandsHelping />}>General Help</MenuItem>
      </MenuList>
    </Menu>
    {console.log("Cards", cards)}
    {
        cards.map((card) => (
          <FavorCard 
            details={card}
          />
        )
        )
    }
  

    <Navbar active={1}/>
  </Flex>
  );
}
