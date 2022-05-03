import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import Card from './components/Card';
import Navbar from './components/Navbar';

function App() {
  return (
    <Box>
      <Card />
      <Card />
      <Card />
      <Card />
      <Box mt="2em">
        <Navbar />
      </Box>
    </Box>
  );
}

export default App;
