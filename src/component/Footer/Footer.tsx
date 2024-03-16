import React from 'react';
import { Box, chakra, Stack, Text } from '@chakra-ui/react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box bg="black" py={6} color="gray.100">
      <Stack
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'center' }}
        align={{ base: 'center', md: 'center' }}
        maxW="6xl"
        mx="auto"
        px={6}
      >
        <Text>© 2022 - { currentYear } Onewanko labs.</Text>
      </Stack>
    </Box>
  );
};

export default Footer;
