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
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState, useRef, useEffect } from 'react';
const FAVOR_URL = process.env.REACT_APP_URL + '/favors';

export default function Form() {
  const navigate = useNavigate();

  const [expiry, setExpiry] = React.useState('60');
  const [title, setTitle] = useState('');
  const [coins, setCoins] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Coffee');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (success === true) {
      setErrMsg('');
    }
  }, [success]);

  useEffect(() => {
    if (errMsg !== '') {
      setSuccess(false);
    }
  }, [errMsg]);

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      let favorBody = {
        title: title,
        description: description,
        // expiry: expiry,
        category: category,
        favorCoins: coins,
      };
      const response = await axios.post(FAVOR_URL, favorBody);
      console.log(response);
      setSuccess(true);
      navigate('/user-profile');
    } catch (err) {
      setErrMsg(err.response.data);
      console.log(err.response);
    }
  };

  return (
    <Flex minH="100vh" mx="auto" maxW="4xl" align={'center'} justify={'center'}>
      <Stack mx={'auto'} w="full" py={'2rem'} px="2rem">
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Request a Favor</Heading>
        </Stack>
        <form onSubmit={handleSubmit}>
          <Stack spacing={4}>
            <FormControl id="Title">
              <FormLabel>Title</FormLabel>
              <Input
                type="string"
                rounded="2xl"
                placeholder="Favor Title"
                onChange={e => setTitle(e.target.value)}
                value={title}
              />
            </FormControl>

            <FormControl id="Description">
              <FormLabel>Description</FormLabel>
              <Textarea
                placeholder="Describe your favor here"
                minHeight="5.5rem"
                rounded="2xl"
                onChange={e => setDescription(e.target.value)}
                value={description}
              />
            </FormControl>

            <FormControl id="Favor Coins">
              <FormLabel>Favor Coins</FormLabel>
              <Input
                type="number"
                rounded="2xl"
                placeholder="3"
                onChange={e => setCoins(e.target.value)}
                value={coins}
              />
            </FormControl>

            <FormControl id="Category">
              <FormLabel>Category</FormLabel>
              <Box rounded={'2xl'} bg={'transparent'} boxShadow={'lg'} p={8}>
                <RadioGroup value={category} onChange={val => setCategory(val)}>
                  <Stack spacing={4}>
                    <Radio value="Coffee">
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
                    <Radio value="Food">
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
                    <Radio value="General Help">
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
              <Text>Your Favor request will expire in {expiry} minutes.</Text>
              <Input
                type={'number'}
                mt="1rem"
                onChange={e => setExpiry(e.target.value)}
                value={expiry}
                placeholder="60"
                size="sm"
                rounded="2xl"
              />
            </FormControl>
            <Button
              type="sumbit"
              mb="2rem"
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
            <Text textAlign={'center'}>{errMsg}</Text>
            <Navbar active={2} />
          </Stack>
        </form>
      </Stack>
    </Flex>
  );
}
