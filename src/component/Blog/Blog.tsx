import React from 'react';
import {
  Heading, Image, Text, Divider, HStack, Tag, useColorModeValue, Wrap, WrapItem, SpaceProps, Container, 
  Box, Grid,
} from '@chakra-ui/react';
import Card from "./Card/Card";



const ArticleList = () => {
  return (
    <Box bg={useColorModeValue('white', 'black')}>
      <Container maxW={'7xl'} p="12" >
        <Heading as="h2" marginTop="5" color={'gray.700'}>
          Articles
        </Heading>
        <Divider marginTop="5" bg={'black'} mb={100}/>
        <Box m={'auto'} >
          
            <Grid templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(1, 1fr)' , md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)', xl: 'repeat(3, 1fr)' }} gap={6} px={6}>
  
                <Card />
              
            </Grid> 
          
        </Box>
      </Container>
    </Box>
  );
};

export default ArticleList;

