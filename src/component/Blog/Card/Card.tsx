import React from 'react';
import {
  Heading,
  Image,
  Text,
  Box,
  Stack,
  Avatar,
  useColorModeValue,
  Flex
} from '@chakra-ui/react';
import data from "../../../../data/temp/blog.json";

interface Props {
  defaul_image: string;
  tag: string;
  title: string;
  description: string;
  author: string;
  date: string;
}

export default function Card() {
  const bgColor = useColorModeValue('white', 'gray.900');
  const Color = useColorModeValue('gray.700', 'white');
  const defaulImage = '/blog/default.png'

  return (
    <>
      {data.map(({ defaul_image, tag, title, description, author, date }) => (
        <Box
          maxW={'445px'}
          w={'full'}
          bg={bgColor}
          boxShadow={'2xl'}
          rounded={'md'}
          p={6}
          overflow={'hidden'}
          key={title}
        >
          <Flex flex={1} bg="blue.200">
            <Image
              objectFit="cover"
              boxSize="100%"
              src={ defaul_image }
              alt={'cover'}
            />
          </Flex>
          <Stack>
            <Text
              color={'blue.400'}
              textTransform={'uppercase'}
              fontWeight={800}
              fontSize={'sm'}
              letterSpacing={1.1}
            >
              {tag}
            </Text>
            <Heading
              color={Color}
              fontSize={'2xl'}
              fontFamily={'body'}
            >
              {title}
            </Heading>
            <Text color={'gray.500'}>
              {description}
            </Text>
          </Stack>
          <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
            <Avatar
            />
            <Stack direction={'column'} spacing={0} fontSize={'sm'}>
              <Text fontWeight={600} color={'gray.800'}>{author}</Text>
              <Text color={'gray.500'}>{date}</Text>
            </Stack>
          </Stack>
        </Box>
      ))}
    </>
  );
}
