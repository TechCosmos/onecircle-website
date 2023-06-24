import { Box, Center, Heading, useColorModeValue, Text } from "@chakra-ui/react";
import Layout from "../component/Layout";

const Newsletter = () => {
  return (
    <Layout>
      <Box
        bg={useColorModeValue("white", "black")}
        p={{ base: 10, md: 30 }}
        color={"GrayText"}
      >
        <Center>
          <Heading as="h1" size="lg" mb={4}>
            Subscribe to Our Newsletter
          </Heading>
        </Center>
        <Center>
          <iframe
            src="https://onewanko.substack.com/embed"
            width="480"
            height="320"
            style={{ border: "1px solid #EEE", background: "white" }}
            frameBorder="0"
            scrolling="no"
          ></iframe>
        </Center>
        <Box
          mx={{ base: 4, md: 300 }}
          my={8}
        >
          <Heading as="h2" size="md" mt={4}>
            Poukisa pou abone?
          </Heading>
          <Text>
            Abone pou jwenn aksè konplè a nouvèl teknoloji. 
            Antre nan kominote pasyone nou an ki vle ogmante 
            teknoloji pou pwodiktivite, aprantisaj, ak devlopman konpetans.
          </Text>
          <br />
          <Heading as="h2" size="md" mt={4}>
            Rete konekte
          </Heading>
          <Text>
            Ou pa bezwen enkyete w ou pap manke anyen.
             N’ap kenbe w ou okouran ak dènye sa kap 
             pase nan mond teknoloji a. Chak nouvo edisyon 
             bilten pral dirèkteman nan bwat mail ou.
          </Text>
          <br />
          <Heading as="h2" size="md" mt={4}>
            Antre nan ekipaj la
          </Heading>
          <Text>
            Fè pati yon kominote moun ki pataje enterè w.
          </Text>
        </Box>
      </Box>
    </Layout>
  );
};

export default Newsletter;
