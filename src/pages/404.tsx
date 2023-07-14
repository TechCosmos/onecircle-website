import { 
  Center, 
  Heading, 
  Text, 
  VStack, 
 } from "@chakra-ui/react";
import Layout from '../component/Layout';
import MetaTags from "../utils/meta";

export default function NotFoundPage() {
    return (
      <Layout>
        <MetaTags
          title="404 - Page Not Found"
          description="The page you're looking for could not be found."
          image="/assets/default.png"
          url="onewanko.com"
        />
        <Center height="calc(100vh - 80px)" bg="black">
          <VStack spacing={6} color={"black"}>
            
            <Heading as="h1" size="xl" color="white">
              404 - Page Not Found 
            </Heading>
            <Text fontSize="xl" color="gray.400" >
              The page you're looking for could not be found.
            </Text>
          </VStack>
        </Center>
      </Layout>
    );
  }
  