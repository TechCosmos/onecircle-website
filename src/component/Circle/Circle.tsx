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
  Center,
  CircularProgress,
} from "@chakra-ui/react";
import Image from "next/image";
import Card from "./Card/Card";
import React, { useState, useEffect } from "react";



export default function Circle() {
  const legend = '"Build together, Grow together"'
  
  const [countdown, setCountdown] = useState(null);

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setMonth(targetDate.getMonth() + 3);

    const interval = setInterval(() => {
    const currentDate = new Date();
    const remainingTime = targetDate.getTime() - currentDate.getTime();

      if (remainingTime <= 0) {
        clearInterval(interval);
        setCountdown("Countdown reached 0!");
      } else {
        const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (remainingTime % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

        setCountdown(
          ` ${days} : ${hours} : ${minutes} : ${seconds} `
        );
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);


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
              <Link href="/circle#project" _hover={{ textDecoration: "none" }}>
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
      <VStack h="auto" bg="blue.400" p={7} w="full" textAlign={"center"} spacing={10}>
        <Heading id="project" fontSize={"3xl"}  color="white">
          Projects
        </Heading>
       
        <Box m={'auto'}>
        <Container maxW={'7xl'} pt="20" mx={'auto'}>

          {/* Countdown goes here */}
          <Container my="4rem" >
            {countdown ? (
              <Text fontSize={{base: "3xl", md: "4xl"}} fontWeight="bold" color={"white"}>
                {countdown}
              </Text>
            ) : (
              <CircularProgress isIndeterminate color="blue.400" />
            )}
          </Container>

          {/* 
          <Grid templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(1, 1fr)' , md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)', xl: 'repeat(4, 1fr)' }} gap={6} px={6}>
             <Card /> 
          </Grid> 
          */}

          </Container>
        </Box>
      </VStack>
    </>
  );
}

