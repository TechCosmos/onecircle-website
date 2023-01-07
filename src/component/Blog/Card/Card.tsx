import React from 'react';
import {
  Heading,
  Image,
  Text,
  Box,
  Stack,
  Avatar,
  useColorModeValue
} from '@chakra-ui/react';
import data from "../../../../data/blog.json";

export default function Card() {
  return (
    <Box
        maxW={'445px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}>
        <Box
          h={'210px'}
          bg={'gray.100'}
          mt={-6}
          mx={-6}
          mb={9}
          pos={'relative'}>
          <Image
            src={
              'https://geekforthewin.com/wp-content/uploads/2019/11/Best-Sci-Fi-Anime-Movies-featured.jpg'
            }
          />
        </Box>
        <Stack>
          <Text
            color={'green.500'}
            textTransform={'uppercase'}
            fontWeight={800}
            fontSize={'sm'}
            letterSpacing={1.1}>
            {data.blog.card.tag}
          </Text>
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}>
            {data.blog.card.title}
          </Heading>
          <Text color={'gray.500'}>
           {data.blog.card.description}
          </Text>
        </Stack>
        <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
          <Avatar
            src={'https://geekforthewin.com/wp-content/uploads/2019/11/Best-Sci-Fi-Anime-Movies-featured.jpg'}
          />
          <Stack direction={'column'} spacing={0} fontSize={'sm'}>
            <Text fontWeight={600}>{data.blog.card.author}</Text>
            <Text color={'gray.500'}>{data.blog.card.date}</Text>
          </Stack>
        </Stack>
      </Box>
  )
}
