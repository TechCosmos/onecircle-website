import {
  Button, Center, Flex, Link, Stack, Text, useBreakpointValue, VStack
} from "@chakra-ui/react";
import Image from "next/image";

export default function WithBackgroundImage() {
  return (
    <Center
      w={"full"}
      h={"100vh"}
      // backgroundImage={
      //   "url(https://gateway.pinata.cloud/ipfs/QmaQNfwVAGj1vxesbWRPfnPeGRPaNZ12zmBRwPepNsufMK/hero-img.jpg)"
      // }
      // backgroundSize={"cover"}
      // backgroundPosition={"center center"}
    >
      <Flex w="75%" direction={{base: "column", md: "row"}} alignItems={{base: "center", md: "unset"}}>
        <Image src={"/assets/hero-img.svg"} alt={""} width="843" height="611" />
        <VStack
          // w={"full"}
          justify={"center"}
          alignItems="flex-end"
          px={useBreakpointValue({ base: 4, md: 8 })}
          textAlign={{base: "center", md: "right"}} // hero text alignment
          // bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
        >
          <Stack maxW={"2xl"} spacing={6}>
            <Text
              color={"black"}
              fontWeight={700}
              lineHeight={1.2}
              textTransform="uppercase"
              fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
              We help to build<br/>the next generations<br/>of technology
            </Text>
            <Stack direction={"row"} alignSelf={{base: "center", md: "flex-end"}}>
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
