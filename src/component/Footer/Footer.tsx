import {
  Box,
  Input,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  useColorModeValue,
  Image,
  Container,
  Tag,
} from "@chakra-ui/react";
import { ReactNode } from "react";

const Logo = () => {
  return (
    <>
       <Link href="/">
              <Image
              src={useColorModeValue('assets/onewanko_logo.png', 'assets/onewanko_logo.png')}
              alt="onewanko"
              height={65}
              width={120}
              />
        </Link>
    </>
  );
};

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function LargeWithLogoCentered() {
  return (
    <Box
      bg={useColorModeValue("#F7FAFC", "#F7FAFC")}
      color={useColorModeValue("gray.700", "gray.200")}
    > 

      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={'flex-start'}>
            <ListHeader>Onewanko media</ListHeader>
            <Link href={"/#features"}>Overview</Link>
            <Stack direction={'row'} align={'center'} spacing={2}></Stack>
            <Link href={"/circle"}>Current projects</Link>
            <Tag
                size={'sm'}
                bg={useColorModeValue('blue.300', 'blue.800')}
                ml={2}
                color={'white'}>
                New
              </Tag>
            <Link href={"#"}>Releases</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Company</ListHeader>
            <Link href={'#'}>About Us</Link>
            <Link href={'#'}>Careers</Link>
            <Link href={'#'}>Contact Us</Link>
            <Link href={'#'}>Partners</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Legal</ListHeader>
            <Link href={'#'}>Cookies Policy</Link>
            <Link href={'#'}>Privacy Policy</Link>
            <Link href={'#'}>Terms of Service</Link>
            <Link href={'#'}>Status</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Follow Onewanko</ListHeader>
            <Link href={"https://youtube.com/onewanko"}>Youtube</Link>
            <Link href={"https://twitter.com/onewankolabs"}>Twitter</Link>
            <Link href={"https://tiktok.com/@onewanko"}>Tiktok</Link>
            <Link href={"https://instagram.com/onewanko"}>Instagram</Link>
          </Stack>
        </SimpleGrid>
      </Container>
     
      <Box py={3}>
        <Flex
          align={"center"}
          _before={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: useColorModeValue("gray.200", "gray.700"),
            flexGrow: 1,
            mr: 8,
          }}
          _after={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: useColorModeValue("gray.200", "gray.700"),
            flexGrow: 1,
            ml: 8,
          }}
        >
          <Logo />
        </Flex>
        <Text pt={6} fontSize={"sm"} textAlign={"center"}>
          © 2023 Onewanko. All rights reserved
        </Text>
      </Box>
    </Box>
  );
}
