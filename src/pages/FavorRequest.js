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
  HStack,
} from '@chakra-ui/react';

import { SiCoffeescript } from 'react-icons/si';
import { FaHamburger, FaHandsHelping } from 'react-icons/fa';
import Navbar from '../components/Navbar';

export default function Form() {
  const [value, setValue] = React.useState('60');
  const handleChange = event => setValue(event.target.value);
  return (
  
      <Flex 
        minH="100vh"
        mx="auto"
        maxW="4xl"
        align={'center'}
        justify={'center'}
      >
        <Stack mx={'auto'} w="full" py={'2rem'} px="2rem">
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Request a Favor</Heading>
          </Stack>
          <Stack spacing={4}>
            <FormControl id="Title" >
              <FormLabel>Title</FormLabel>
              <Input type="string" rounded="2xl" placeholder='Favor Title'/>
            </FormControl>

            <FormControl id="Description">
              <FormLabel>Description</FormLabel>
              <Textarea
                placeholder="Describe your favor here"
                minHeight="10rem"
                rounded="2xl"
              />
            </FormControl>

            <FormControl id="Category">
              <FormLabel>Category</FormLabel>
              <Box rounded={'2xl'} bg={'transparent'} boxShadow={'lg'} p={8}>
                <RadioGroup defaultValue="1">
                  <Stack spacing={4}>
                    <Radio value="1">
                      <Icon
                        as={SiCoffeescript}
                        w={7}
                        h={7}
                        color="blue.600"
                        verticalAlign="-8px"
                      />{' '}
                      Coffee
                    </Radio>
                    <Divider />
                    <Radio value="2">
                      <Icon
                        as={FaHamburger}
                        w={7}
                        h={7}
                        color="blue.600"
                        verticalAlign="-8px"
                      />{' '}
                      Food
                    </Radio>
                    <Divider />
                    <Radio value="3">
                      <Icon
                        as={FaHandsHelping}
                        w={7}
                        h={7}
                        color="blue.600"
                        verticalAlign="-8px"
                      />{' '}
                      General Help
                    </Radio>
                  </Stack>
                </RadioGroup>
              </Box>
            </FormControl>

            <FormControl id="Expiry">
              <Text>Your Favor request will expire in {value} minutes.</Text>
              <Input
               type={'number'}
                mt ='1rem'
                value={value}
                onChange={handleChange}
                placeholder="60"
                size="sm"
                defaultValue="60"
                rounded="2xl"
              />
            </FormControl>
            <Button
              mb='2rem'
              bg={'blue.400'}
              py="1.5rem"
              color={'white'}
              rounded="2xl"
              _hover={{
                bg: 'blue.500',
              }}
            >
              Post Favor
            </Button>
            <Navbar active={2}/>
          </Stack>
        </Stack>
      </Flex>
    
  );
}
