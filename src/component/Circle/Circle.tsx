import React from "react";
import {
  Heading,
  VStack,
  Box,
  WrapItem,
  Wrap,
} from "@chakra-ui/react";
import Card from "./Card/Card";

export default function Circle() {
  return (
    <Box flexGrow="1" display="flex" alignItems="center" flexDir="column" pt={10}>
      <VStack borderWidth="1px" w="4xl" spacing={4} borderRadius="lg" p={5}>
        <Box w="100%">
          <Heading size="md">Our Team</Heading>
        </Box>
        <Wrap w="100%">
          <WrapItem minW="50%" maxW="100%" w="50%">
            <Card />
          </WrapItem>
        </Wrap>
      </VStack>
    </Box>
  );
}
