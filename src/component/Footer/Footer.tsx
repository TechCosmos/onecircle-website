import React from 'react';
import { Box, chakra, Stack, Text, Image, useColorModeValue, VisuallyHidden } from '@chakra-ui/react';
import { FaTwitter, FaYoutube, FaTiktok } from 'react-icons/fa';

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      display="inline-flex"
      alignItems="center"
      justifyContent="center"
      w={8}
      h={8}
      rounded="full"
      bg="transparent"
      transition="background 0.3s ease"
      _hover={{ bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200') }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.a>
  );
};

const Footer = () => {
  return (
    <Box bg="black" py={6} color="gray.100">
      <Stack
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
        maxW="6xl"
        mx="auto"
        px={6}
      >
        <Image src="assets/onewanko_logo.png" height={38} alt="Logo" />
        <Text>© 2023 Onewanko labs. All rights reserved.</Text>
        <Stack direction="row" spacing={6}>
          <SocialButton label="Twitter" href="https://www.twitter.com/onewankolabs">
            <FaTwitter />
          </SocialButton>
          <SocialButton label="YouTube" href="https://www.youtube.com/onewanko">
            <FaYoutube />
          </SocialButton>
          <SocialButton label="Tiktok" href="https://www.tiktok.com/onewanko">
            <FaTiktok />
          </SocialButton>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Footer;
