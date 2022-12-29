import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  Link,
  useBreakpointValue,
} from "@chakra-ui/react";
import data from "../../../data/hero.json"

export default function WithBackgroundImage() {
  return (
    <Flex
      w={"full"}
      h={"100vh"}
      backgroundImage={
        "url(https://gateway.pinata.cloud/ipfs/QmaQNfwVAGj1vxesbWRPfnPeGRPaNZ12zmBRwPepNsufMK/hero-img.jpg)"
      }
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
      <VStack
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      >
        <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
          <Text
            color={"white"}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
            We help to build the next generations of the technology.
          </Text>
          <Stack direction={"row"}>
            <Button
              bg={"blue.400"}
              rounded={"full"}
              color={"white"}
              _hover={{ bg: "blue.500" }}
            >
              <Link href="/circle" _hover={{ textDecoration: "none" }}>
                Show me more
              </Link>
            </Button>
            <Button
              bg={"whiteAlpha.300"}
              rounded={"full"}
              color={"white"}
              _hover={{ bg: "whiteAlpha.500" }}
            >
              <Link href="/learn" _hover={{ textDecoration: "none" }}>
                Learn more
              </Link>
            </Button>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}
