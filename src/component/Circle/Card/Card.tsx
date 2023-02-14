import {
  Heading,
  Text,
  Stack,
  Badge,
  useColorModeValue,
  Link,
  Button
} from "@chakra-ui/react";
import data from "../../../../data/circle.json";

export default function Card() {
  return (
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        w={{ sm: '100%', md: '540px' }}
        height={{ sm: '476px', md: '20rem' }}
        direction={{ base: 'column', md: 'row' }}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        padding={4}

        >
        <Stack
          flex={1}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          p={1}
          pt={2}>
          <Heading fontSize={'2xl'} fontFamily={'body'} color={useColorModeValue('gray.700', 'gray.400')}>
          {data.card.title}
          </Heading>
          <Text
            textAlign={'center'}
            color={useColorModeValue('gray.700', 'gray.400')}
            px={3}>
            {data.card.description}
          </Text>
          <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue('blue.50', 'blue.800')}
              color={useColorModeValue('gray.700', 'gray.400')}
              fontWeight={'400'}>
              {data.card.tag}
            </Badge>
          </Stack>

          <Stack
            width={'100%'}
            mt={'2rem'}
            direction={'row'}
            padding={2}
            justifyContent={'space-between'}
            alignItems={'center'}>
            <Button 
              m={'auto'}
              colorScheme='blue' 
              variant='outline'
              as={Link}
              href={data.card.link}
              fontSize={'sm'}>
              See more
            </Button>
          </Stack>
        </Stack>
      </Stack>
  );
}
