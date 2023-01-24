import {
  Box,
  Input,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  Tag,
  useColorModeValue,
  Image,
  Center,
  IconButton,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { BiMailSend } from 'react-icons/bi';

const Logo = () => {
  return (
    <>
      <Image
        alt={"Hero Image"}
        fit={"cover"}
        align={"center"}
        w={"100px"}
        h={"40px"}
        src={
          "https://gateway.pinata.cloud/ipfs/QmaQNfwVAGj1vxesbWRPfnPeGRPaNZ12zmBRwPepNsufMK/Logo_pnd.png"
        }
      />
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
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Center w="full" py={10}>
      <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '1fr 1fr 1fr' }}
          spacing={5}>
          <Stack align={"flex-start"}>
            <ListHeader>Onewanko media</ListHeader>
            <Link href={"/"}>Overview</Link>
            <Link href={"/circle"}>Current projects</Link>
            <Link href={"https://github.com/onewanko/"}>Contributing</Link>
            <Link href={"#"}>Releases</Link>
            <Link href={"#"}>Privacy Policy</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Follow onewanko</ListHeader>
            <Link href={"https://youtube.com/onewanko"}>Youtube</Link>
            <Link href={"https://twitter.com/onewankoorg"}>Twitter</Link>
            <Link href={"https://tiktok.com/onewanko"}>Tiktok</Link>
            <Link href={"https://instagram.com/onewanko"}>Instagram</Link>
            <Link href={"https://github.com/onewanko/onewanko-website"}>Github</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Stay up to date</ListHeader>
            <Stack direction={'row'}>
              <Input
                placeholder={'Your email address'}
                bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
                border={0}
                _focus={{
                  bg: 'whiteAlpha.300',
                }}
              />
              <IconButton
                bg={useColorModeValue('blue.400', 'blue.800')}
                color={useColorModeValue('white', 'gray.800')}
                _hover={{
                  bg: 'blue.600',
                }}
                aria-label="Subscribe"
                icon={<BiMailSend />}
              />
            </Stack>
          </Stack>
        </SimpleGrid>
      </Center>
      <Box py={10}>
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
