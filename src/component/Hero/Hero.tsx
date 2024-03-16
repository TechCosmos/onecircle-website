import { Box, Center, Text, useBreakpointValue, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function WithBackgroundVideo() {
  return (
    <Box position="relative" h="100vh" w="100vw" overflow="hidden">
      <video
        src="/assets/background.mp4"
        autoPlay
        loop
        muted
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      />
      <Box
        position="absolute"
        top={0}
        left={0}
        h="100%"
        w="100%"
        bg="rgba(0, 0, 0, 0.7)"
      />
      <Center position="relative" zIndex={1} h="100%">
        <VStack
          spacing={6}
          textAlign="center"
          color="white"
          maxW="3xl"
          px={useBreakpointValue({ base: 4, md: 8 })}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Text
              fontSize={{ base: "2xl", md: "4xl" }}
              fontWeight="bold"
              mb={4}
            >
              Onewanko labs
            </Text>
            <Text
              fontSize={{ base: "xl", md: "1xl" }}
              fontWeight="bold"
              mb={8}
            >
              An Investor Group Building Technology
            </Text>
            <Text fontSize={{ base: "md", md: "lg" }} mb={4}>
              We invest in great technology and develop innovative solutions 
              that have a beneficial effect. We aim to push the boundaries of what's 
              possible and build a more promising future for all.
            </Text>
            <Text fontSize={{ base: "md", md: "lg" }}>
            Together with a team of specialists and a passion for innovation, our goal 
            is to solve complex problems and make a difference in the world.
            </Text>
          </motion.div>
        </VStack>
      </Center>
    </Box>
  );
}