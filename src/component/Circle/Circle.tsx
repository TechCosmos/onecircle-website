import {
  Avatar,
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Link,
  Text,
  useBreakpointValue,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import useSWR from "swr";

const fetcher = (url) =>
  fetch(url).then((response) => {
    return response.json();
  });

function TeamCard({ url, ...props }) {
  const { data } = useSWR(url, fetcher);
  console.log(data);
  return (
    <VStack bg={"white"} w="300px" maxW="300px" py={5} rounded="lg" spacing={3}>
      <Avatar name={data.login} src={data.avatar_url} />
      <Text fontWeight="bold">{data.login}</Text>
      <Text maxW="70%" fontSize="sm" noOfLines={1}>
        {data.bio ? data.bio : "Contibutor to Onewanko"}
      </Text>
    </VStack>
  );
}

function ProjectCard() {
  return (
    <VStack bg={"white"} maxW="300px" py={5} rounded="lg" spacing={5}>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        w="full"
        px={5}
        pos="relative"
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
        <Box w="50px" h="50px" rounded="full" bg={"red"} zIndex={1}></Box>
        <Text
          fontSize="lg"
          textTransform="uppercase"
          alignSelf="start"
          zIndex={1}
          color="gray.400"
        >
          Added time
        </Text>
      </Flex>
      <VStack spacing={0} align="start" w="full" px={5}>
        <Text fontSize="xl" fontWeight="bold" textTransform="uppercase">
          Project name
        </Text>
        <Text textTransform="uppercase" fontSize="sm" color="gray.400">
          Project role
        </Text>
      </VStack>
      <Box w="full" px={5}>
        <Text fontSize="sm" noOfLines={3}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quia
          cumque officia autem cupiditate quos laborum tempora error nesciunt
          sed? Blanditiis minima consequatur enim, repellat, fugiat numquam
          repudiandae sint corporis suscipit maxime tempore. Soluta, blanditiis
          quae similique nemo veritatis ratione quis sint deleniti alias optio,
          debitis eum exercitationem repudiandae possimus.
        </Text>
      </Box>
      <Box px={5} w="full">
        <Button
          bg={"blue.400"}
          color={"white"}
          w="full"
          _hover={{ bg: "blue.500" }}
          size="lg"
          aria-label={""}
          rightIcon={<FaArrowRight />}
        >
          <Link href="/circle" _hover={{ textDecoration: "none" }}>
            Learn more
          </Link>
        </Button>
      </Box>
    </VStack>
  );
}

export default function Circle({ contributors, ...props }) {
  return (
    <>
      <Flex
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
                fontSize={{ base: "sm", md: "lg" }}
                textTransform="uppercase"
              >
                "Code together, Grow together"
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
        <Box>
          <ProjectCard />
        </Box>
      </VStack>
      <VStack h="auto" bg="blue.400" p={7} w="full" align="start" spacing={4}>
        <Heading fontSize="2xl" color="white">
          Team
        </Heading>
        <Wrap>
          {contributors.map((contributor) => {
            return (
              <WrapItem key={contributor.login}>
                <TeamCard key={contributor.login} url={contributor.url} />
              </WrapItem>
            );
          })}
        </Wrap>
      </VStack>
    </>
  );
}
