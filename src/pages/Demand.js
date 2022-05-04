import React from 'react';
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

  import { SiCoffeescript } from "react-icons/si";
  import { FaHamburger, FaHandsHelping } from "react-icons/fa";
  import { SearchIcon, IconButton, HamburgerIcon, AddIcon, ExternalLinkIcon, RepeatIcon, EditIcon } from '@chakra-ui/icons'
  export default function DemandPage(){
      return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}
        > 
        <Stack spacing={8} mx={'auto'} minWidth="80%" py={12} px={6} align={'center'}>
            <Stack align={'center'}>
                <Heading as='h1' fontSize={'4xl'}>Welcome, Joe</Heading>
            </Stack>
            <InputGroup>
                <InputLeftElement children={<Icon as={SearchIcon} color="blue.700" />} />
                <Input type="string" bg="gray.50" fontWeight='bold' placeholder="Search" rounded='70px'/>
            </InputGroup> 
            <DemandNav />
            <Menu>
            <MenuButton
                as={HamburgerIcon}
                aria-label='Options'
                variant='outline'
            />
            <MenuList>
                <MenuItem icon={<SiCoffeescript />}>
                Coffee
                </MenuItem>
                <MenuItem icon={<FaHamburger />}>
                Food
                </MenuItem>
                <MenuItem icon={<FaHandsHelping />}>
                General Help
                </MenuItem>
            </MenuList>
            </Menu>
            <DemandFavorCard />
            <DemandFavorCard />
            <DemandFavorCard />
            <DemandFavorCard />
            <DemandFavorCard />
            <DemandFavorCard />
            <DemandFavorCard />
            <Navbar />
        </Stack>
        </Flex>
      );
  }