import {
  Button,
  Center,
  Link,
  Text,
  useBreakpointValue,
  VStack,
  Box,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function WithBackgroundVideo() {
  return (
    <Box position="relative" overflow="hidden">
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
        width="100%"
        height="100%"
        bg="rgba(0, 0, 0, 0.7)"
      />
      <Center position="relative" zIndex={1}>
        <VStack
          justify="center"
          alignItems="center"
          spacing={8}
          px={useBreakpointValue({ base: 4, md: 8 })}
          textAlign="center"
          py={{ base: "40vh", md: "50vh" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Text
              color="gray.100"
              fontWeight={700}
              fontSize={useBreakpointValue({ base: "2xl", md: "3xl" })}
            >
              Onewanko labs: We build technology.
            </Text>
          </motion.div>
        </VStack>
      </Center>
    </Box>
  );
}
