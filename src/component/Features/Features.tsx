import { Box, Heading, Text, VStack, Flex } from "@chakra-ui/react";
import data from "../../../data/hero.json";
import Image from "next/image";

export default function gridListWithCTA() {
  return (
    <Box w="full" minH="100vh" background="blue.400" p={7} color="white">
      <VStack textAlign={"center"} spacing={20}>
        <Heading id="features" fontSize={"3xl"}>{data.home.description_title}</Heading>
        <VStack spacing={20}>
          <Flex
            textAlign={{ base: "center", lg: "right" }}
            alignItems="center"
            gap={{ base: 15, lg: 20 }}
            direction={{ base: "column", lg: "row" }}
          >
            <Text fontSize={"lg"} maxW="636px" order={{ base: 2, lg: 1 }}>
              {data.home.first_paragraph}
            </Text>
            <Box order={{ base: 1, lg: 2 }} w="auto" h="auto">
              <Image
                src={"/assets/first-paragraph.svg"}
                alt={""}
                width="400"
                height="200"
              />
            </Box>
          </Flex>
          <Flex
            textAlign={{ base: "center", lg: "left" }}
            alignItems="center"
            gap={{ base: 15, lg: 20 }}
            direction={{ base: "column", lg: "row" }}
          >
            <Image
              src={"/assets/second-paragraph.svg"}
              alt={""}
              width="400"
              height="200"
            />
            <Text fontSize={"lg"} maxW="636px">
              {data.home.second_paragraph}
            </Text>
          </Flex>
        </VStack>
      </VStack>
    </Box>
  );
}
