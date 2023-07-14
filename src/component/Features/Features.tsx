import React from 'react';
import { Box, Heading, Text, VStack, Link, Code, useBreakpointValue } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionHeading = motion(Heading);
const MotionText = motion(Text);

export default function GridListWithCTA() {
  return (
    <Box w="full" minH="80vh" bg="black" p={7} color="white">
      <VStack textAlign="center" spacing={10}>
        <MotionHeading id="circle" fontSize={useBreakpointValue({ base: "2xl", md: "3xl" })} initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          Technology Development in Haiti (TDH)
        </MotionHeading>
        <VStack spacing={10}>
          <MotionText fontSize="md" maxW="800px" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
            We are a group of enthusiastic technologists trying to develop technology in Haiti. By establishing specialized circles for various areas of knowledge, our objective is to promote advancement and innovation.
          </MotionText>
          <MotionText fontSize="md" maxW="800px" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6 }}>
            Starting with <Code colorScheme="transparent">Circle/Math</Code> and <Code colorScheme="transparent">Circle/AI</Code>, these circles place a strong emphasis on encouraging communication and information sharing between professionals and amateurs. We think that by bringing together people with different backgrounds and viewpoints, we can encourage the adoption of technology and develop useful solutions that are specifically suited to the possibilities and difficulties.
          </MotionText>
          <MotionText fontSize="md" maxW="800px" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.9 }}>
            We welcome you to collaborate with us if you have knowledge or are a driven individual who wants to contribute. Please reach out to us at <Link color="cyan.400" href="mailto:contact@onewanko.com">contact@onewanko.com</Link> to get involved and make a difference.
          </MotionText>
        </VStack>
      </VStack>
    </Box>
  );
}
