import React from 'react';
import {
    Box,
    Stack,
    chakra,
    Heading,
    GridItem,
    Container,
    Text
  } from '@chakra-ui/react';
  import {} from '@chakra-ui/react';
  import data from "../../data/hero.json"
  
  
  export default function gridListWithCTA() {
    return (
      <Box as={Container} maxW="5xl" mt={14} p={4}>
        <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading fontSize={'3xl'}>{data.home.description_title}</Heading>
        <Text color={'gray.600'} fontSize={'xl'}>
            {data.home.description}
             </Text>
      </Stack>
      </Box>
    );
  }
  
  
