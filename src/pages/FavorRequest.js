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
    HStack
  } from '@chakra-ui/react';
 
  import { SiCoffeescript } from "react-icons/si";
  import { FaHamburger, FaHandsHelping } from "react-icons/fa";


  export default function Form(){
    const [value, setValue] = React.useState('60');
    const handleChange = (event) => setValue(event.target.value);
    return (
    <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}
    >
    <Stack spacing={8} mx={'auto'} minWidth="60%" py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Request a Favor</Heading>
        </Stack>
        <Stack spacing={4}>
        <FormControl id="Title">
            <FormLabel>Title</FormLabel>
            <Input type="string" rounded='lg'/>
        </FormControl>

        <FormControl id="Description">
            <FormLabel>Description</FormLabel>
            <Textarea placeholder='Describe your favor here' minHeight='10rem' rounded='lg'/>
        </FormControl>
        
        <FormControl id='Category'>
        <FormLabel>Category</FormLabel>
            <Box
            rounded={'lg'}
            bg={'transparent'}
            boxShadow={'lg'}
            p={8}
            >
            <RadioGroup defaultValue='1'>
            <Stack spacing={4}>
                <Radio value='1'> 
                <Icon as={SiCoffeescript} w={7} h={7} color="blue.600" verticalAlign='-8px'/> Coffee 
                </Radio>
                <Divider />
                <Radio value='2'>
                <Icon as={FaHamburger} w={7} h={7} color="blue.600" verticalAlign='-8px'/>  Food
                </Radio>
                <Divider />
                <Radio value='3'>
                <Icon as={FaHandsHelping} w={7} h={7} color="blue.600" verticalAlign='-8px'/>  General Help
                </Radio>
            </Stack>
            </RadioGroup>
        </Box>
        </FormControl>
        
        <FormControl id='Expiry'>
            <Text mb='8px'>Favor expires in {value} mins</Text>
                <Input
                    value={value}
                    onChange={handleChange}
                    placeholder='60'
                    size='sm'
                    defaultValue='60'
                    rounded='lg'
                />
        </FormControl>
        <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
              >
                Post Favor
        </Button>
        </Stack>
        
        {/* <Stack spacing={1}>
            <Text mb='8px'>Title: </Text>
            <Input
                variant='Outline'
                placeholder='Here is a sample placeholder'
                size='sm'
            />
        </Stack> */}
    </Stack>
    </Flex>
    );
  }