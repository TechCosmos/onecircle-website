import {
  Badge,
  Center,
  Flex,
  Heading,
  Icon,
  Image,
  useColorModeValue,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import Link from "next/link";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Card() {
  return (
    <VStack spacing={0} w="100%" borderWidth="1px">
      {
        //* Name and main role
      }
      <Center w="100%" bg={useColorModeValue("gray.50", "gray.900")} p={4}>
        <Flex flexDir="column" alignItems="center">
          <Image
            objectFit="cover"
            fit="cover"
            align="center"
            w="7rem"
            h="7rem"
            src="https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80"
            alt=""
          />
          <Flex flexDir="column" alignItems="center" flexGrow="1">
            <Heading size="lg">Jessica Nigri</Heading>
            <Badge
              colorScheme="blue"
              borderRadius="lg"
              px={3}
              justifySelf="center"
            >
              Developer
            </Badge>
          </Flex>
        </Flex>
      </Center>
      {
        //* Socials
      }
      <Center
        h="20%"
        background={useColorModeValue("gray.50", "gray.900")}
        w="100%"
        p={3}
      >
        <Wrap spacing={4}>
          <WrapItem>
            <Link href="#">
              <Icon as={FaFacebook} boxSize={5} color="facebook.500" />
            </Link>
          </WrapItem>
          <WrapItem>
            <Icon as={FaTwitter} boxSize={5} color="twitter.500" />
          </WrapItem>
          <WrapItem>
            <Icon as={FaLinkedin} boxSize={5} color="linkedin.500" />
          </WrapItem>
        </Wrap>
      </Center>
      {
        //* Roles
      }
      <Center h="20%" background="blue.300" w="100%" p={3}>
        <Wrap>
          <WrapItem>
            <Badge colorScheme="gray" borderRadius="lg" px={3}>
              Head Developper
            </Badge>
          </WrapItem>
          <WrapItem>
            <Badge colorScheme="gray" borderRadius="lg" px={3}>
              Frontend
            </Badge>
          </WrapItem>
          <WrapItem>
            <Badge colorScheme="gray" borderRadius="lg" px={3}>
              Backend
            </Badge>
          </WrapItem>
        </Wrap>
      </Center>
    </VStack>
  );
}
