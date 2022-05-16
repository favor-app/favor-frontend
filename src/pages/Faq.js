import React from 'react';
import {
  Button,
  Image,
  Flex,
  Box,
  Text,
  Icon,
  Link,
  Heading,
  useToast,
} from '@chakra-ui/react';

import Faq from '../components/Faq';

export default function FaqPage() {
    return (
        <>
            <Heading color='blue.900' as="h1" fontSize={{ base: '3xl', lg: '4xl' }} textAlign="center" fontWeight={'1000'} mb="1rem">
            Faq
            </Heading>
            <Faq />
        </>
    );
};