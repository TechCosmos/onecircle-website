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
        Onewanko is a community where developers can come together to tackle larger and more complex projects. Our platform provides a space for collaboration and sharing of ideas, and rewards developers with tokens based on their contributions to projects. This creates a dynamic and innovative environment where developers can push the boundaries of what is possible.
       <br></br><br></br>
       In addition to supporting collaboration among members, Onewanko also aims to support the broader technology community by sharing research and results. This helps to advance the field and drive innovation.
       <br></br><br></br>
       To further enhance the platform, we focus on providing opportunities for members to collaborate on larger and more complex projects. This includes developing tools and resources to support collaboration and distributed development, as well as providing support and resources to help members develop the skills and knowledge they need to work on these projects. By providing these resources and opportunities, we foster a more collaborative and innovative environment, driving growth and advancement in the technology field.
       <br></br><br></br>
       Overall, Onewanko is a unique and exciting community that brings together developers from all backgrounds and levels of experience. By providing a collaborative environment and a platform for sharing ideas and results, we are fostering innovation and growth in the world of technology. Join us and be a part of something special.
        </Text>
      </Stack>
      </Box>
    );
  }
  
  