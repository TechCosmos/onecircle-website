import React from 'react';
import {
    Box,
    Stack,
    chakra,
    Heading,
    GridItem,
    Container,
    Text
  } from '@chakra-ui/react';
  import {} from '@chakra-ui/react';
  
  interface FeatureProps {
    heading: string;
    text: string;
  }
  
  const Feature = ({ heading, text }: FeatureProps) => {
    return (
      <GridItem>
        <chakra.h3 fontSize="xl" fontWeight="600">
          {heading}
        </chakra.h3>
        <chakra.p>{text}</chakra.p>
      </GridItem>
    );
  };
  
  export default function gridListWithCTA() {
    return (
      <Box as={Container} maxW="5xl" mt={14} p={4}>
        <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading fontSize={'3xl'}>A Collaborative Community for Developers to Drive Innovation and Advance Technology</Heading>
        <Text color={'gray.600'} fontSize={'xl'}>
             A community of collaborators to kick-start innovation towards technology progression
              <br></br>
             Onewanko is a community where developers can come together to contribute to large and complex projects.  We and you different collaborator are preparing spaces for collaboration and sharing of ideas, and also rewards for developers with tokens according to their contributions to projects.  This will create a healthy and innovative environment where developers can apply all their skills.
              <br></br>
             In addition to supporting collaboration between members, we also aim to support the wider technology community by sharing research and results.  This will help boost innovation as many open source projects allow by saving time.
              <br></br>
             To further improve the platform, we will provide tools and resources to support the community in their collaboration.  By providing these resources and opportunities, we foster a more collaborative and innovative environment, while boosting the growth and advancement of projects all around the world of technology.
              <br></br>
             We are a unique and exciting community that brings together developers from all backgrounds and experience levels.  By providing a collaborative environment and a platform for sharing ideas and results, for the x100+++ growth of technology.  Join us and let's build something special.
        </Text>
      </Stack>
      </Box>
    );
  }
  
  
