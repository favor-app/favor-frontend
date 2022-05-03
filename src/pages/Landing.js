import {
  Flex,
  Box,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Icon,
  IconProps,
  VStack,
} from '@chakra-ui/react';

export default function CallToActionWithIllustration() {
  return (
    <Flex
      textAlign={'center'}
      align="center"
      justify="center"s
      direction="column"
      maxW="70vw  "
      minH="100vh"
      mx="auto"
    >
      <Heading
        fontWeight={600}
        fontSize={{ base: '5xl', sm: '8xl', md: '10xl' }}
        lineHeight={'110%'}
        my='1rem'
      >
        Meeting scheduling{' '}
        <Text as={'span'} color={'blue.400'} >
          made easy
        </Text>
      </Heading>

      <Text color={'gray.500'} fontSize={{ sm: '20', md: '30' }} mb='1rem'>
        Never miss a meeting. Never be late for one too. Keep track of your
        meetings and receive smart reminders in appropriate times. Read your
        smart “Daily Agenda” every morning.
      </Text>

      <Stack spacing={6} direction={'row'}>
        <Button
          rounded={'0.5rem'}
          px={'1rem'}
          colorScheme={'blue'}
          bg={'blue.400'}
          _hover={{ bg: 'blue.500' }}
        >
          Get started
        </Button>
        <Button rounded={'0.5rem'} px={'1rem'}>
          Learn more
        </Button>
      </Stack>
    </Flex>
  );
}
