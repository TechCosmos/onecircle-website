import {
  Avatar,
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaDollarSign } from "react-icons/fa";
import { useComponentSize } from "react-use-size";
import Card from "./Card/Card";
import ContributorCard from "./Card/ContributorCard";

export default function Circle() {
  const { ref, width } = useComponentSize();

  return (
    <Box
      flexGrow="1"
      display="flex"
      alignItems="center"
      flexDir="column"
      p={5}
      gap={10}
    >
      {
        // * Team presentation
      }
      <VStack
        ref={ref}
        borderWidth="1px"
        w="max-content"
        spacing={4}
        borderRadius="lg"
        p={5}
      >
        <Box w="100%" borderBottomWidth={1} pb={4}>
          <Heading size="md">Our Team</Heading>
        </Box>
        <Grid w="100%" templateColumns={{ xl: "1fr 1fr", sm: "1fr" }} gap={5}>
          <GridItem>
            <Card />
          </GridItem>
          <GridItem>
            <Card />
          </GridItem>
        </Grid>
      </VStack>
      {
        // * Fin team
      }
      {
        // * Contributors
      }
      <VStack borderWidth={1} borderRadius="lg" p={5} spacing={4} w={width}>
        <Box w="100%">
          <Heading size="md">Contributors</Heading>
        </Box>
        <Tabs variant="unstyled" w="100%">
          <TabList>
            <Tab
              textTransform="uppercase"
              _selected={{ bg: "blue.300", color: "white" }}
            >
              Most recent
            </Tab>
            <Tab
              textTransform="uppercase"
              _selected={{ bg: "blue.300", color: "white" }}
            >
              Top contibutors
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel
              p={5}
              maxH="250px"
              overflowY="scroll"
              sx={{
                "&::-webkit-scrollbar": {
                  display: "none",
                },
                "-ms-overflow-style": "none",
                scrollbarWidth: "none",
              }}
            >
              <VStack w="100%" spacing={6}>
                <ContributorCard />
                <ContributorCard />
                <ContributorCard />
                <ContributorCard />
                <ContributorCard />
                <ContributorCard />
                <ContributorCard />
                <ContributorCard />
                <ContributorCard />
              </VStack>
            </TabPanel>

            <TabPanel
              p={5}
              maxH="250px"
              overflowY="scroll"
              sx={{
                "&::-webkit-scrollbar": {
                  display: "none",
                },
                "-ms-overflow-style": "none",
                scrollbarWidth: "none",
              }}
            >
              <VStack w="100%" spacing={6}>
                <ContributorCard />
                <ContributorCard />
              </VStack>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </VStack>
      {
        // * Fin contributors
      }
    </Box>
  );
}
