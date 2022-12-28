import React from "react";
import {
  Heading,
  Flex,
  VStack,
  Box,
  WrapItem,
  Wrap,
  Center,
  Image,
  Badge,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Card() {
  return (
    <VStack spacing={0} w="100%" borderWidth="1px">
      <Center w="100%" bg={useColorModeValue("gray.50", "gray.900")} p={10}>
        <Flex flexDir="row" gap={5} h="100%">
          <Image
            objectFit="cover"
            fit="cover"
            align="center"
            w="109px"
            h="109px"
            src="https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80"
            alt=""
          />
          <Flex flexDir="column" justifyContent="space-between" flexGrow="1">
            <Box>
              <Heading size="lg">Jessica Nigri</Heading>
              <Badge colorScheme="blue" borderRadius="lg">
                Developer
              </Badge>
            </Box>
            <Wrap>
              <WrapItem>
                <Icon as={FaFacebook} boxSize={5} color="facebook.500" />
              </WrapItem>
              <WrapItem>
                <Icon as={FaTwitter} boxSize={5} color="twitter.500" />
              </WrapItem>
              <WrapItem>
                <Icon as={FaLinkedin} boxSize={5} color="linkedin.500" />
              </WrapItem>
            </Wrap>
          </Flex>
        </Flex>
      </Center>
      <Center h="20%" background="blue" w="100%" p={3}>
        <Wrap>
          <WrapItem>
            <Badge fontSize=".6em">Head Developper</Badge>
          </WrapItem>
          <WrapItem>
            <Badge fontSize=".6em">Front End Developer</Badge>
          </WrapItem>
          <WrapItem>
            <Badge fontSize=".6em">Back End Developer</Badge>
          </WrapItem>
        </Wrap>
      </Center>
    </VStack>
  );
}
