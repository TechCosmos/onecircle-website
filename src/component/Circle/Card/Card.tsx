import {
  Heading,
  Text,
  Stack,
  Badge,
  useColorModeValue,
  Link,
  Button,
  VStack,
  Flex,
  Box
} from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import data from "../../../../data/circle.json";

export default function Card() {
  return (
        <>
           {data.map(({ title, tag, description, link }) => (
            <VStack bg={"white"} maxW="300px" py={5} rounded="lg" spacing={5}>
              <Flex
                alignItems="center"
                justifyContent="space-between"
                w="full"
                px={5}
                pos="relative"
                key={title}
              >
                <Box
                  pos="absolute"
                  transform="translateY(50%, -50%)"
                  borderBottom="1px solid"
                  borderColor="gray.400"
                  w="full"
                  left="0"
                  zIndex={0}
                ></Box>
                <Box w="50px" h="50px" rounded="full" bg={"blue.400"} zIndex={1}></Box>
              </Flex>
              <VStack spacing={0} align="start" w="full" px={5}>
                <Text fontSize="xl" fontWeight="bold" textTransform="uppercase" color="black">
                  {title}
                </Text>
                <Text textTransform="uppercase" fontSize="sm" color="bleu.400">
                  {tag}
                </Text>
              </VStack>
              <Box w="full" px={5}>
                <Text fontSize="sm" noOfLines={3} color="gray.400">
                  {description}
                </Text>
              </Box>
              <Box px={5} w="full">
                <Button
                  bg={"blue.400"}
                  color="white"
                  w="full"
                  _hover={{ bg: "blue.500" }}
                  size="lg"
                  aria-label={""}
                  rightIcon={<FaArrowRight />}
                >
                  <Link href={link} _hover={{ textDecoration: "none" }} color="white">
                    Learn more
                  </Link>
                </Button>
              </Box>
            </VStack>
          ))}
      </>
  );
}
