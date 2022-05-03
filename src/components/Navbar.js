import {
  Box,
  Flex,
  Icon,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Spacer,
  HStack,
} from '@chakra-ui/react';

import { BiHomeAlt } from 'react-icons/bi';
import { BiPlus } from 'react-icons/bi';
import { BiUser } from 'react-icons/bi';

export default function Navbar() {
  return (
    <Box>
      <div
        style={{
          position: 'fixed',
          left: 0,
          bottom: 0,
          right: 0,
          // background: '#B0C4DE',
          // borderTopLeftRadius: '2em',
          // borderTopRightRadius: '2em',
          background: 'linear-gradient(to bottom , transparent, white)',
        }}
      >
        <DesktopNav />
      </div>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');

  return (
    <Flex
      justify={'space-between'}
      mx={{ base: '1em', md: '10em', lg: '20em' }}
    >
      <Box py="0.5em">
        <Link>
          <Icon as={BiHomeAlt} w={10} h={10} color="blue.600" />
        </Link>
      </Box>
      <Box py="0.5em">
        <Link>
          <Icon as={BiPlus} w={10} h={10} color="blue.600" />
        </Link>
      </Box>
      <Box py="0.5em">
        <Link>
          <Icon as={BiUser} w={10} h={10} color="blue.600" />
        </Link>
      </Box>
    </Flex>
  );
};

const NAV_ITEMS = [
  {
    label: 'Inspiration',
  },
  {
    label: 'Find Work',
  },
  {
    label: 'Learn Design',
    href: '#',
  },
  {
    label: 'Hire Designers',
    href: '#',
  },
];
