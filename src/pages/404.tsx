import { Box, 
  Center, 
  Heading, 
  Image, 
  Text, 
  VStack, 
  useColorModeValue, } from "@chakra-ui/react";
import Layout from '../component/Layout';
import MetaTags from "../utils/meta";

export default function NotFoundPage() {
    return (
      <Layout>
        <MetaTags
          title="404 - Page Not Found"
          description="The page you're looking for could not be found."
          image="/assets/404.svg"
          url="onewanko.com"
        />
        <Center height="calc(100vh - 80px)" bg={useColorModeValue('white', 'black')}>
          <VStack spacing={6} color={"black"}>
            <Image src="/assets/404.svg" alt="404 image" width={204} height={204} />
            <Heading as="h1" size="xl">
              404 - Page Not Found
            </Heading>
            <Text fontSize="xl" color={"gray.400"}>
              The page you're looking for could not be found.
            </Text>
          </VStack>
        </Center>
      </Layout>
    );
  }
  