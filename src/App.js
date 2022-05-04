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
import FavorCard from './components/FavorCard';
import Navbar from './components/Navbar';

function App() {
  return (
    <Box>
      <FavorCard />
      <FavorCard />
      <FavorCard />
      <FavorCard />
      <FavorCard />
      <FavorCard />
      <Box mt="3em">
        <Navbar />
      </Box>
    </Box>
  );
}

export default App;
