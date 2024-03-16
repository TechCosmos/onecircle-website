import { Box, Flex, Image, useColorModeValue } from "@chakra-ui/react";

export default function Navbar() {
  const logoPath = "assets/onewanko_logo.png";
  const logoColor = useColorModeValue("gray.800", "white");

  return (
    <Box w="100%" h="100px" position="fixed" top={0} bg="transparent" zIndex={999}>
      <Flex minH="80px" align="center" justify="center">
        <Flex alignItems="center" fontFamily="heading" color={logoColor}>
          <Image src={logoPath} alt="onewanko" height={{base:100, md:130}} width={{base:150, md:200}} />
        </Flex>
      </Flex>
    </Box>
  );
}