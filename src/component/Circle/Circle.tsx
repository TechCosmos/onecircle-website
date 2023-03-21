import {
  Avatar, Grid,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Link,
  Text,
  useBreakpointValue,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import Image from "next/image";;
import useSWR from "swr";
import Card from "./Card/Card";

const fetcher = (url: RequestInfo | URL) =>
  fetch(url).then((response) => {
    return response.json();
  });
  
/*
function TeamCard({ url, ...props }) {
  const { data, isLoading } = useSWR(url, fetcher);

  if (!isLoading) {
    return (
      <VStack
        bg={"white"}
        w="300px"
        maxW="300px"
        py={5}
        rounded="lg"
        spacing={3}
      >
        <Avatar name={data.login} src={data.avatar_url} />
        <Text fontWeight="bold">{data.login}</Text>
        <Text maxW="70%" fontSize="sm" noOfLines={1}>
          {data.bio ? data.bio : "Contibutor to Onewanko"}
        </Text>
      </VStack>
    );
  }
}
*/

export default function Circle({ contributors, ...props }) {
  const legend = '"Build together, Grow together"'

  return (
    <>
      <Flex
        bg={useColorModeValue('white', 'black')}
        minH="calc(100vh - 80px)"
        justifyContent="center"
        alignItems="center"
        p={5}
      >
        <Flex
          w="75%"
          justifyContent="space-between"
          direction={{ base: "column", lg: "row" }}
          alignItems="center"
          gap={10}
        >
          <VStack
            align={{ base: "center", lg: "start" }}
            spacing={{ base: 5, lg: 20 }}
            order={{ base: 2, lg: 1 }}
          >
            <VStack align={{ base: "center", lg: "start" }} spacing={5}>
              <Text
                color={"black"}
                fontWeight={700}
                lineHeight={1.2}
                textTransform="uppercase"
                fontSize={useBreakpointValue({ base: "2xl", md: "4xl" })}
              >
                Join our community
              </Text>
              <Text
                color={"gray.400"}
                fontSize={{ base: "sm", md: "lg" }}
                textTransform="uppercase"
              >
                {legend}
              </Text>
            </VStack>
            <Button
              bg={"blue.400"}
              rounded={"full"}
              color={"white"}
              _hover={{ bg: "blue.500" }}
              px={12}
              py={"6"}
            >
              <Link href="/circle" _hover={{ textDecoration: "none" }}>
                Join
              </Link>
            </Button>
          </VStack>
          <Box order={{ base: 1, lg: 2 }}>
            <Image
              src="/assets/circle-hero.svg"
              width="651"
              height="490"
              alt={""}
              priority
            />
          </Box>
        </Flex>
      </Flex>
      <VStack h="auto" bg="blue.400" p={7} w="full" align="start" spacing={4}>
        <Heading fontSize="2xl" color="white">
          Projects
        </Heading>
       
        <Box m={'auto'}>
        <Container maxW={'7xl'} pt="20" mx={'auto'}>
        <Grid templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(1, 1fr)' , md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)', xl: 'repeat(4, 1fr)' }} gap={6} px={6}>
          <Card />
          </Grid> 
          </Container>
        </Box>
      </VStack>
      <VStack h="auto" bg="blue.400" p={7} w="full" align="start" spacing={4}>
        <Heading fontSize="2xl" color="white">
          Team
        </Heading>
         
      </VStack>
    </>
  );
}

 // <Wrap>
         // {contributors.map((contributor: {login: string, url: string}) => {
         //  return (
         //      <WrapItem key={contributor.login}>
         //        <TeamCard key={contributor.login} url={contributor.url} />
         //       </WrapItem>
         //  );
         //     })}
         //  </Wrap> 