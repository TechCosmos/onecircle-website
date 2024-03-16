import { Center, Heading, Text, VStack } from "@chakra-ui/react";
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
      <Center minH="calc(115vh - 180px)" bg="black" py={16}>
        <VStack spacing={8} color="white" textAlign="center">
          <Heading as="h1" size={{ base: "2xl", md: "4xl" }}>
            404 - Page Not Found
          </Heading>
          <Text fontSize={{ base: "md", md: "lg" }}>
            The page you're looking for could not be found.
          </Text>
        </VStack>
      </Center>
    </Layout>
  );
}