import React from 'react';
import {
  chakra,
  Text,
  Box,
  Image,
  Flex,
  useColorModeValue,
  Link,
  Icon,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';

function Faq() {
    return (
        <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionItem>
            <h2>
            <AccordionButton>
                <Box flex='1' textAlign='left'>
                What is a favorcoin?
                </Box>
                <AccordionIcon />
            </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            Favorcoin is our very own crypto token used to monitor favor transactions 
            </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
            <h2>
            <AccordionButton>
                <Box flex='1' textAlign='left'>
                How do favorcoins work?
                </Box>
                <AccordionIcon />
            </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            Every time a user posts a favor request, 
            they specify the cost of the favor depending 
            on the time required to complete the favor 
            as well as the effort required to complete it
            </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
            <h2>
            <AccordionButton>
                <Box flex='1' textAlign='left'>
                What is the value of a favorcoin?
                </Box>
                <AccordionIcon />
            </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            One favorcoin is equivalent to about 15 minutes of your time
            </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
            <h2>
            <AccordionButton>
                <Box flex='1' textAlign='left'>
                How do I get more favorcoins?
                </Box>
                <AccordionIcon />
            </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
                The easiest way to get more favorcoins is by helping out your peers! Accept a favor from the request tab or even offer help to someone.
            </AccordionPanel>
        </AccordionItem>
        </Accordion>
    );
};

export default Faq;