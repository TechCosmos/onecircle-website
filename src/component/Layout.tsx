import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import { Box, Flex } from "@chakra-ui/react";

export default function Layout({ children }) {
  return (
    <Flex minH="100vh" flexDir="column" justifyContent="space-between" gap="0">
      <Navbar />
      {children}
      <Footer />
    </Flex>
  );
}
