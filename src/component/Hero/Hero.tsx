import {
  Button,
  Center,
  Flex,
  Link,
  Stack,
  useColorModeValue,
  Text,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";

import data from "../../../data/hero.json"

export default function WithBackgroundImage() {
  return (
    <Center
      w={"full"}
      h={"calc(100vh - 80px)"}
      bg={useColorModeValue('white', 'black')}
    >
      <Flex
        w="75%"
        direction={{ base: "column", md: "row" }}
        alignItems={{ base: "center", md: "unset" }}
      >
        <Image
          src={"/assets/hero-img.svg"}
          alt={"hero-image"}
          width="743"
          height="711"
          priority
        />

        <VStack
          // w={"full"}
          justify={"center"}
          alignItems="flex-end"
          px={useBreakpointValue({ base: 4, md: 8 })}
          textAlign={{ base: "center", md: "right" }} // hero text alignment
          // bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
        >
          <Stack maxW={"2xl"} spacing={6}>
            
            <Text
              color={"black"}
              fontWeight={700}
              fontSize={useBreakpointValue({ base: "2xl", md: "3xl" })}
            >
              {data.home.legend}
            </Text>

            <Stack
              direction={"row"}
              alignSelf={{ base: "center", md: "flex-end" }}
            >
              <Button
                bg={"blue.400"}
                rounded={"full"}
                color={"white"}
                _hover={{ bg: "blue.500" }}
                size="lg"
              >
                <Link href="/circle" _hover={{ textDecoration: "none" }}>
                  Show me more
                </Link>
              </Button>

            </Stack>
            
          </Stack>

        </VStack>

      </Flex>

    </Center>
  );
}
