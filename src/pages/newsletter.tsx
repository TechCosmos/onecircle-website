import { Box, Center, Heading } from "@chakra-ui/react";
import Layout from "../component/Layout";
import MetaTags from '../utils/meta';

const Newsletter = () => {
  return (
    <Layout>
      <MetaTags
          title="Onewanko labs: We build technology"
          description="We build technology"
          image="/assets/default.png"
          url="onewanko.com/newsletter"
        />
      <Box
        position="relative"
        minHeight="100vh"
        overflow="hidden"
      >
        <video
          src="/assets/bg_for_n.mp4"
          autoPlay
          muted
          loop
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: -1,
          }}
        />
        <Box
          bg="rgba(0, 0, 0, 0.8)"
          position="absolute"
          top={0}
          left={0}
          width="100%"
          height="100%"
        />
        <Box
          position="relative"
          p={{ base: 10, md: 30 }}
          color="white"
        >
          <Box
            mt={{ base: "80px", md: "120px" }}
            mb={10}
            pb={6}
          >
            <Center>
              <Heading as="h1" size="lg" mb={4}>
                Subscribe to our newsletter
              </Heading>
            </Center>
            <Center>
              <Box 
                mt={'16'}>
              <iframe
                src="https://onewanko.substack.com/embed"
                width="380"
                height="220"
                frameBorder="0"
                scrolling="no"
              ></iframe>
              </Box>
            </Center>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default Newsletter;
