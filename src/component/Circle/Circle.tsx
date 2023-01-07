import React from "react";
import {
  Heading,
  VStack,
  Box,
  Grid,
  useColorModeValue,
  Container
} from "@chakra-ui/react";
import Card from "./Card/Card";

export default function Circle() {
  return (

    <Container maxW={'9xl'} p="12"  bg={useColorModeValue('white', 'gray.800')}>
      <VStack borderWidth="1px" w="auto" spacing={4} borderRadius="lg" p={5}  bg={useColorModeValue('gray.100', 'gray.800')}>
      <Box w="100%">
          <Heading size="md" color={useColorModeValue('gray.800', 'gray.800')}> Community Project </Heading>
      </Box>
      <Grid templateColumns='repeat(1, 1fr)' gap={6}>
            <Card />
      </Grid>
      </VStack>
    </Container>
  );
}
